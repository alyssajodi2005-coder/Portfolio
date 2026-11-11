import { createServer } from "node:http";
import { readFile, stat, realpath } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
const project = fileURLToPath(new URL("../", import.meta.url));
const production = process.argv.includes("--production");
const root = await realpath(production ? resolve(project, "dist") : project);
const publicRoot = resolve(root, "public");
const arg = process.argv.indexOf("--port");
const port = Number(
  arg >= 0 ? process.argv[arg + 1] : process.env.PORT || 3000,
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
const inside = (file, base) => file === base || file.startsWith(base + sep);
const server = createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      return res.end();
    }
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (["/about", "/about/", "/resume", "/resume/"].includes(pathname)) {
      res.writeHead(302, {
        Location: pathname.startsWith("/about") ? "/#about" : "/#resume",
      });
      return res.end();
    }
    const parts = pathname.split("/").filter(Boolean);
    if (parts.some((p) => p.startsWith(".")) || pathname.includes("\0")) {
      res.writeHead(404);
      return res.end("Not found");
    }
    const allowed =
      pathname === "/" ||
      pathname === "/index.html" ||
      pathname === "/404.html" ||
      pathname.startsWith("/assets/") ||
      pathname.startsWith("/work/") ||
      pathname.startsWith("/projects/") ||
      ["/resume.pdf", "/alyssa.jpg"].includes(pathname);
    if (!allowed) {
      res.writeHead(404, { "Content-Type": types[".html"] });
      return res.end(
        req.method === "HEAD"
          ? undefined
          : await readFile(resolve(root, "404.html")),
      );
    }
    let file = resolve(root, "." + pathname);
    if (!inside(file, root)) {
      res.writeHead(403);
      return res.end();
    }
    if (
      !production &&
      (pathname.startsWith("/projects/") ||
        ["/resume.pdf", "/alyssa.jpg"].includes(pathname))
    )
      file = resolve(publicRoot, "." + pathname);
    try {
      const info = await stat(file);
      if (info.isDirectory()) {
        if (!pathname.endsWith("/")) {
          res.writeHead(308, { Location: pathname + "/" });
          return res.end();
        }
        file = resolve(file, "index.html");
      }
      file = await realpath(file);
      if (!inside(file, root)) throw new Error("Invalid path");
      const data = await readFile(file);
      res.writeHead(200, {
        "Content-Type": types[extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      });
      return res.end(req.method === "HEAD" ? undefined : data);
    } catch {
      res.writeHead(404, { "Content-Type": types[".html"] });
      return res.end(
        req.method === "HEAD"
          ? undefined
          : await readFile(resolve(root, "404.html")),
      );
    }
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad request");
  }
});
server.listen(port, "0.0.0.0", () =>
  console.log(
    `${production ? "Production" : "Development"} static server listening on port ${port}`,
  ),
);

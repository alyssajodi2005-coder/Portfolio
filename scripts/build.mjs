import { cp, mkdir, rm, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, "dist");
await Promise.all(
  ["index.html", "404.html", "assets", "work", "public"].map((name) =>
    access(resolve(root, name)),
  ),
);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ["index.html", "404.html", "assets", "work"])
  await cp(resolve(root, name), resolve(output, name), { recursive: true });
await cp(resolve(root, "public"), output, { recursive: true });
console.log(
  "Built static HTML/CSS portfolio in dist/ — homepage + four project pages.",
);

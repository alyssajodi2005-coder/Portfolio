/* Small, framework-free enhancements. All project navigation is ordinary HTML. */
(() => {
  const dialogs = [...document.querySelectorAll("dialog")];
  const viewer = document.querySelector("#image-viewer");
  const image = document.querySelector("#enlarged-image");
  let opener = null;

  function openDialog(dialog, trigger) {
    if (!dialog || dialog.open) return;
    for (const other of dialogs) if (other.open) other.close();
    opener = trigger || document.activeElement;
    dialog.showModal();
    document.body.classList.add("modal-open");
  }

  for (const trigger of document.querySelectorAll("[data-open-dialog]")) {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const dialog = document.getElementById(trigger.dataset.openDialog);
      openDialog(dialog, trigger);
      if (dialog) history.pushState(null, "", `#${dialog.id}`);
    });
  }

  for (const dialog of dialogs) {
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || event.ctrlKey || event.metaKey) return;
      const controls = [
        ...dialog.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first) return;
      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === dialog)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    dialog
      .querySelector("[data-close-dialog]")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });
    dialog.addEventListener("close", () => {
      if (!dialogs.some((d) => d.open))
        document.body.classList.remove("modal-open");
      if (location.hash === `#${dialog.id}`)
        history.replaceState(null, "", location.pathname + location.search);
      if (opener instanceof HTMLElement && opener.isConnected)
        opener.focus({ preventScroll: true });
      if (dialog === viewer) image.removeAttribute("src");
    });
  }

  function syncHash() {
    const target = document.getElementById(location.hash.slice(1));
    for (const dialog of dialogs)
      if (dialog.open && dialog !== target) dialog.close();
    if (target instanceof HTMLDialogElement && target !== viewer)
      openDialog(target);
  }
  addEventListener("hashchange", syncHash);
  syncHash();

  for (const link of document.querySelectorAll("[data-lightbox]")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const source = link.querySelector("img");
      image.src = link.href;
      image.alt = source.alt;
      document.querySelector("#image-title").textContent = link
        .closest("figure")
        .querySelector("figcaption")
        .textContent.replace(/^0\d/, "")
        .trim();
      openDialog(viewer, link);
    });
  }
})();

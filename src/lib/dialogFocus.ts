const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button",
  "input",
  "select",
  "textarea",
  "iframe",
  "object",
  "embed",
  "[tabindex]",
].join(",");

interface BackgroundState {
  element: HTMLElement;
  inert: boolean;
  ariaHidden: string | null;
}

function makeBackgroundInert(dialog: HTMLElement, doc: Document): () => void {
  const previousStates: BackgroundState[] = [];
  let branch: HTMLElement = dialog;

  while (branch.parentElement) {
    const parent = branch.parentElement;
    for (const sibling of Array.from(parent.children)) {
      if (sibling === branch) continue;

      const element = sibling as HTMLElement;
      previousStates.push({
        element,
        inert: element.inert,
        ariaHidden: element.getAttribute("aria-hidden"),
      });
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    }

    if (parent === doc.body) break;
    branch = parent;
  }

  return () => {
    for (const { element, inert, ariaHidden } of previousStates) {
      element.inert = inert;
      if (ariaHidden === null) element.removeAttribute("aria-hidden");
      else element.setAttribute("aria-hidden", ariaHidden);
    }
  };
}

/** Activates keyboard containment, background inertness, and focus restoration for a dialog. */
export function activateDialogFocus(
  dialog: HTMLElement,
  onEscape: () => void,
  doc: Document = document,
): () => void {
  const opener = doc.activeElement as HTMLElement | null;
  const restoreBackground = makeBackgroundInert(dialog, doc);
  const getFocusableElements = () =>
    Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) =>
        element.tabIndex >= 0 &&
        !element.hasAttribute("disabled") &&
        !element.hasAttribute("hidden") &&
        element.getAttribute("aria-hidden") !== "true",
    );

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onEscape();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    const active = doc.activeElement;
    const activeIsInDialog = active !== null && dialog.contains(active);

    if (event.shiftKey && (!activeIsInDialog || active === first || active === dialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (!activeIsInDialog || active === last || active === dialog)) {
      event.preventDefault();
      first.focus();
    }
  };

  doc.addEventListener("keydown", handleKeyDown);
  const initialFocus = getFocusableElements()[0];
  if (initialFocus) initialFocus.focus();
  else dialog.focus();

  return () => {
    doc.removeEventListener("keydown", handleKeyDown);
    restoreBackground();
    if (opener?.isConnected) opener.focus();
  };
}

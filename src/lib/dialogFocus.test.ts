import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { activateDialogFocus } from "./dialogFocus.ts";

class MockElement {
  parentElement: MockElement | null = null;
  children: MockElement[] = [];
  focusableElements: MockElement[] = [];
  attributes = new Map<string, string>();
  inert = false;
  isConnected = true;
  tabIndex = 0;
  private readonly doc: MockDocument;

  constructor(doc: MockDocument) {
    this.doc = doc;
  }

  append(child: MockElement) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }

  focus() {
    this.doc.activeElement = this as unknown as Element;
  }

  contains(candidate: Node | null): boolean {
    let current = candidate as unknown as MockElement | null;
    while (current) {
      if (current === this) return true;
      current = current.parentElement;
    }
    return false;
  }

  querySelectorAll<T extends Element>(selector: string): NodeListOf<T> {
    void selector;
    return this.focusableElements as unknown as NodeListOf<T>;
  }

  getAttribute(name: string): string | null {
    return this.attributes.get(name) ?? null;
  }

  hasAttribute(name: string): boolean {
    return this.attributes.has(name);
  }

  setAttribute(name: string, value: string) {
    this.attributes.set(name, value);
  }

  removeAttribute(name: string) {
    this.attributes.delete(name);
  }
}

class MockDocument {
  activeElement: Element | null = null;
  body: MockElement;
  private keydownListeners = new Set<(event: KeyboardEvent) => void>();

  constructor() {
    this.body = new MockElement(this);
  }

  addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    if (type === "keydown" && typeof listener === "function") {
      this.keydownListeners.add(listener as (event: KeyboardEvent) => void);
    }
  }

  removeEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    if (type === "keydown" && typeof listener === "function") {
      this.keydownListeners.delete(listener as (event: KeyboardEvent) => void);
    }
  }

  pressKey(key: string, shiftKey = false) {
    let defaultPrevented = false;
    const event = {
      key,
      shiftKey,
      preventDefault: () => { defaultPrevented = true; },
    } as KeyboardEvent;
    for (const listener of this.keydownListeners) listener(event);
    return defaultPrevented;
  }
}

function setupDialog() {
  const doc = new MockDocument();
  const appRoot = doc.body.append(new MockElement(doc));
  const opener = appRoot.append(new MockElement(doc));
  const dialogShell = appRoot.append(new MockElement(doc));
  const dialog = dialogShell.append(new MockElement(doc));
  const closeButton = dialog.append(new MockElement(doc));
  const firstChoice = dialog.append(new MockElement(doc));
  const lastControl = dialog.append(new MockElement(doc));
  const backgroundSibling = doc.body.append(new MockElement(doc));
  backgroundSibling.setAttribute("aria-hidden", "false");
  backgroundSibling.inert = true;
  dialog.focusableElements = [closeButton, firstChoice, lastControl];
  doc.activeElement = opener as unknown as Element;
  return { doc, opener, dialog, closeButton, firstChoice, lastControl, backgroundSibling };
}

test("opening focuses the first dialog control and makes surrounding content inert", () => {
  const { doc, opener, dialog, closeButton, backgroundSibling } = setupDialog();
  const cleanup = activateDialogFocus(
    dialog as unknown as HTMLElement,
    () => {},
    doc as unknown as Document,
  );

  assert.equal(doc.activeElement, closeButton as unknown as Element);
  assert.equal(opener.inert, true);
  assert.equal(opener.getAttribute("aria-hidden"), "true");
  assert.equal(backgroundSibling.inert, true);
  assert.equal(backgroundSibling.getAttribute("aria-hidden"), "true");
  cleanup();
});

test("Tab and Shift+Tab wrap focus at both dialog boundaries", () => {
  const { doc, dialog, closeButton, firstChoice, lastControl } = setupDialog();
  const cleanup = activateDialogFocus(
    dialog as unknown as HTMLElement,
    () => {},
    doc as unknown as Document,
  );

  assert.equal(doc.pressKey("Tab", true), true);
  assert.equal(doc.activeElement, lastControl as unknown as Element);
  assert.equal(doc.pressKey("Tab"), true);
  assert.equal(doc.activeElement, closeButton as unknown as Element);

  firstChoice.focus();
  assert.equal(doc.pressKey("Tab"), false);
  assert.equal(doc.activeElement, firstChoice as unknown as Element);
  cleanup();
});

test("Escape requests close and cleanup restores opener focus and prior background state", () => {
  const { doc, opener, dialog, backgroundSibling } = setupDialog();
  let closeRequests = 0;
  const cleanup = activateDialogFocus(
    dialog as unknown as HTMLElement,
    () => { closeRequests++; },
    doc as unknown as Document,
  );

  assert.equal(doc.pressKey("Escape"), true);
  assert.equal(closeRequests, 1);
  cleanup();
  assert.equal(doc.activeElement, opener as unknown as Element);
  assert.equal(opener.inert, false);
  assert.equal(opener.getAttribute("aria-hidden"), null);
  assert.equal(backgroundSibling.inert, true);
  assert.equal(backgroundSibling.getAttribute("aria-hidden"), "false");
  assert.equal(doc.pressKey("Escape"), false);
});

test("the existing close, qualification, and booking controls remain wired to their current flow", () => {
  const source = readFileSync(new URL("../components/PreQualModal.tsx", import.meta.url), "utf8");
  const provider = readFileSync(new URL("../components/CalendlyProvider.tsx", import.meta.url), "utf8");
  const declinedMarkup = source.slice(source.indexOf('{mode === "declined"'));

  assert.equal((source.match(/onClick={resetAndClose}/g) ?? []).length, 3);
  assert.match(source, /aria-label="Close dialog"[\s\S]*?onClick={resetAndClose}/);
  assert.match(declinedMarkup, /onClick={resetAndClose}[\s\S]*?\n\s+Close\n\s+<\/button>/);
  assert.match(source, /onClick={resetAndClose}\s+className="absolute inset-0/);
  assert.match(source, /role="dialog"[\s\S]*?aria-modal="true"[\s\S]*?aria-labelledby="modal-title"/);
  assert.match(source, /id="modal-title"/);
  assert.match(source, /option === "Not yet" \|\| option === "No, just exploring"[\s\S]*?setMode\("declined"\)/);
  assert.match(source, /setMode\("qualified"\)/);
  assert.match(source, /href={bookingUrl}[\s\S]*?target="_blank"[\s\S]*?onClick={handleDirectBookingClick}/);
  assert.match(source, /if \(onConfirm\) onConfirm\(\);\s*resetAndClose\(\);/);
  assert.match(provider, /handleOpen = \(\) => setIsPreQualOpen\(true\)/);
  assert.match(provider, /onClose=\{\(\) => setIsPreQualOpen\(false\)\}/);
});

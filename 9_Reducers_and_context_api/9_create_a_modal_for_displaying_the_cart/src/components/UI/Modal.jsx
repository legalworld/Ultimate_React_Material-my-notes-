import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal"),
  );
}

export default Modal;

/* 

Yes. A typical **modal** is conceptually made of two main visual parts:

1. **Backdrop (or overlay)** — the semi-transparent layer behind the modal that covers/dims the rest of the page.
2. **Modal content/container** — the actual box/panel displayed on top, containing things like the title, text, form, buttons, etc.

For example:

```text
┌─────────────────────────────────────┐
│                                     │
│           BACKDROP / OVERLAY        │
│                                     │
│        ┌───────────────────┐        │
│        │   MODAL CONTENT   │        │
│        │                   │        │
│        │   "Are you sure?" │        │
│        │                   │        │
│        │   [Cancel] [Yes]  │        │
│        └───────────────────┘        │
│                                     │
└─────────────────────────────────────┘
```

So in React, you might conceptually have:

```jsx
<Modal>
  <Backdrop />
  <ModalContent />
</Modal>
```

The usual term you're looking for is **backdrop** or **overlay**, not "backbone."







*/

"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal" with the property Show separator.
// isOpen opens the <dialog> with showModal(), and onClose runs on Escape or a click on the backdrop.
export default function Modal({ isOpen = false, onClose, title, children, showSeparator = true }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function handleClick(event) {
    // A click on the backdrop lands on the <dialog> itself
    if (event.target === dialogRef.current) onClose?.();
  }

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose} onClick={handleClick}>
      {showSeparator && <div className={styles.separator} />}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{children}</p>
    </dialog>
  );
}

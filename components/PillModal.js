"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Puts Pill and Modal together: the pill opens the modal.
export default function PillModal({ label, type, title, children, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
        {label}
      </Pill>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} showSeparator={showSeparator}>
        {children}
      </Modal>
    </>
  );
}


"use client";

import { useEffect, useState } from "react";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5493513162208?text=Hola!%20Quiero%20saber%20m%C3%A1s%20de%20Cobrai."
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-success-600 px-4 py-3.5 text-sm font-semibold text-white shadow-2xl ring-1 ring-success-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-success-700 hover:shadow-success-500/40 sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-white" />
      </span>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.7 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.2zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8 0-2.6-1-5.1-2.9-7-1.8-1.8-4.3-2.8-6.9-2.8z" />
      </svg>
      <span className="hidden sm:inline">Chatear</span>
    </a>
  );
}

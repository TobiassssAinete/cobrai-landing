"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#demo", label: "Demo" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-brand-800"
        >
          Cobrai
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobrai%2030%20d%C3%ADas%20gratis."
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-success-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-success-700"
          >
            Probar gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobrai%2030%20d%C3%ADas%20gratis."
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-success-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-success-700"
            >
              Probar gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Demo", href: "#demo" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Términos y condiciones", href: "/terminos" },
  { label: "Política de privacidad", href: "/privacidad" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-800"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-700 to-success-600 text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.7 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.2zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8 0-2.6-1-5.1-2.9-7-1.8-1.8-4.3-2.8-6.9-2.8z" />
                </svg>
              </span>
              Cobrai
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Cobranza automatizada por WhatsApp para colegios y consorcios en
              Argentina.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5493513162208"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-success-700"
                >
                  <Phone className="size-4 text-success-600" />
                  +54 9 351 316-2208
                </a>
              </li>
              <li>
                <a
                  href="mailto:cobriasas@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-brand-700"
                >
                  <Mail className="size-4 text-brand-600" />
                  cobriasas@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-slate-600">
                <MapPin className="size-4 text-slate-500" />
                Córdoba, Argentina
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Producto
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => {
                const isExternal =
                  "external" in link
                    ? link.external
                    : link.href.startsWith("http") ||
                      link.href.startsWith("mailto:");
                return (
                  <li key={link.label}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              ¿Querés que te llamemos?
            </h3>
            <p className="mt-4 text-sm text-slate-500">
              Escribinos por WhatsApp y coordinamos una demo de 15 minutos.
            </p>
            <a
              href="https://wa.me/5493513162208?text=Hola!%20Quiero%20agendar%20una%20demo%20de%20Cobrai."
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-success-700 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.7 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.2zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8 0-2.6-1-5.1-2.9-7-1.8-1.8-4.3-2.8-6.9-2.8z" />
              </svg>
              Chatear ahora
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cobrai. Hecho en Córdoba 🇦🇷
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

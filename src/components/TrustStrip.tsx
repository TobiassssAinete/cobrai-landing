import { Lock, ShieldCheck, BadgeCheck, FileLock2 } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "WhatsApp Business oficial",
    body: "API verificada por Meta",
  },
  {
    icon: Lock,
    title: "Datos cifrados",
    body: "HTTPS / TLS end-to-end",
  },
  {
    icon: FileLock2,
    title: "Sin almacenar tarjetas",
    body: "Pagos vía MercadoPago",
  },
  {
    icon: ShieldCheck,
    title: "Ley 25.326",
    body: "Protección de datos AR",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          Pensado con seguridad de nivel empresarial
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 ring-1 ring-inset ring-slate-100"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-inset ring-brand-100">
                  <Icon className="size-4.5" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-tight text-slate-900">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

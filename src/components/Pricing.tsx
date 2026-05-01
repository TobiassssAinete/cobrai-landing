type Plan = {
  name: string;
  price: string;
  priceCurrency?: string;
  priceSuffix?: string;
  setup: string;
  highlight?: boolean;
  tagline?: string;
  features: { label: string; value: string | true }[];
  cta: { label: string; href: string };
};

const plans: Plan[] = [
  {
    name: "Esencial",
    price: "29",
    priceCurrency: "USD",
    priceSuffix: "/mes",
    setup: "Setup gratis",
    tagline: "Para empezar a automatizar la cobranza",
    features: [
      { label: "Deudores activos", value: "Hasta 100" },
      { label: "Usuarios", value: "1 admin + 2 operadores" },
      { label: "WhatsApp + Email", value: true },
      { label: "Portal del deudor", value: true },
      { label: "Dashboard gerencial", value: "Básico" },
      { label: "Agente IA", value: "—" },
      { label: "Exportación a Excel", value: true },
      { label: "Soporte", value: "Email (24hs)" },
    ],
    cta: {
      label: "Empezar →",
      href: "https://wa.me/5493513162208?text=Hola!%20Quiero%20el%20Plan%20Esencial.",
    },
  },
  {
    name: "Pro",
    price: "99",
    priceCurrency: "USD",
    priceSuffix: "/mes",
    setup: "Setup USD 100 (one-time)",
    highlight: true,
    tagline: "El más elegido por administraciones medianas",
    features: [
      { label: "Deudores activos", value: "Hasta 500" },
      { label: "Usuarios", value: "Ilimitados" },
      { label: "WhatsApp + Email", value: true },
      { label: "Portal del deudor", value: true },
      {
        label: "Dashboard gerencial",
        value: "Completo + benchmarking",
      },
      { label: "Agente IA", value: true },
      { label: "Exportación a Excel", value: true },
      {
        label: "Soporte",
        value: "Email (mismo día) + WhatsApp",
      },
    ],
    cta: {
      label: "Empezar →",
      href: "https://wa.me/5493513162208?text=Hola!%20Quiero%20el%20Plan%20Pro.",
    },
  },
  {
    name: "Business",
    price: "249",
    priceCurrency: "USD",
    priceSuffix: "/mes",
    setup: "Setup USD 200 (one-time)",
    tagline: "Para colegios y administraciones grandes",
    features: [
      { label: "Deudores activos", value: "Hasta 1.500" },
      { label: "Usuarios", value: "Ilimitados" },
      { label: "WhatsApp + Email", value: true },
      { label: "Portal del deudor", value: true },
      {
        label: "Dashboard gerencial",
        value: "Completo + benchmarking",
      },
      { label: "Agente IA", value: true },
      { label: "Exportación a Excel", value: true },
      {
        label: "Soporte",
        value: "Dedicado + WhatsApp prioritario",
      },
    ],
    cta: {
      label: "Empezar →",
      href: "https://wa.me/5493513162208?text=Hola!%20Quiero%20el%20Plan%20Business.",
    },
  },
  {
    name: "Enterprise",
    price: "499",
    priceCurrency: "USD",
    priceSuffix: "/mes",
    setup: "Setup USD 300 (one-time)",
    tagline: "Volumen alto + integraciones a medida",
    features: [
      { label: "Deudores activos", value: "Más de 1.500" },
      { label: "Usuarios", value: "Ilimitados" },
      { label: "WhatsApp + Email", value: true },
      { label: "Portal del deudor", value: true },
      {
        label: "Dashboard gerencial",
        value: "Completo + reportes a medida",
      },
      { label: "Agente IA", value: true },
      { label: "Exportación a Excel", value: true },
      { label: "Soporte", value: "Dedicado + onboarding asistido" },
    ],
    cta: {
      label: "Hablemos →",
      href: "https://wa.me/5493513162208?text=Hola!%20Quiero%20el%20Plan%20Enterprise.",
    },
  },
];

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-20 bg-slate-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Precios claros. Sin letra chica.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pagás por mes en USD. Cancelás cuando quieras. Te facturamos con CAE.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
          {plans.map((plan) => {
            const isPro = plan.highlight;
            return (
              <div
                key={plan.name}
                className={[
                  "relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm",
                  isPro
                    ? "border-success-500 shadow-lg ring-1 ring-success-500 xl:-my-3 xl:scale-[1.02]"
                    : "border-slate-200",
                ].join(" ")}
              >
                {isPro && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-success-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    ⭐ Más popular
                  </span>
                )}
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  {plan.name}
                </h3>
                {plan.tagline && (
                  <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>
                )}
                <div className="mt-4 flex items-baseline gap-1.5">
                  {plan.priceCurrency && (
                    <span className="text-base font-semibold text-slate-500">
                      {plan.priceCurrency}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-base text-slate-500">
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {plan.setup}
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6">
                  {plan.features.map((f) => (
                    <li
                      key={f.label}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <span className="text-slate-600">{f.label}</span>
                      <span className="text-right font-medium text-slate-900">
                        {f.value === true ? (
                          <span className="text-success-600" aria-label="Sí">
                            ✓
                          </span>
                        ) : (
                          f.value
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta.href}
                  target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.cta.href.startsWith("http") ? "noreferrer" : undefined}
                  className={[
                    "mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-colors",
                    isPro
                      ? "bg-success-600 text-white shadow-sm hover:bg-success-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {plan.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          ¿Necesitás Factura A? Decinos al cerrar el plan. Aceptamos
          transferencia y MP. Precios en USD facturados al tipo de cambio del
          día.
        </p>
      </div>
    </section>
  );
}

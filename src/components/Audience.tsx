import { GraduationCap, Building2, Check } from "lucide-react";

type Card = {
  icon: typeof GraduationCap;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  stat: { value: string; label: string };
  gradient: string;
  iconBg: string;
  ring: string;
  accent: string;
};

const cards: Card[] = [
  {
    icon: GraduationCap,
    eyebrow: "Colegios e instituciones",
    title: "Cobrá cuotas sin romper el vínculo",
    description:
      "Recordatorios respetuosos, links de pago para los padres y reportes para la dirección. Menos llamados, más cobranza.",
    bullets: [
      "Plantillas pensadas para padres y tutores",
      "Cuotas, matrículas, cooperadora y eventos",
      "Reportes para la dirección y el consejo",
    ],
    stat: { value: "+38%", label: "recupero promedio" },
    gradient: "from-brand-700 via-brand-800 to-brand-900",
    iconBg: "bg-white/15 text-white",
    ring: "ring-brand-400/30",
    accent: "text-brand-200",
  },
  {
    icon: Building2,
    eyebrow: "Consorcios y administraciones",
    title: "Cobrá expensas sin perseguir a nadie",
    description:
      "Mandá expensas, recordá vencimientos y registrá pagos automáticamente. Asambleas con números reales, no estimados.",
    bullets: [
      "Liquidación, intereses y mora automatizados",
      "Cartera de morosos lista para asamblea",
      "Multi-edificio desde una sola cuenta",
    ],
    stat: { value: "−60%", label: "tiempo en cobranza" },
    gradient: "from-success-700 via-success-700 to-emerald-900",
    iconBg: "bg-white/15 text-white",
    ring: "ring-success-400/30",
    accent: "text-success-200",
  },
];

export function Audience() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_20%_0%,rgba(37,99,235,0.12),transparent),radial-gradient(ellipse_60%_60%_at_80%_100%,rgba(5,150,105,0.12),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm ring-1 ring-slate-200">
            ¿Para quién es Cobrai?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pensado para colegios{" "}
            <span className="text-brand-700">y</span> consorcios
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dos mundos parecidos: muchos pagos chicos, recordatorios que se
            repiten, y nadie con tiempo para perseguir morosos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-8 text-white shadow-xl ring-1 ${card.ring} transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-10`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-white/10 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-20 -bottom-20 size-48 rounded-full bg-white/5 blur-3xl"
                />

                <div className="relative">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl ${card.iconBg} ring-1 ring-white/20 backdrop-blur`}
                  >
                    <Icon className="size-7" strokeWidth={2} />
                  </div>

                  <p
                    className={`mt-6 text-xs font-semibold uppercase tracking-wider ${card.accent}`}
                  >
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/85">
                    {card.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-white/90"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-end gap-2 border-t border-white/15 pt-5">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {card.stat.value}
                    </span>
                    <span className="mb-1 text-sm text-white/80">
                      {card.stat.label}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

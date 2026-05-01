import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
  initials: string;
  gradient: string;
  result: { label: string; value: string };
};

// TODO: reemplazá estos placeholders por testimonios reales (con permiso) cuando los tengas.
const testimonials: Testimonial[] = [
  {
    quote:
      "Pasamos de cobrar el 65% de las cuotas a tiempo a más del 90%. Lo mejor: el equipo dejó de mandar recordatorios uno por uno.",
    name: "María Fernanda L.",
    role: "Administradora",
    org: "Colegio bilingüe · Córdoba",
    initials: "MF",
    gradient: "from-brand-600 to-brand-800",
    result: { value: "+25 pp", label: "puntualidad" },
  },
  {
    quote:
      "Antes teníamos que justificar la mora en cada asamblea con planillas de Excel hechas a mano. Hoy abro Cobrai y muestro los números en vivo.",
    name: "Diego A.",
    role: "Administrador de consorcios",
    org: "8 edificios · CABA",
    initials: "DA",
    gradient: "from-success-600 to-emerald-800",
    result: { value: "8h/sem", label: "ahorradas" },
  },
  {
    quote:
      "Los padres reciben un link claro, pagan en 2 toques y nosotros vemos todo confirmado. Se terminó el 'ya pagué pero no encuentro el comprobante'.",
    name: "Lic. Carolina P.",
    role: "Directora",
    org: "Instituto secundario · Rosario",
    initials: "CP",
    gradient: "from-violet-600 to-violet-800",
    result: { value: "0", label: "comprobantes perdidos" },
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent),radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(16,185,129,0.06),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800 ring-1 ring-inset ring-amber-100">
            ★ Casos reales
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Lo que dicen quienes ya cobran con Cobrai
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Colegios y consorcios de Córdoba, CABA y Rosario que pasaron del
            Excel y la planilla hecha a mano a una cobranza que se ejecuta
            sola.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <Quote
                className="absolute right-6 top-6 size-10 text-slate-100"
                aria-hidden
              />
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>

              <p className="relative mt-5 text-base leading-relaxed text-slate-700">
                “{t.quote}”
              </p>

              <div className="mt-auto pt-7">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white shadow-sm`}
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.org}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-1.5 border-t border-slate-100 pt-4">
                  <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                    {t.result.value}
                  </span>
                  <span className="mb-0.5 text-xs text-slate-500">
                    {t.result.label}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-2xl font-extrabold text-slate-900">
              4.9
            </span>
            <div className="flex gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>· promedio de satisfacción</span>
          </div>
          <span className="hidden text-slate-300 sm:inline">|</span>
          <p className="text-sm text-slate-600">
            Más de <strong className="text-slate-900">12.000 cuotas</strong>{" "}
            cobradas por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

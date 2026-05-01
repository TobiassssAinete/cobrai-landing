import {
  MessageCircle,
  Link2,
  LineChart,
  Bot,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "brand" | "success" | "violet" | "amber";
};

const features: Feature[] = [
  {
    icon: MessageCircle,
    accent: "success",
    title: "WhatsApp Business oficial",
    body: "Envíos masivos con plantillas pre-aprobadas por Meta. Sin riesgo de baneo, con métricas de entrega y lectura. Te activamos el número en 48 horas.",
  },
  {
    icon: Link2,
    accent: "brand",
    title: "Portal del deudor",
    body: "Cada padre o propietario recibe un link seguro con su deuda, monto y datos para pagar. Funciona en cualquier celular, sin necesidad de instalar nada.",
  },
  {
    icon: LineChart,
    accent: "violet",
    title: "Dashboard gerencial",
    body: "Recupero del mes, comparativa con el mes anterior, top 10 morosos, gráfico de los últimos 6 meses. La info que tu director o el consejo necesita ver.",
  },
  {
    icon: Bot,
    accent: "amber",
    title: "Agente con IA",
    body: 'Cuando un deudor responde, el agente entiende si dice "ya pagué", "necesito el link" o "tengo un problema" y te lo notifica solo cuando hace falta intervención humana.',
  },
];

const accentClasses: Record<Feature["accent"], string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-100",
  success: "bg-success-50 text-success-700 ring-success-500/20",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
};

export function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-100/70 py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(37,99,235,0.08),transparent),radial-gradient(ellipse_60%_50%_at_80%_70%,rgba(16,185,129,0.08),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 ring-1 ring-inset ring-brand-100">
            Características
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Todo lo que necesitás para cobrar sin estrés
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Una plataforma diseñada con administradores y directores que ya
            usan Cobrai todos los días.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg sm:p-8"
              >
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-brand-500/0 to-brand-500/0 blur-2xl transition-all duration-500 group-hover:from-brand-500/20 group-hover:to-success-500/10"
                />
                <div
                  className={`relative flex size-12 items-center justify-center rounded-xl ring-1 ring-inset ${accentClasses[feature.accent]}`}
                >
                  <Icon className="size-6" strokeWidth={2} />
                </div>
                <h3 className="relative mt-5 text-xl font-bold tracking-tight text-slate-900">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-slate-600">
                  {feature.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Importás tu cartera",
    body: "Subís un Excel o CSV con tus deudores y las cuotas/expensas. Cobrai detecta automáticamente cuáles son nuevos y cuáles ya están en el sistema. Tarda 5 minutos.",
  },
  {
    n: "2",
    title: "Configurás tus mensajes",
    body: "Elegís entre las plantillas pre-aprobadas o personalizás las tuyas. Definís cuándo se manda cada una (vencimiento, mora, recordatorio post-pago, etc.).",
  },
  {
    n: "3",
    title: "Activás la campaña y listo",
    body: "Cobrai manda los WhatsApp, recibe respuestas, registra pagos y te muestra todo en el dashboard. Vos solo intervenís cuando el sistema te avisa que hay algo que requiere tu atención.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-brand-900 to-slate-900"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent),radial-gradient(ellipse_60%_60%_at_80%_100%,rgba(16,185,129,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-inset ring-white/15 backdrop-blur">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            3 pasos para empezar a cobrar
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            De Excel a cobranza automatizada en menos de 48 horas.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div
            aria-hidden
            className="absolute left-1/2 top-7 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-400/50 to-transparent lg:block"
          />
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-2xl backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-8"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-success-600 text-2xl font-extrabold text-white shadow-lg ring-4 ring-slate-900">
                {step.n}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                Paso {step.n} — {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

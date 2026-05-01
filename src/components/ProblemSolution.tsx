const rows = [
  {
    today: "Mandás recordatorios uno por uno por WhatsApp Web",
    cobrai: "Automatizado: Cobrai manda según el día de mora",
  },
  {
    today: "No sabés quién leyó tu mensaje",
    cobrai: "Dashboard te muestra entregados, leídos y respondidos",
  },
  {
    today: "Para mandar el CBU copiás y pegás en cada chat",
    cobrai: "Cada deudor recibe un link único con sus datos de pago",
  },
  {
    today: "El Excel de morosos lo actualizás a mano",
    cobrai: "Se actualiza solo cada vez que llega un pago",
  },
  {
    today: "Para la asamblea/reunión hacés un PDF aparte",
    cobrai: "Exportás la cartera completa a Excel en 1 click",
  },
  {
    today: 'Si alguien responde "ya pagué", lo investigás vos',
    cobrai:
      "El agente IA detecta intenciones y te avisa solo lo importante",
  },
];

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(15,23,42,0.05),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700 ring-1 ring-inset ring-rose-100">
            El antes y el después
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Si esto te suena familiar,{" "}
            <span className="bg-gradient-to-r from-brand-700 to-success-600 bg-clip-text text-transparent">
              Cobrai es para vos.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-rose-100/40 p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 ring-1 ring-inset ring-rose-200">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4"><path fillRule="evenodd" d="M4.28 4.22a.75.75 0 011.06 0L10 8.94l4.66-4.72a.75.75 0 011.07 1.05L11.06 10l4.67 4.72a.75.75 0 11-1.07 1.06L10 11.06l-4.66 4.72a.75.75 0 11-1.07-1.06L8.94 10 4.28 5.28a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
              </span>
              <h3 className="text-xl font-bold text-slate-900">Hoy</h3>
            </div>
            <ul className="space-y-4">
              {rows.map((row, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-base leading-relaxed text-slate-700"
                >
                  <span aria-hidden className="mt-1 text-rose-500">
                    ✕
                  </span>
                  <span>{row.today}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-success-500/40 bg-gradient-to-br from-success-50 via-emerald-50 to-success-100/60 p-6 shadow-md sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-success-500/15 blur-3xl"
            />
            <div className="relative mb-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-success-500/15 text-success-700 ring-1 ring-inset ring-success-200">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              </span>
              <h3 className="text-xl font-bold text-slate-900">Con Cobrai</h3>
            </div>
            <ul className="space-y-4">
              {rows.map((row, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-base leading-relaxed text-slate-700"
                >
                  <span aria-hidden className="mt-1 text-success-600">
                    ✓
                  </span>
                  <span>{row.cobrai}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

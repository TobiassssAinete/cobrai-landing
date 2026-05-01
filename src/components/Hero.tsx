import { Check, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-inset ring-brand-100">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success-600" />
              </span>
              Para colegios y consorcios · Argentina
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Cobrá expensas y cuotas{" "}
              <span className="bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 bg-clip-text text-transparent">
                sin perseguir a nadie
              </span>{" "}
              por WhatsApp.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 sm:text-xl">
              Cobrai automatiza recordatorios, mora y links de pago para
              colegios y consorcios. Vos seguís siendo la cara amable; el
              sistema hace el trabajo pesado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobrai%2030%20d%C3%ADas%20gratis."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-success-700 hover:shadow-lg"
              >
                Probar gratis 30 días
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-700 backdrop-blur transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Ver demo de 5 minutos
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-success-600" /> Sin tarjeta
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="size-4 text-success-600" /> Activación en 24h
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="size-4 text-success-600" /> WhatsApp oficial
              </span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -bottom-8 -right-8 -z-10 size-56 rounded-full bg-success-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -top-8 -left-8 -z-10 size-48 rounded-full bg-brand-500/25 blur-3xl"
      />

      <div className="relative">
        {/* Floating stat card top-left */}
        <div className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
          <p className="text-xs font-medium text-slate-500">Recupero del mes</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
            +38%
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-success-600">
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-3">
              <path d="M8 3l5 6H3z" />
            </svg>
            vs. mes anterior
          </div>
        </div>

        {/* Floating notification bottom-right */}
        <div className="absolute -bottom-2 right-2 z-20 hidden w-64 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:block">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
              <Check className="size-5" strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Pago recibido
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Familia Pérez · $48.500 · hace 2 min
              </p>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              {/* WhatsApp-like header */}
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
                <div className="flex size-9 items-center justify-center rounded-full bg-white/20 text-base font-bold">
                  C
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    Administración Mitre
                  </p>
                  <p className="truncate text-[11px] opacity-80">
                    en línea · WhatsApp Business
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 opacity-90"
                >
                  <path d="M20.49 17.32c-1.16-.36-2-.4-2.7.05-.55.36-1.13.55-1.74.55-.65 0-1.27-.21-1.84-.6-.96-.65-1.85-1.43-2.6-2.31-.74-.88-1.36-1.83-1.85-2.85-.32-.66-.46-1.34-.42-2 .03-.7.31-1.32.85-1.83.51-.49.61-1.32.31-2.3l-1.05-3.4c-.12-.39-.45-.62-.86-.62-2.16 0-4.59 2.43-4.59 4.59 0 5.04 8.46 13.5 13.5 13.5 2.16 0 4.59-2.43 4.59-4.59 0-.41-.23-.74-.62-.86l-3.4-1.05a.86.86 0 00-.58.06z" />
                </svg>
              </div>

              {/* Chat area */}
              <div className="space-y-2 bg-[#ECE5DD] px-3 py-4">
                {/* Inbound message */}
                <div className="flex">
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    <p className="text-[13px] leading-snug text-slate-800">
                      Hola Sra. Pérez 👋
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-slate-800">
                      Le recordamos que tiene la expensa de{" "}
                      <strong>Mayo</strong> pendiente.
                    </p>
                    <p className="mt-1.5 text-[10px] text-slate-400">10:24</p>
                  </div>
                </div>

                {/* Pay link card */}
                <div className="flex">
                  <div className="max-w-[85%] overflow-hidden rounded-2xl rounded-tl-sm bg-white shadow-sm">
                    <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-3">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                        Cobrai · Pago seguro
                      </p>
                      <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                        $48.500
                      </p>
                      <p className="text-[11px] text-white/80">
                        Expensa Mayo 2026 · Vto 10/05
                      </p>
                    </div>
                    <div className="px-3 py-2.5">
                      <div className="flex items-center justify-center gap-1.5 rounded-lg bg-success-600 px-3 py-2 text-[12px] font-bold text-white">
                        Pagar ahora →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outbound */}
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
                    <p className="text-[13px] leading-snug text-slate-800">
                      Listo, ya pagué ✅
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                      10:31
                      <svg
                        viewBox="0 0 16 11"
                        fill="currentColor"
                        className="size-3 text-brand-500"
                      >
                        <path d="M11.071.653a.5.5 0 01.062.704l-6 7a.5.5 0 01-.752.013l-3-3.5a.5.5 0 11.758-.65L4.715 7.27 10.367.715a.5.5 0 01.704-.062z" />
                        <path d="M15.071.653a.5.5 0 01.062.704l-6 7a.5.5 0 01-.752.013l-.5-.583a.5.5 0 11.758-.65l.122.142L14.367.715a.5.5 0 01.704-.062z" />
                      </svg>
                    </p>
                  </div>
                </div>

                {/* Inbound auto-reply */}
                <div className="flex">
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    <p className="text-[13px] leading-snug text-slate-800">
                      ¡Gracias! Confirmamos su pago. Recibirá el comprobante
                      por mail. 🙌
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">10:32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

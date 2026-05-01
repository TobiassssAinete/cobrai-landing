import { Play } from "lucide-react";

// TODO: cuando tengas el video grabado, reemplazá esta URL por el embed de
// Loom o YouTube. Ejemplos:
//   - Loom:    https://www.loom.com/embed/<id>?hide_owner=true&hide_share=true
//   - YouTube: https://www.youtube-nocookie.com/embed/<id>?rel=0
const VIDEO_URL: string | null = null;

export function Demo() {
  return (
    <section
      id="demo"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(37,99,235,0.10),transparent),radial-gradient(ellipse_60%_50%_at_80%_70%,rgba(16,185,129,0.10),transparent)]"
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 ring-1 ring-inset ring-brand-100">
            ▶ Demo en 3 minutos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Mirá Cobrai en acción
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            De importar tu cartera de deudores al primer mensaje enviado, en
            menos tiempo del que tardás en preparar un café.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl ring-1 ring-slate-900/10">
            {VIDEO_URL ? (
              <iframe
                src={VIDEO_URL}
                title="Demo de Cobrai"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
                loading="lazy"
              />
            ) : (
              <DemoPlaceholder />
            )}
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5493513162208?text=Hola!%20Quiero%20agendar%20una%20demo%20en%20vivo%20de%20Cobrai."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-success-700 hover:shadow-lg"
            >
              Agendar demo en vivo (15 min)
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Que me contacten por mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
      />
      <div className="relative flex size-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition-transform hover:scale-105">
        <div className="flex size-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
          <Play className="size-7 translate-x-0.5 fill-current" />
        </div>
      </div>
      <p className="relative mt-6 text-lg font-semibold">Demo · 3 minutos</p>
      <p className="relative mt-1 text-sm text-slate-300">
        Próximamente · pedí una demo en vivo mientras tanto
      </p>
    </div>
  );
}

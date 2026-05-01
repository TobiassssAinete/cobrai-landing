export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-success-600 via-emerald-700 to-brand-800 px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 size-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Probá Cobrai 30 días gratis
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
              Sin tarjeta. Sin instalación. Te ayudamos con la migración.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobrai%2030%20d%C3%ADas%20gratis."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-bold text-success-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl sm:text-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.7 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.2zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8 0-2.6-1-5.1-2.9-7-1.8-1.8-4.3-2.8-6.9-2.8zm0 17.9c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.1-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4 1.5 1.5 2.4 3.6 2.4 5.8.1 4.5-3.6 8.6-8.1 8.6z"/>
                </svg>
                Hablar por WhatsApp
              </a>
              <a
                href="mailto:cobriasas@gmail.com?subject=Quiero probar Cobrai"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/20 sm:text-lg"
              >
                Escribir por mail
              </a>
            </div>
            <p className="mt-5 text-sm text-white/80">
              📞 (351) 316-2208 · ✉️ cobriasas@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

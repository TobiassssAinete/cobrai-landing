import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";

const title =
  "Cobria para consorcios | Cobrá expensas por WhatsApp sin perseguir deudores";
const description =
  "Cobria ayuda a administraciones y consorcios en Argentina a cobrar expensas por WhatsApp, enviar recordatorios automáticos y ordenar la mora desde un sistema centralizado.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/consorcios") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/consorcios"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl("/consorcios")}#service`,
  name: "Cobria para consorcios",
  serviceType: "Cobranza automatizada de expensas",
  description,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "Argentina" },
  audience: {
    "@type": "Audience",
    audienceType: "Administraciones de consorcios y edificios",
  },
  url: absoluteUrl("/consorcios"),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Cobria para consorcios", url: absoluteUrl("/consorcios") },
]);

const benefits = [
  {
    title: "Aviso automático de expensa mes a mes",
    desc: "Cobria avisa a cada propietario apenas se emite la liquidación, antes del vencimiento y en cada paso de la mora.",
  },
  {
    title: "Link de pago con liquidación cargada",
    desc: "El propietario abre el link, ve el monto, periodo y datos de pago. Paga sin llamarte ni pedirte alias.",
  },
  {
    title: "Mora ordenada con escalonamiento",
    desc: "El primer recordatorio amable, después firme. Sin pelearte por mensaje uno a uno con cada deudor.",
  },
  {
    title: "Reporte para el consorcio",
    desc: "Quién pagó, quién debe, cuánto se cobró este mes. Para mostrar en asamblea o cerrar la rendición.",
  },
  {
    title: "Múltiples consorcios en una sola cuenta",
    desc: "Si administrás varios edificios, gestionás todos desde el mismo panel con la misma cuenta.",
  },
  {
    title: "Importa desde tu sistema o Excel",
    desc: "Subís la liquidación cada mes. Cobria arma los avisos personalizados por unidad funcional.",
  },
];

export default function ConsorciosPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbs]} />
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <nav
              aria-label="Migas de pan"
              className="mb-6 text-sm text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Cobria para consorcios</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-inset ring-brand-100">
              Para administraciones y consorcios
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cobrá expensas por WhatsApp{" "}
              <span className="bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 bg-clip-text text-transparent">
                sin perseguir deudores
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Cobria automatiza el aviso de expensas, los recordatorios de mora
              y los links de pago para administraciones y consorcios argentinos.
              Ordenás la cobranza mensual sin gastar horas escribiendo
              mensajes uno a uno.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Administro%20consorcios%20y%20quiero%20probar%20Cobria."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-success-700"
              >
                Probar gratis 30 días
              </a>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Por qué los consorcios eligen Cobria?
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Cobrar expensas a 30, 60 o 200 unidades funcionales por mes desde
              WhatsApp personal es agotador. Cobria automatiza ese ciclo
              completo y te deja la última milla — la conversación con el
              propietario — sólo cuando hace falta.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
                      <Check className="size-4" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Cómo arranca un consorcio con Cobria?
            </h2>
            <ol className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Cuenta lista en 24 horas hábiles
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Te activamos la plataforma y configuramos el primer
                    consorcio juntos en una llamada.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Carga del padrón
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Subís el listado de unidades, propietarios y celulares
                    desde Excel o desde tu sistema de gestión.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Primera liquidación automática
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Subís la liquidación del mes y Cobria arma los avisos
                    personalizados por unidad y los manda por WhatsApp Business.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Cierre y rendición
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Al cierre del mes exportás el reporte de cobranza, mora
                    pendiente y conciliación de pagos.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-8 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Probá Cobria en tu consorcio 30 días gratis
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  Sin tarjeta, sin permanencia. Activación en 24 hs hábiles.
                </p>
              </div>
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Administro%20consorcios%20y%20quiero%20probar%20Cobria."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-success-700"
              >
                Empezar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

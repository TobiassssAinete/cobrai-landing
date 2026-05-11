import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";

const title =
  "Cobria para colegios | Automatizá cuotas, mora y recordatorios por WhatsApp";
const description =
  "Con Cobria, los colegios automatizan cuotas, matrículas, recordatorios de mora y pagos por WhatsApp. Reducí la mora sin perseguir a las familias y mantené el vínculo amable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/colegios") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/colegios"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl("/colegios")}#service`,
  name: "Cobria para colegios",
  serviceType: "Cobranza automatizada para colegios",
  description,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "Argentina" },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Colegios e instituciones educativas",
  },
  url: absoluteUrl("/colegios"),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Cobria para colegios", url: absoluteUrl("/colegios") },
]);

const benefits = [
  {
    title: "Recordatorios automáticos a cada familia",
    desc: "Antes del vencimiento, el día del vencimiento y en cada escalón de mora — todo configurable, sin escribir un mensaje.",
  },
  {
    title: "Link de pago seguro con el monto cargado",
    desc: "La familia recibe el link por WhatsApp con su cuota, vencimiento y datos. Paga en pocos clics.",
  },
  {
    title: "Cobranza ordenada de matrículas y cuotas",
    desc: "Cuotas mensuales, matrículas, materiales y cobros puntuales. Todo en un solo lugar.",
  },
  {
    title: "Gestión de mora sin pelearte con padres",
    desc: "El sistema escala los mensajes con tono y firmeza. Vos seguís siendo la cara amable del colegio.",
  },
  {
    title: "Dashboard en tiempo real",
    desc: "Quién pagó, quién debe, cuánto recuperaste este mes, qué cohorte es más morosa. Reportes para dirección.",
  },
  {
    title: "Importa y exporta a Excel o tu sistema",
    desc: "Importás la cartera al inicio, exportás los pagos al cierre. Integraciones con plan A medida.",
  },
];

export default function ColegiosPage() {
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
              <span className="text-slate-700">Cobria para colegios</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-inset ring-brand-100">
              Para colegios e instituciones educativas
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cobranza automatizada por WhatsApp{" "}
              <span className="bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 bg-clip-text text-transparent">
                para colegios
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Con Cobria, los colegios argentinos automatizan recordatorios de
              cuotas, mora y matrículas por WhatsApp. Reducís la mora sin
              perseguir a las familias y mantenés un vínculo amable con cada
              hogar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Soy%20de%20un%20colegio%20y%20quiero%20probar%20Cobria."
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
              ¿Qué problemas resuelve Cobria en un colegio?
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              La cobranza de un colegio combina cuotas mensuales, matrículas,
              materiales, eventos y mora — todo cobrado mes a mes a cientos de
              familias. Hacerlo desde WhatsApp personal o Excel se vuelve
              caótico rápido. Cobria automatiza el ciclo entero.
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
              ¿Cómo es la implementación en un colegio?
            </h2>
            <ol className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Onboarding en 24 horas hábiles
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Te activamos la cuenta, configuramos el calendario lectivo y
                    armamos los mensajes en una llamada de 2-3 horas.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Importación de la cartera
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Subís el padrón de familias desde Excel. Cobria carga
                    alumnos, cuotas, vencimientos y deuda histórica.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Primeros recordatorios automáticos
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    Cobria empieza a mandar los recordatorios de cuota desde tu
                    número dedicado de WhatsApp Business.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Seguimiento y reportes para dirección
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    El dashboard muestra recupero del mes, deuda por familia y
                    cohortes con mayor mora. Exportable a Excel.
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
                  Probá Cobria en tu colegio 30 días gratis
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  Sin tarjeta, sin permanencia. Activación en 24 hs hábiles.
                </p>
              </div>
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Soy%20de%20un%20colegio%20y%20quiero%20probar%20Cobria."
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

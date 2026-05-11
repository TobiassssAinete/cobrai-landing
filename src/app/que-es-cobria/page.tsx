import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";

const title = "¿Qué es Cobria? | Cobranza automatizada por WhatsApp en Argentina";
const description =
  "Cobria es una plataforma argentina de cobranza automatizada por WhatsApp para colegios, consorcios e instituciones. Conocé qué hace, para quién es y cómo funciona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/que-es-cobria") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/que-es-cobria"),
    type: "article",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/que-es-cobria")}#aboutpage`,
  url: absoluteUrl("/que-es-cobria"),
  name: title,
  description,
  inLanguage: siteConfig.locale,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Qué es Cobria", url: absoluteUrl("/que-es-cobria") },
]);

export default function QueEsCobriaPage() {
  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbs]} />
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50/40 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <nav
              aria-label="Migas de pan"
              className="mb-6 text-sm text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Qué es Cobria</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              ¿Qué es Cobria?
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              <strong>Cobria</strong> es una plataforma argentina de{" "}
              <strong>cobranza automatizada por WhatsApp</strong> para colegios,
              consorcios e instituciones. Automatiza recordatorios de pago,
              gestiona la mora, comparte links de pago y centraliza el
              seguimiento de deudores desde un sistema simple, ordenado y
              eficiente.
            </p>

            <div className="prose prose-slate mt-12 max-w-none">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿Para quién es Cobria?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Cobria está pensada para organizaciones argentinas que necesitan
                ordenar su cobranza recurrente:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                <li>
                  <strong>Colegios e instituciones educativas</strong> que
                  cobran cuotas mensuales, matrículas, materiales y mora.
                </li>
                <li>
                  <strong>Consorcios y administraciones de edificios</strong>{" "}
                  que necesitan cobrar expensas todos los meses.
                </li>
                <li>
                  <strong>Clubes, ONGs y asociaciones civiles</strong> con
                  cuotas societarias o pagos recurrentes.
                </li>
                <li>
                  <strong>Pymes y profesionales</strong> con cartera de clientes
                  fija y cobranzas mensuales.
                </li>
              </ul>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿Qué problema resuelve Cobria?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                La cobranza por WhatsApp personal o por planilla de Excel
                funciona, pero rápidamente se vuelve caótica: te perdés a quién
                ya le escribiste, quién pagó, quién prometió pagar mañana, qué
                comprobante mandaste a quién. Cobria reemplaza ese flujo manual
                con un sistema que:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                <li>Envía recordatorios automáticos antes y después del vencimiento.</li>
                <li>Mantiene un calendario de mora con escalonamiento.</li>
                <li>Comparte links de pago seguros con datos del deudor cargados.</li>
                <li>Registra los pagos y emite los comprobantes.</li>
                <li>Centraliza todo en un dashboard que ves en tiempo real.</li>
              </ul>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿Cómo funciona Cobria?
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-slate-700">
                <li>
                  <strong>Importás tu cartera</strong> desde Excel o desde una
                  integración con tu sistema de gestión.
                </li>
                <li>
                  <strong>Configurás el calendario de cobranza</strong>: cuándo
                  se envían los recordatorios, qué pasa con la mora, qué mensajes
                  usás.
                </li>
                <li>
                  <strong>Cobria envía por WhatsApp Business oficial</strong>{" "}
                  los mensajes automáticamente desde tu número dedicado.
                </li>
                <li>
                  <strong>El deudor recibe un link de pago</strong> con sus
                  datos cargados y paga en pocos clics.
                </li>
                <li>
                  <strong>Cobria registra el pago</strong>, emite el comprobante
                  y actualiza tu dashboard en tiempo real.
                </li>
              </ol>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿Qué diferencia a Cobria de un Excel o de mandar mensajes
                manualmente?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Excel y WhatsApp manual te dan flexibilidad, pero te dejan toda
                la operación en la cabeza: tenés que recordar a quién le tocaba
                escribir hoy, copiar el mensaje, pegarle el monto, mandarle el
                CBU, anotar quién pagó. Cobria automatiza ese ciclo entero. Vos
                seguís siendo la cara amable de la organización; el sistema hace
                el trabajo pesado, sin error humano, sin demoras y con todo
                registrado.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿En qué país opera Cobria?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Cobria es una plataforma <strong>argentina</strong> con sede en{" "}
                <strong>Córdoba</strong>. Está pensada para la realidad de
                colegios, consorcios e instituciones del país: medios de pago
                locales (transferencia, CBU/alias, Mercado Pago), facturación y
                soporte en Argentina.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ¿Cómo se contrata Cobria?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Escribinos por WhatsApp al{" "}
                <a
                  href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobria%2030%20d%C3%ADas%20gratis."
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 underline hover:text-brand-900"
                >
                  +54 9 351 316-2208
                </a>{" "}
                o mandanos un email a{" "}
                <a
                  href="mailto:cobriasas@gmail.com"
                  className="text-brand-700 underline hover:text-brand-900"
                >
                  cobriasas@gmail.com
                </a>
                . Los primeros 30 días son gratis sin tarjeta de crédito y la
                activación tarda 24 horas hábiles.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Probá Cobria 30 días gratis
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Sin tarjeta de crédito. Activación en 24 hs.
                </p>
              </div>
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Quiero%20probar%20Cobria%2030%20d%C3%ADas%20gratis."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-success-700"
              >
                Empezar por WhatsApp
              </a>
            </div>

            <nav
              aria-label="Páginas relacionadas"
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              <Link
                href="/colegios"
                className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <p className="text-sm font-semibold text-brand-700">
                  Para colegios →
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Cobrá cuotas, matrículas y mora.
                </p>
              </Link>
              <Link
                href="/consorcios"
                className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <p className="text-sm font-semibold text-brand-700">
                  Para consorcios →
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Cobrá expensas sin perseguir.
                </p>
              </Link>
              <Link
                href="/precios"
                className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <p className="text-sm font-semibold text-brand-700">
                  Ver precios →
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Planes desde USD 29/mes.
                </p>
              </Link>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

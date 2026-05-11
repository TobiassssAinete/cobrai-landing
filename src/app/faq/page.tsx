import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { faqs } from "@/lib/faqs";

const title = "Preguntas frecuentes sobre Cobria y cobranza automática por WhatsApp";
const description =
  "Respondemos las preguntas más comunes sobre Cobria: qué es, para quién es, cómo funciona, cómo se contrata, integraciones, precios y soporte en Argentina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/faq"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/faq")}#faqpage`,
  url: absoluteUrl("/faq"),
  name: title,
  description,
  inLanguage: siteConfig.locale,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Preguntas frecuentes", url: absoluteUrl("/faq") },
]);

export default function FAQPagePage() {
  return (
    <>
      <JsonLd data={[faqPageSchema, breadcrumbs]} />
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50/40 via-white to-white">
          <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-20">
            <nav
              aria-label="Migas de pan"
              className="mb-6 text-sm text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Preguntas frecuentes</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Preguntas frecuentes sobre Cobria
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Todo lo que tenés que saber sobre Cobria, la plataforma argentina
              de cobranza automatizada por WhatsApp para colegios, consorcios e
              instituciones.
            </p>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

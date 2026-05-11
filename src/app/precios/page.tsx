import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";

const title = "Precios de Cobria | Planes para automatizar cobranzas por WhatsApp";
const description =
  "Planes de Cobria desde USD 29/mes para colegios, consorcios e instituciones. 30 días de prueba gratis, sin tarjeta y sin permanencia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/precios") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/precios"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Precios", url: absoluteUrl("/precios") },
]);

const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Planes Cobria",
  url: absoluteUrl("/precios"),
  itemListElement: [
    {
      "@type": "Offer",
      name: "Esencial",
      price: "29",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/precios"),
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/precios"),
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "249",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/precios"),
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "499",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/precios"),
    },
  ],
};

export default function PreciosPage() {
  return (
    <>
      <JsonLd data={[offerCatalog, breadcrumbs]} />
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50/40 via-white to-white">
          <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-20">
            <nav
              aria-label="Migas de pan"
              className="mb-6 text-sm text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Precios</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Planes y precios de Cobria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Cuatro planes para acompañarte a medida que crece tu cartera. Todos
              incluyen 30 días de prueba gratis, sin tarjeta y sin permanencia.
            </p>
          </div>
        </section>

        <Pricing />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

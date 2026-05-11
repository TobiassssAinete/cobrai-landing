import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";

const title = "Contacto Cobria | Hablá con nosotros por WhatsApp o email";
const description =
  "Contactá a Cobria por WhatsApp al +54 9 351 316-2208 o por email a cobriasas@gmail.com. Soporte y ventas en Córdoba, Argentina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/contacto") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/contacto"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contacto")}#contactpage`,
  url: absoluteUrl("/contacto"),
  name: title,
  description,
  inLanguage: siteConfig.locale,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Contacto", url: absoluteUrl("/contacto") },
]);

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={[contactPageSchema, breadcrumbs]} />
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
              <span className="text-slate-700">Contacto</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Contactá a Cobria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Estamos en Córdoba, Argentina. Respondemos por WhatsApp en el día
              hábil y por email en menos de 24 horas.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="https://wa.me/5493513162208?text=Hola!%20Quiero%20m%C3%A1s%20info%20de%20Cobria."
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:border-success-300 hover:bg-success-50/30"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-success-100 text-success-700">
                  <MessageCircle className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  WhatsApp
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  +54 9 351 316-2208
                </p>
                <p className="mt-2 text-xs font-semibold text-success-700">
                  Abrir chat →
                </p>
              </a>

              <a
                href="mailto:cobriasas@gmail.com"
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Mail className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  Email
                </h2>
                <p className="mt-1 break-all text-sm text-slate-600">
                  cobriasas@gmail.com
                </p>
                <p className="mt-2 text-xs font-semibold text-brand-700">
                  Escribir mail →
                </p>
              </a>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                  <MapPin className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  Sede
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Córdoba, Argentina
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  Lun a Vie · 9:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <section className="bg-slate-50/60">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Otros canales
            </h2>
            <ul className="mt-6 space-y-3 text-base text-slate-700">
              <li className="inline-flex items-center gap-2">
                <Phone className="size-4 text-slate-500" />
                Teléfono / WhatsApp:{" "}
                <a
                  href="https://wa.me/5493513162208"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-700 hover:text-brand-900"
                >
                  +54 9 351 316-2208
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="size-4 text-slate-500" />
                Email:{" "}
                <a
                  href="mailto:cobriasas@gmail.com"
                  className="font-semibold text-brand-700 hover:text-brand-900"
                >
                  cobriasas@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-slate-500" />
                Sede: Córdoba, Argentina
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

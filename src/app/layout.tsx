import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { faqs } from "@/lib/faqs";
import { siteConfig, absoluteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const siteTitle =
  "Cobria | Cobranza automática por WhatsApp para colegios y consorcios";
const siteDescription =
  "Cobria automatiza recordatorios de pago, mora y links de pago por WhatsApp para colegios y consorcios en Argentina. Probá una gestión de cobranza más simple, ordenada y eficiente.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Cobria",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Cobria",
    "Cobrai",
    "cobranza por WhatsApp",
    "cobrar expensas",
    "cobrar cuotas colegio",
    "cobranza automática",
    "software de cobranza Argentina",
    "gestión de morosos",
    "consorcios",
    "administración de edificios",
    "WhatsApp Business cobranza",
    "portal de pago deudores",
    "automatización de cobranza",
    "recordatorios de pago",
    "cobranza de expensas",
    "cobranza para colegios",
    "cobranza para consorcios",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Software",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: siteConfig.alternateNames,
  legalName: siteConfig.legalName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/icon.svg"),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(siteConfig.ogImageFallback),
  description: siteConfig.longDescription,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressLocality: siteConfig.city,
    addressRegion: "Córdoba",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ["Spanish", "es-AR"],
      areaServed: "AR",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone,
      availableLanguage: ["Spanish", "es-AR"],
      areaServed: "AR",
    },
  ],
  knowsAbout: [
    "Cobranza automatizada",
    "WhatsApp Business",
    "Cobranza para colegios",
    "Cobranza de expensas",
    "Gestión de mora",
    "Recordatorios de pago",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: siteConfig.alternateNames,
  description: siteConfig.shortDescription,
  inLanguage: siteConfig.locale,
  publisher: { "@id": `${siteUrl}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: siteName,
  alternateName: siteConfig.alternateNames,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Cobranza automatizada por WhatsApp",
  operatingSystem: "Web",
  description: siteConfig.longDescription,
  url: siteUrl,
  inLanguage: siteConfig.locale,
  publisher: { "@id": `${siteUrl}/#organization` },
  audience: {
    "@type": "Audience",
    audienceType:
      "Colegios, consorcios, administraciones e instituciones en Argentina",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Esencial",
      price: "29",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "29",
        priceCurrency: "USD",
        unitText: "MES",
      },
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "USD",
        unitText: "MES",
      },
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "249",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "249",
        priceCurrency: "USD",
        unitText: "MES",
      },
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "499",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "499",
        priceCurrency: "USD",
        unitText: "MES",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

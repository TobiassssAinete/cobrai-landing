import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { faqs } from "@/lib/faqs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://cobrai-landing.vercel.app";
const siteName = "Cobrai";
const siteTitle = "Cobrai — Cobrá expensas y cuotas por WhatsApp | Argentina";
const siteDescription =
  "Sistema de cobranza automatizado para colegios y consorcios en Argentina. Recordatorios por WhatsApp, portal de pago para deudores y dashboard en tiempo real. Probá gratis 30 días.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Cobrai",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "cobranza por WhatsApp",
    "cobrar expensas",
    "cobrar cuotas colegio",
    "software de cobranza Argentina",
    "gestión de morosos",
    "consorcios",
    "administración de edificios",
    "WhatsApp Business cobranza",
    "portal de pago deudores",
    "automatización de cobranza",
    "recordatorios de pago",
    "Cobrai",
  ],
  authors: [{ name: "Cobrai", url: siteUrl }],
  creator: "Cobrai",
  publisher: "Cobrai",
  category: "Software",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Cobrai — Cobrá por WhatsApp sin perseguir a nadie",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cobrai — Cobranza automatizada por WhatsApp",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cobrai — Cobrá por WhatsApp",
    description:
      "Cobranza automatizada para colegios y consorcios. Recordatorios, portal de pago y dashboard en tiempo real.",
    images: ["/og-image.svg"],
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
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteDescription,
  email: "cobriasas@gmail.com",
  telephone: "+54-9-351-316-2208",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressLocality: "Córdoba",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "cobriasas@gmail.com",
    telephone: "+54-9-351-316-2208",
    availableLanguage: ["Spanish", "es-AR"],
    areaServed: "AR",
  },
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
  name: siteName,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteDescription,
  url: siteUrl,
  inLanguage: "es-AR",
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

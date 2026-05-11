export const siteConfig = {
  url: "https://cobria.org",
  name: "Cobria",
  alternateNames: ["Cobrai", "Cobria Argentina"],
  legalName: "Cobria",
  shortDescription:
    "Cobranza automatizada por WhatsApp para colegios y consorcios en Argentina.",
  longDescription:
    "Cobria es una plataforma argentina de cobranza automatizada por WhatsApp para colegios, consorcios e instituciones. Automatiza recordatorios de pago, gestión de mora, links de pago y reportes de cobranza desde un sistema simple y centralizado.",
  locale: "es-AR",
  country: "AR",
  city: "Córdoba",
  email: "cobriasas@gmail.com",
  phone: "+54-9-351-316-2208",
  whatsapp: "5493513162208",
  ogImage: "/og-image.png",
  ogImageFallback: "/og-image.svg",
  twitterHandle: "",
} as const;

export const absoluteUrl = (path: string = "/") => {
  const base = siteConfig.url.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
};

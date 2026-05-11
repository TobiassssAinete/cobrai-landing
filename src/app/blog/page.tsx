import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { posts } from "@/lib/blog";

const title = "Blog de Cobria | Cobranza por WhatsApp, colegios y consorcios";
const description =
  "Guías prácticas sobre cobranza automatizada por WhatsApp para colegios, consorcios e instituciones en Argentina. Cómo reducir la mora, automatizar recordatorios y ordenar la cobranza.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/blog"),
    type: "website",
  },
  twitter: { title, description, card: "summary_large_image" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${absoluteUrl("/blog")}#blog`,
  url: absoluteUrl("/blog"),
  name: "Blog de Cobria",
  description,
  inLanguage: siteConfig.locale,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: absoluteUrl(`/blog/${p.slug}`),
    datePublished: p.date,
    dateModified: p.date,
    author: { "@id": `${siteConfig.url}/#organization` },
    keywords: p.keywords.join(", "),
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", url: siteConfig.url },
  { name: "Blog", url: absoluteUrl("/blog") },
]);

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbs]} />
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
              <span className="text-slate-700">Blog</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Blog de Cobria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Guías prácticas sobre cobranza automatizada por WhatsApp para
              colegios, consorcios e instituciones en Argentina.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <ul className="grid gap-6 sm:grid-cols-2">
              {sorted.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {formatDate(post.date)} · {post.readingMinutes} min de
                      lectura
                    </p>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-800">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {post.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-brand-700">
                      Leer artículo →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

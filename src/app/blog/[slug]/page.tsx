import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import {
  posts,
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
  type BlogSection,
} from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: "summary_large_image",
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={idx}
          id={section.id}
          className="mt-12 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="mt-8 text-lg font-semibold text-slate-900 sm:text-xl"
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-4 text-base leading-relaxed text-slate-700">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul
          key={idx}
          className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700"
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={idx}
          className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-700"
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="mt-6 border-l-4 border-brand-400 bg-brand-50/40 px-5 py-4 text-base italic text-slate-700"
        >
          “{section.text}”
          {section.cite ? (
            <footer className="mt-2 not-italic text-sm text-slate-500">
              — {section.cite}
            </footer>
          ) : null}
        </blockquote>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="mt-10 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6"
        >
          <p className="text-base font-medium leading-relaxed text-slate-800">
            {section.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <div
          key={idx}
          className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
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
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const related = getRelatedPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: siteConfig.locale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    author: { "@id": `${siteConfig.url}/#organization` },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: absoluteUrl("/opengraph-image"),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Inicio", url: siteConfig.url },
    { name: "Blog", url: absoluteUrl("/blog") },
    { name: post.title, url },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbs]} />
      <Nav />
      <main className="flex-1">
        <article>
          <header className="bg-gradient-to-b from-brand-50/40 via-white to-white">
            <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-20">
              <nav
                aria-label="Migas de pan"
                className="mb-6 text-sm text-slate-500"
              >
                <Link href="/" className="hover:text-slate-900">
                  Inicio
                </Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-slate-900">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <span className="text-slate-700">{post.title}</span>
              </nav>

              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {formatDate(post.date)} · {post.readingMinutes} min de lectura
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                {post.lead}
              </p>
            </div>
          </header>

          <section className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
              {post.sections.map((s, i) => renderSection(s, i))}
            </div>
          </section>

          {related.length > 0 ? (
            <section className="border-t border-slate-200 bg-slate-50/60">
              <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Seguí leyendo
                </h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="group block h-full rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                          {r.readingMinutes} min
                        </p>
                        <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-brand-800">
                          {r.title}
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

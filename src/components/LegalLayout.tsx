import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>
        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Última actualización: {updated}
          </p>
          <div className="prose prose-slate mt-8 max-w-none text-base leading-relaxed text-slate-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-900 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-brand-700 [&_a]:underline">
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}

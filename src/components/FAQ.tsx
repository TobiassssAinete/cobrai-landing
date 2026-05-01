"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Te activamos la cuenta en 24 horas hábiles. La importación de tu cartera y la configuración inicial demora otras 2-3 horas, que las hacemos juntos en una llamada. En menos de 48 horas ya estás mandando recordatorios.",
  },
  {
    q: "¿Necesito comprar un número de WhatsApp aparte?",
    a: "Sí, lo ideal es un número dedicado para cobranza (no tu personal). Una SIM nueva sale alrededor de $1.000 ARS. Te ayudamos con todo el proceso de alta en WhatsApp Business.",
  },
  {
    q: "¿Mis deudores tienen que instalar algo?",
    a: "No. Reciben un mensaje de WhatsApp normal con un link. Al abrirlo ven los datos para pagar (CBU, alias, monto, fecha). Funciona en cualquier celular.",
  },
  {
    q: "¿Puedo conectar Cobrai con mi sistema contable / administración?",
    a: "En el plan Pro y A medida sí. Hoy importamos y exportamos Excel. Para integraciones automáticas (con tu sistema de gestión de colegio o de consorcios), pedinos el plan A medida.",
  },
  {
    q: "¿Y si un padre o propietario no tiene WhatsApp?",
    a: "Cobrai también manda por email y te avisa si el WhatsApp no llegó. Para esos casos puntuales podés usar el portal directo (le pasás el link por SMS, o se lo das en mano impreso con un código).",
  },
  {
    q: "¿Cómo cancelo si no me sirve?",
    a: "Mandando un email a soporte. Sin penalidad, sin permanencia. Tu data exportada en Excel queda tuya.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.06),transparent)]"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 ring-1 ring-inset ring-brand-100">
            Resolvé tus dudas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-slate-500 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-relaxed text-slate-600 sm:px-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

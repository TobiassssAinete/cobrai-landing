"use client";

import { useState, type FormEvent } from "react";
import { Building2, GraduationCap, Mail, Send } from "lucide-react";

type Channel = "whatsapp" | "email";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"colegio" | "consorcio" | "otro">(
    "colegio",
  );
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState<Channel>("whatsapp");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Hola! Soy ${name || "[nombre]"}.`,
      "",
      `Tipo: ${type}`,
      `Cantidad de deudores activos: ${size || "no especificado"}`,
      `Email: ${email || "no especificado"}`,
      `Teléfono: ${phone || "no especificado"}`,
      "",
      "Consulta:",
      message || "Quiero conocer más sobre Cobrai.",
    ];
    const body = lines.join("\n");

    if (channel === "whatsapp") {
      const url = `https://wa.me/5493513162208?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const subject = `Consulta de ${name || "interesado en Cobrai"}`;
      const url = `mailto:cobriasas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    }
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent)]"
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 ring-1 ring-inset ring-brand-100">
              Hablemos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Contános de tu colegio o consorcio
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Te respondemos el mismo día con un plan de implementación a
              medida y un costo estimado.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-700 ring-1 ring-inset ring-success-100">
                  ✓
                </span>
                Análisis gratuito de tu cartera de deudores actual
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-700 ring-1 ring-inset ring-success-100">
                  ✓
                </span>
                Demo personalizada de 15 minutos por video llamada
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-700 ring-1 ring-inset ring-success-100">
                  ✓
                </span>
                30 días de prueba sin tarjeta ni permanencia
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                ¿Preferís contacto directo?
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="https://wa.me/5493513162208"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-success-700"
                >
                  <span className="text-success-600">📱</span> +54 9 351 316-2208
                </a>
                <a
                  href="mailto:cobriasas@gmail.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-brand-700"
                >
                  <Mail className="size-4 text-brand-600" /> cobriasas@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre y apellido" required>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="María Pérez"
                  className="form-input"
                />
              </Field>

              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria@colegio.edu.ar"
                  className="form-input"
                />
              </Field>

              <Field label="Teléfono / WhatsApp">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+54 9 351..."
                  className="form-input"
                />
              </Field>

              <Field label="Cantidad de deudores">
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="form-input"
                >
                  <option value="">Seleccioná un rango</option>
                  <option value="0-50">Hasta 50</option>
                  <option value="50-100">50 a 100</option>
                  <option value="100-500">100 a 500</option>
                  <option value="500+">Más de 500</option>
                </select>
              </Field>
            </div>

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-slate-700">
                ¿Qué administrás?
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                <TypeChip
                  selected={type === "colegio"}
                  onClick={() => setType("colegio")}
                  icon={<GraduationCap className="size-4" />}
                  label="Colegio"
                />
                <TypeChip
                  selected={type === "consorcio"}
                  onClick={() => setType("consorcio")}
                  icon={<Building2 className="size-4" />}
                  label="Consorcio"
                />
                <TypeChip
                  selected={type === "otro"}
                  onClick={() => setType("otro")}
                  icon={<span>•</span>}
                  label="Otro"
                />
              </div>
            </fieldset>

            <Field label="Contanos un poco más" className="mt-5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Por ejemplo: tenemos 150 cuotas mensuales y un 20% de morosidad."
                className="form-input resize-none"
              />
            </Field>

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-slate-700">
                ¿Cómo querés que sigamos la conversación?
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <ChannelChip
                  selected={channel === "whatsapp"}
                  onClick={() => setChannel("whatsapp")}
                  label="WhatsApp"
                  hint="respuesta más rápida"
                />
                <ChannelChip
                  selected={channel === "email"}
                  onClick={() => setChannel("email")}
                  label="Email"
                  hint="cobriasas@gmail.com"
                />
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-success-600 to-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Send className="size-4" />
              Enviar consulta
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              No spameamos. Te respondemos solo a vos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

function TypeChip({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${
        selected
          ? "border-brand-600 bg-brand-50 text-brand-800 ring-1 ring-brand-200"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ChannelChip({
  selected,
  onClick,
  label,
  hint,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex flex-col items-center rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${
        selected
          ? "border-success-500 bg-success-50 text-success-800 ring-1 ring-success-200"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
    >
      <span>{label}</span>
      <span
        className={`text-[11px] font-normal ${selected ? "text-success-700" : "text-slate-500"}`}
      >
        {hint}
      </span>
    </button>
  );
}

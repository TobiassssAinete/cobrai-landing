import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de Cobrai, conforme a la Ley 25.326 de Protección de Datos Personales de Argentina.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <LegalLayout
        title="Política de Privacidad"
        updated="1 de mayo de 2026"
      >
        <p>
          En Cobrai protegemos los datos personales de nuestros clientes y de
          los deudores que estos gestionan en la plataforma. Esta política
          describe qué información recopilamos, cómo la usamos y los derechos
          que te corresponden, conforme a la{" "}
          <strong>Ley 25.326 de Protección de Datos Personales</strong> de la
          República Argentina.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          Cobrai · contacto:{" "}
          <a href="mailto:cobriasas@gmail.com">cobriasas@gmail.com</a> ·
          WhatsApp:{" "}
          <a href="https://wa.me/5493513162208">+54 9 351 316-2208</a> ·
          Domicilio: Córdoba, Argentina.
        </p>

        <h2>2. Datos que recopilamos</h2>
        <h3>De nuestros clientes (administradores, directores)</h3>
        <ul>
          <li>Datos identificatorios: nombre, apellido, email, teléfono.</li>
          <li>Datos de la institución: razón social, CUIT, domicilio.</li>
          <li>Datos de facturación y pago.</li>
        </ul>
        <h3>De los deudores cargados por el Cliente</h3>
        <ul>
          <li>
            Nombre, teléfono, email, monto adeudado, datos de la cuota o
            expensa.
          </li>
          <li>
            Estos datos son cargados y administrados por el Cliente. Cobrai
            actúa como encargado del tratamiento conforme al artículo 25 de la
            Ley 25.326.
          </li>
        </ul>
        <h3>De forma automática</h3>
        <ul>
          <li>
            Datos de uso de la plataforma (páginas vistas, acciones realizadas)
            mediante Vercel Analytics.
          </li>
          <li>Cookies técnicas necesarias para el funcionamiento del sitio.</li>
        </ul>

        <h2>3. Para qué usamos tus datos</h2>
        <ul>
          <li>Proveer el servicio de cobranza contratado.</li>
          <li>Facturar y procesar pagos.</li>
          <li>
            Brindar soporte técnico y comunicaciones operativas (no comerciales
            sin tu consentimiento).
          </li>
          <li>Cumplir con obligaciones legales e impositivas.</li>
        </ul>

        <h2>4. Con quién compartimos los datos</h2>
        <p>
          Cobrai no vende ni cede datos personales a terceros. Compartimos
          información únicamente con proveedores que nos permiten prestar el
          servicio:
        </p>
        <ul>
          <li>
            <strong>Meta Platforms (WhatsApp Business)</strong> para el envío
            de mensajes.
          </li>
          <li>
            <strong>Vercel</strong> como proveedor de hosting y analytics
            agregados.
          </li>
          <li>
            <strong>Procesadores de pago</strong> (MercadoPago, transferencias
            bancarias) cuando se gestiona un pago.
          </li>
        </ul>

        <h2>5. Seguridad</h2>
        <ul>
          <li>Conexiones cifradas mediante HTTPS / TLS.</li>
          <li>Datos de tarjetas de crédito: Cobrai NO los almacena.</li>
          <li>
            Acceso a la base de datos restringido por roles y autenticación de
            dos factores.
          </li>
          <li>Backups encriptados con rotación periódica.</li>
        </ul>

        <h2>6. Tus derechos (Ley 25.326)</h2>
        <p>
          Tenés derecho a acceder, rectificar, actualizar o solicitar la
          supresión de tus datos personales. Para ejercerlos escribinos a{" "}
          <a href="mailto:cobriasas@gmail.com">cobriasas@gmail.com</a>. La
          autoridad de control en Argentina es la{" "}
          <strong>
            Agencia de Acceso a la Información Pública (AAIP)
          </strong>
          , que tiene atribuciones para conocer denuncias en caso de
          incumplimiento de las normas vigentes en materia de protección de
          datos personales.
        </p>

        <h2>7. Conservación de datos</h2>
        <p>
          Conservamos los datos mientras dure la relación comercial. Tras la
          baja, los datos quedan disponibles para exportación durante 30 días
          y luego se eliminan o anonimizan, salvo aquellos que debamos
          conservar por obligación legal (por ejemplo, datos de facturación
          por el plazo establecido por AFIP).
        </p>

        <h2>8. Menores de edad</h2>
        <p>
          Cobrai está diseñado para ser usado por administradores adultos. Los
          datos de alumnos menores son tratados únicamente como referencia
          contextual de la cuota; toda comunicación se dirige al
          padre/madre/tutor cargado por el Cliente.
        </p>

        <h2>9. Cookies</h2>
        <p>
          Usamos cookies estrictamente necesarias para el funcionamiento del
          sitio y cookies analíticas agregadas (Vercel Analytics) que no
          permiten identificar individualmente al visitante.
        </p>

        <h2>10. Cambios en esta política</h2>
        <p>
          Cualquier modificación relevante será notificada por email a los
          clientes activos con al menos 15 días de anticipación.
        </p>
      </LegalLayout>
      <Footer />
    </>
  );
}

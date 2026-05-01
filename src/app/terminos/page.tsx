import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del servicio Cobrai — sistema de cobranza por WhatsApp para colegios y consorcios en Argentina.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <LegalLayout title="Términos y condiciones" updated="1 de mayo de 2026">
        <p>
          Bienvenido a Cobrai. Al contratar o utilizar nuestros servicios
          aceptás los siguientes términos. Si no estás de acuerdo, te pedimos
          que no uses la plataforma.
        </p>

        <h2>1. Quiénes somos</h2>
        <p>
          Cobrai es un servicio de cobranza automatizada por WhatsApp diseñado
          para colegios, instituciones educativas, consorcios y administraciones
          en Argentina. Contacto: <a href="mailto:cobriasas@gmail.com">cobriasas@gmail.com</a>{" "}
          · WhatsApp: <a href="https://wa.me/5493513162208">+54 9 351 316-2208</a>.
        </p>

        <h2>2. Objeto del servicio</h2>
        <p>
          Cobrai brinda al cliente (en adelante, &quot;el Cliente&quot;) una
          plataforma para automatizar el envío de recordatorios de pago,
          generación de links de cobranza y seguimiento de su cartera de
          deudores. El servicio se presta &quot;tal cual está&quot; sin
          garantizar resultados específicos de recupero.
        </p>

        <h2>3. Cuenta y responsabilidad del Cliente</h2>
        <ul>
          <li>
            El Cliente es responsable de la veracidad de los datos que carga en
            la plataforma y de contar con autorización válida de sus deudores
            para gestionar su cobranza por canales digitales.
          </li>
          <li>
            El Cliente debe mantener confidenciales sus credenciales de acceso
            y notificar a Cobrai ante cualquier uso no autorizado.
          </li>
          <li>
            Está prohibido usar Cobrai para enviar spam, contenido ilegal,
            ofensivo o no relacionado con la cobranza acordada.
          </li>
        </ul>

        <h2>4. Pagos, planes y prueba gratuita</h2>
        <p>
          Cobrai ofrece distintos planes mensuales detallados en{" "}
          <a href="/#precios">la sección de precios</a>. Los precios pueden ser
          actualizados con un preaviso de 30 días. La prueba gratuita de 30
          días es sin tarjeta y sin permanencia: si al finalizar el período no
          contratás un plan, los envíos se pausan automáticamente.
        </p>

        <h2>5. Cancelación</h2>
        <p>
          Podés cancelar el servicio en cualquier momento escribiendo a{" "}
          <a href="mailto:cobriasas@gmail.com">cobriasas@gmail.com</a>. No hay
          permanencia mínima. Los datos del Cliente quedan disponibles para su
          exportación durante 30 días después de la baja.
        </p>

        <h2>6. WhatsApp Business y plataformas de terceros</h2>
        <p>
          Cobrai opera sobre la API oficial de WhatsApp Business (Meta
          Platforms, Inc.). El Cliente se compromete a respetar las políticas
          de uso de WhatsApp y entiende que Cobrai no es responsable por
          decisiones unilaterales de Meta sobre la cuenta del Cliente.
        </p>

        <h2>7. Limitación de responsabilidad</h2>
        <p>
          La responsabilidad de Cobrai se limita al monto efectivamente abonado
          por el Cliente en los 3 meses anteriores al hecho que dio origen al
          reclamo. Cobrai no se responsabiliza por lucro cesante, pérdida
          indirecta o daños causados por el mal uso de la plataforma.
        </p>

        <h2>8. Propiedad intelectual</h2>
        <p>
          Todos los derechos sobre el software, marca, logo y contenido del
          sitio pertenecen a Cobrai. El Cliente conserva la propiedad de los
          datos que sube a la plataforma.
        </p>

        <h2>9. Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes de la República Argentina.
          Cualquier controversia será sometida a los tribunales ordinarios de
          la ciudad de Córdoba, renunciando expresamente a cualquier otro fuero
          o jurisdicción.
        </p>

        <h2>10. Modificaciones</h2>
        <p>
          Cobrai se reserva el derecho de modificar estos términos. Cualquier
          cambio será notificado por email con al menos 15 días de
          anticipación.
        </p>
      </LegalLayout>
      <Footer />
    </>
  );
}

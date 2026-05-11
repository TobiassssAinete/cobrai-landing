import { ImageResponse } from "next/og";

export const alt = "Cobria — Cobranza automatizada por WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 50%, #0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #2563eb, #16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            Cobria
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Cobranza automática por WhatsApp para colegios y consorcios
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#cbd5e1",
              maxWidth: 1000,
              lineHeight: 1.3,
            }}
          >
            Recordatorios, mora y links de pago automáticos. Argentina.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#94a3b8",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <div>cobria.org</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#16a34a",
              color: "white",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            Probar 30 días gratis
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

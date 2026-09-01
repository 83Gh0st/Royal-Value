import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10352D",
          color: "#EAF0EC",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#EAF0EC",
              color: "#10352D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            RV
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>RV Group Contracting</span>
            <span style={{ fontSize: 15, letterSpacing: 3, opacity: 0.65, textTransform: "uppercase" }}>
              Royal Value Group
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08, maxWidth: 900 }}>
            Built to the drawing.
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08, color: "#F04E23" }}>
            Billed to the quote.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.75,
          }}
        >
          Villas &amp; Warehouses · Dubai · Sharjah · Ajman
        </div>
      </div>
    ),
    { ...size }
  );
}

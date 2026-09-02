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
          background: "#14171A",
          color: "#ECEEEC",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#A8552B",
              color: "#FBF3EE",
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
            <span style={{ fontSize: 15, letterSpacing: 1, opacity: 0.6 }}>Royal Value Group</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.08, maxWidth: 900 }}>
            Civil, MEP and HVAC.
          </span>
          <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.08, color: "#C96B3A" }}>
            Built by one crew since 2007.
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 20, opacity: 0.7 }}>
          Dubai · Sharjah · Ajman · Abu Dhabi
        </div>
      </div>
    ),
    { ...size }
  );
}

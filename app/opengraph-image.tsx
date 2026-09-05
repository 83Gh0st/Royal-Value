import { ImageResponse } from "next/og";
import { LOGO_CHECK_PATH, LOGO_R_PATH, LOGO_TRANSFORM, LOGO_VIEWBOX } from "@/lib/logo-paths";

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
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="62" height="49" viewBox={LOGO_VIEWBOX}>
            <g transform={LOGO_TRANSFORM} fill="#F5F3EF">
              <path d={LOGO_R_PATH} />
            </g>
            <g transform={LOGO_TRANSFORM} fill="#EB1C25">
              <path d={LOGO_CHECK_PATH} />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>RV Group Contracting</span>
            <span style={{ fontSize: 15, letterSpacing: 1, opacity: 0.6 }}>Royal Value Group</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.1 }}>Built right.</span>
          <span style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.1 }}>Wired right.</span>
          <span style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.1, color: "#EB1C25" }}>Cooled right.</span>
        </div>

        <div style={{ display: "flex", fontSize: 20, opacity: 0.7 }}>
          Civil Construction · MEP · HVAC · Dubai · Sharjah · Ajman · Abu Dhabi
        </div>
      </div>
    ),
    { ...size }
  );
}

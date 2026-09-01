/**
 * The hero "drawing sheet" — a technical elevation of a villa and a
 * warehouse side by side, drawn in the brand's line-weight system.
 * Pure inline SVG so it always renders crisply and themes with the
 * page's CSS custom properties (no raster asset needed).
 */
export default function ElevationDrawing() {
  return (
    <svg viewBox="0 0 460 470" role="presentation" focusable="false" aria-hidden="true">
      <defs>
        <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--rule)" strokeWidth="1.2" />
        </pattern>
        <pattern id="grid" width="23" height="23" patternUnits="userSpaceOnUse">
          <path d="M23 0 L0 0 0 23" fill="none" stroke="var(--rule)" strokeWidth=".6" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="460" height="470" fill="url(#grid)" />

      {/* PLAN: plot, setback, footprint */}
      <g stroke="var(--rule-strong)" strokeWidth="1" fill="none" strokeDasharray="5 4">
        <rect x="86" y="52" width="288" height="118" />
      </g>
      <g stroke="var(--pine)" strokeWidth="1.6" fill="none">
        <rect x="66" y="38" width="328" height="146" />
        <rect x="112" y="70" width="150" height="82" fill="url(#hatch)" />
        <rect x="286" y="70" width="76" height="46" />
        <line x1="286" y1="152" x2="362" y2="152" />
        <line x1="286" y1="140" x2="362" y2="140" />
      </g>
      <g stroke="var(--hivis)" strokeWidth="1.2">
        <line x1="66" y1="26" x2="394" y2="26" />
        <line x1="66" y1="20" x2="66" y2="32" />
        <line x1="394" y1="20" x2="394" y2="32" />
      </g>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="var(--muted)" letterSpacing="1">
        <text x="230" y="16" textAnchor="middle">PLOT WIDTH</text>
        <text x="187" y="114" textAnchor="middle" fill="var(--pine)">FOOTPRINT</text>
        <text x="324" y="96" textAnchor="middle">YARD</text>
        <text x="230" y="200" textAnchor="middle">PLAN · SETBACKS SHOWN DASHED</text>
      </g>

      {/* ELEVATIONS */}
      <g stroke="var(--pine)" strokeWidth="1.6" fill="none" strokeLinejoin="miter">
        <path d="M40 380 L40 288 L118 248 L196 288 L196 380" />
        <rect x="40" y="380" width="156" height="6" fill="url(#hatch)" stroke="var(--pine)" />
        <line x1="40" y1="322" x2="196" y2="322" />
        <rect x="62" y="338" width="26" height="34" />
        <rect x="102" y="338" width="32" height="34" />
        <rect x="148" y="338" width="26" height="34" />
        <rect x="62" y="290" width="26" height="24" />
        <rect x="102" y="290" width="32" height="24" />
        <rect x="148" y="290" width="26" height="24" />
        <line x1="118" y1="248" x2="118" y2="268" />
      </g>
      <g stroke="var(--pine)" strokeWidth="1.6" fill="none">
        <path d="M256 380 L256 310 L336 282 L416 310 L416 380" />
        <rect x="256" y="380" width="160" height="6" fill="url(#hatch)" stroke="var(--pine)" />
        <rect x="292" y="328" width="88" height="52" />
        <g strokeWidth="1" stroke="var(--rule-strong)">
          <line x1="292" y1="341" x2="380" y2="341" />
          <line x1="292" y1="354" x2="380" y2="354" />
          <line x1="292" y1="367" x2="380" y2="367" />
        </g>
        <line x1="256" y1="310" x2="416" y2="310" />
      </g>
      <g stroke="var(--hivis)" strokeWidth="1.2">
        <line x1="40" y1="406" x2="196" y2="406" />
        <line x1="40" y1="400" x2="40" y2="412" />
        <line x1="196" y1="400" x2="196" y2="412" />
        <line x1="256" y1="406" x2="416" y2="406" />
        <line x1="256" y1="400" x2="256" y2="412" />
        <line x1="416" y1="400" x2="416" y2="412" />
      </g>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="var(--muted)" letterSpacing="1">
        <text x="118" y="424" textAnchor="middle">VILLA · G+1</text>
        <text x="336" y="424" textAnchor="middle">WAREHOUSE · PEB</text>
      </g>

      {/* title block */}
      <g stroke="var(--rule-strong)" strokeWidth="1" fill="none">
        <line x1="0" y1="440" x2="460" y2="440" />
        <line x1="300" y1="440" x2="300" y2="470" />
      </g>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="var(--muted)" letterSpacing="1.2">
        <text x="4" y="458">RV GROUP CONTRACTING · DUBAI · SHARJAH · AJMAN</text>
        <text x="308" y="458">SHEET 01 OF 01</text>
      </g>
    </svg>
  );
}

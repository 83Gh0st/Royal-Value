import { credibility } from "@/lib/content";

export default function CredibilityBanner() {
  return (
    <div className="banner">
      <div className="banner__in">
        <b>{credibility.line1}</b>
        <span className="dot" aria-hidden="true" />
        <span>{credibility.line2}</span>
      </div>
    </div>
  );
}

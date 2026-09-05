import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, jsonLd } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RV Group Contracting | Civil Construction, MEP & HVAC, UAE",
    template: "%s | RV Group Contracting",
  },
    verification: {
    google: "3jagrlGqmiE1-G0AJpzU5GAnXxMwHsQkVJl9shf-L14",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "RV Group Contracting | Civil Construction, MEP & HVAC",
    description:
      "Approved drawings, precisely executed. Civil, MEP and HVAC contracting across Dubai, Sharjah, Ajman and Abu Dhabi since 2007.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Group Contracting | Civil Construction, MEP & HVAC",
    description:
      "Approved drawings, precisely executed. Civil, MEP and HVAC contracting across Dubai, Sharjah, Ajman and Abu Dhabi since 2007.",
  },
};

export const viewport: Viewport = {
  themeColor: "#14171A",
  width: "device-width",
  initialScale: 1,
};

const THEME_INIT = `
(function(){
  try {
    var stored = localStorage.getItem("rv-theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router has no pages/_document.js; the root layout head is the correct place for this link. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="3jagrlGqmiE1-G0AJpzU5GAnXxMwHsQkVJl9shf-L14" />
      </head>
      <body>{children}</body>
    </html>
  );
}

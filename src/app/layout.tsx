import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = "https://vnv2026.vercel.app";
const ogImage = `${siteUrl}/images/photography/stanly-ranch-convertible.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A World in 30 Miles | Visit Napa Valley × Wine Spectator",
  description:
    "Wine, dine, stay, and explore in one 30-mile stretch of valley. Plan your Napa Valley long weekend with Visit Napa Valley and Wine Spectator.",
  openGraph: {
    title: "A World in 30 Miles | Visit Napa Valley × Wine Spectator",
    description:
      "Wine, dine, stay, and explore in one unforgettable 30-mile corridor.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Driving through Napa Valley vineyards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A World in 30 Miles | Visit Napa Valley × Wine Spectator",
    description:
      "Wine, dine, stay, and explore in one 30-mile stretch of Napa Valley.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Napa Valley",
  description:
    "Napa Valley wine country — stays, dining, wineries, and experiences within thirty miles.",
  touristType: "Wine tourism",
  containsPlace: {
    "@type": "AdministrativeArea",
    name: "Napa County, California",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/photography/stanly-ranch-convertible.jpg"
          imageSizes="100vw"
        />
      </head>
      <body
        className={`${inter.className} hub-page min-h-full flex flex-col antialiased`}
      >
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        {children}
        <Script
          id="json-ld-destination"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

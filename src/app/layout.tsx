import type { Metadata } from "next";
import Script from "next/script";
import PageTransition from "@/components/PageTransition";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PUBLIC_ASSET_REV } from "@/constants/publicAssets";

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
const heroPath = `/images/photography/hub-delivery/stanly-ranch-hero-web.jpg?rev=${PUBLIC_ASSET_REV}`;
const ogImage = `${siteUrl.replace(/\/$/, "")}${heroPath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A World in One Valley | Visit Napa Valley × Wine Spectator",
  description:
    "Live a Little or a Lot in Napa Valley. Plan wine country stays, dining, and experiences with Visit Napa Valley and Wine Spectator.",
  openGraph: {
    title: "A World in One Valley | Visit Napa Valley × Wine Spectator",
    description:
      "From Carneros to Calistoga: wine, food, and adventure in one storied California valley.",
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
    title: "A World in One Valley | Visit Napa Valley × Wine Spectator",
    description:
      "Live a Little or a Lot in Napa Valley. Stays, dining, wineries, and things to do.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Napa Valley",
  description:
    "Napa Valley wine country: stays, dining, wineries, and experiences from the bay to the Mayacamas.",
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
          href={heroPath}
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
        <PageTransition>{children}</PageTransition>
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

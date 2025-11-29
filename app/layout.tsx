import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#151515",
};

export const metadata: Metadata = {
  title: {
    default: "CiaoCiao - Stop chasing. Start building your pack.",
    template: "%s | CiaoCiao",
  },
  description:
    "CiaoCiao helps you discover the right conversations on LinkedIn before you reach out. Our AI-powered SocialTemp™ Score guides you to your future customers, turning cold outreach into warm relationships.",
  keywords: [
    "LinkedIn",
    "social selling",
    "lead generation",
    "relationship intelligence",
    "B2B sales",
    "social listening",
    "prospect engagement",
    "SocialTemp",
    "GTM",
    "go-to-market",
  ],
  authors: [{ name: "CiaoCiao" }],
  creator: "CiaoCiao",
  publisher: "CiaoCiao",
  metadataBase: new URL("https://ciaociao.social"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ciaociao.social",
    siteName: "CiaoCiao",
    title: "CiaoCiao - Stop chasing. Start building your pack.",
    description:
      "Discover the right conversations on LinkedIn before you reach out. Our AI-powered SocialTemp™ Score helps you turn cold outreach into warm relationships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CiaoCiao - Stop chasing. Start building your pack.",
    description:
      "Discover the right conversations on LinkedIn before you reach out. Turn cold outreach into warm relationships with AI-powered relationship intelligence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CiaoCiao",
    url: "https://ciaociao.social",
    logo: "https://ciaociao.social/img/logo/chow-chow-logo-512.png",
    description:
      "AI-powered LinkedIn relationship intelligence platform that helps you discover the right conversations and build warm relationships with future customers.",
    sameAs: [],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CiaoCiao",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Sales & Marketing",
    description:
      "AI-powered LinkedIn relationship intelligence platform that helps you discover the right conversations and build warm relationships with future customers.",
    operatingSystem: "Web",
    url: "https://ciaociao.social",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "49",
      highPrice: "149",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "49",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          description:
            "Perfect for solo founders and small teams getting started. Includes 1 brand, 300 discussions/month, 50 prospects tracked.",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "149",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          description:
            "For growing businesses serious about relationship-driven growth. Includes 3 brands, 1,500 discussions/month, 250 prospects tracked.",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description:
            "Custom pricing for organizations that need unlimited scale and dedicated support.",
        },
      ],
    },
    featureList: [
      "AI-powered social listening",
      "SocialTemp™ relationship scoring",
      "LinkedIn conversation discovery",
      "Prospect tracking",
      "Reverse lookup",
      "Engagement suggestions",
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CiaoCiao",
    url: "https://ciaociao.social",
    description:
      "Stop chasing. Start building your pack. Discover the right conversations on LinkedIn before you reach out.",
    publisher: {
      "@type": "Organization",
      name: "CiaoCiao",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
        {children}
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

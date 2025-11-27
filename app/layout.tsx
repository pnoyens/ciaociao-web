import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
  metadataBase: new URL("https://ciaociao.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ciaociao.ai",
    siteName: "CiaoCiao",
    title: "CiaoCiao - Stop chasing. Start building your pack.",
    description:
      "Discover the right conversations on LinkedIn before you reach out. Our AI-powered SocialTemp™ Score helps you turn cold outreach into warm relationships.",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "CiaoCiao - LinkedIn Relationship Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CiaoCiao - Stop chasing. Start building your pack.",
    description:
      "Discover the right conversations on LinkedIn before you reach out. Turn cold outreach into warm relationships with AI-powered relationship intelligence.",
    images: ["/img/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CiaoCiao",
    applicationCategory: "BusinessApplication",
    description:
      "AI-powered LinkedIn relationship intelligence platform that helps you discover the right conversations and build warm relationships with future customers.",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

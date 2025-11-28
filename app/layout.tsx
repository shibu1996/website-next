import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import FontAwesomeLoader from "../components/FontAwesomeLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Multicolor Theme - Next.js",
    template: "%s | Multicolor Theme",
  },
  description: "Multicolor theme converted to Next.js",
  keywords: ["plumbing", "services", "professional"],
  authors: [{ name: "Your Company" }],
  creator: "Your Company",
  publisher: "Your Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Multicolor Theme',
    title: 'Multicolor Theme - Next.js',
    description: 'Multicolor theme converted to Next.js',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Performance hints
  other: {
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'DENY',
    'x-xss-protection': '1; mode=block',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        {/* FontAwesome CDN Loader - Saves ~400KB from bundle */}
        <FontAwesomeLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "@/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://website.com"),

  title: {
    default: "tagline | website name",
    template: "%s | website name",
  },

  description: "website description",

  keywords: [],

  authors: [{ name: "website name" }],
  creator: "website name",

  openGraph: {
    title: "sharing title",
    description: "sharing description",
    url: "https://website.com",
    siteName: "website name",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "image alt text",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "sharing title",
    description: "sharing description",
    images: ["/image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  category: "website category",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}

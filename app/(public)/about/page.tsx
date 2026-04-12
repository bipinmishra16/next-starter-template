import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",

  description: "description of the about page",

  keywords: [],

  openGraph: {
    title: "sharing title for about page",
    description: "sharing description for about page",
    url: "https://website.com/about",
    siteName: "site name",
    type: "website",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "alt text for image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "sharing title for about page",
    description: "sharing description for about page",
    images: ["/image.webp"],
  },
};

const page = () => {
  return <div>page</div>;
};

export default page;

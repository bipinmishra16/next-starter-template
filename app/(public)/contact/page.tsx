import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",

  description: "description of the contact page",

  keywords: [],

  openGraph: {
    title: "sharing title for contact page",
    description: "sharing description for contact page",
    url: "https://website.com/contact",
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
    title: "sharing title for contact page",
    description: "sharing description for contact page",
    images: ["/image.webp"],
  },
};

const page = () => {
  return <div>Contact Page</div>;
};

export default page;

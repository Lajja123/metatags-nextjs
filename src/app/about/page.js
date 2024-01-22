import React from "react";
import Head from "next/head";
import { Metadata } from "next";
// Generate metadata for the page

function Aboutpage() {
  return (
    <div>
      {/* <Head>
        <meta property="og:title" content="Aboutpage" />
        <meta property="og:description" content="Aboutpage..." />
        <meta
          property="og:image"
          content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
        />
        <meta
          property="og:url"
          content="https://metatags-nextjs.vercel.app/about"
        />
        <meta property="og:type" content="website" />
      </Head> */}
      <div>About page</div>
    </div>
  );
}

export default Aboutpage;

export const metadata = {
  title: "About Us",
  description: "Aboutpage...",
  openGraph: {
    title: "Next.js About us",
    description: "The React Framework for the Web",
    url: "https://metatags-nextjs.vercel.app/about",
    type: "website",
    image:
      "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
    siteName: "Next.js",
  },
};

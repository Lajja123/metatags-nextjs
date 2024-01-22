import React from "react";
import Head from "next/head";

function Aboutpage() {
  return (
    <div>
      <Head>
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
      </Head>
      <div>About page</div>
    </div>
  );
}

export default Aboutpage;

// Generate metadata for the page
export const getMetadata = async function generateMetadata() {
  // Extract params from props

  return {
    openGraph: {
      title: "Next.js About us",
      description: "About us The React Framework for the Web",
      url: "https://metatags-nextjs.vercel.app/about",
      siteName: "Next.js About us",
      image:
        "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
      images: [
        {
          url: "https://nextjs.org/og.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};

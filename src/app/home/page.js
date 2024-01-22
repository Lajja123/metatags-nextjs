import React from "react";
import Head from "next/head";

function Homepage() {
  return (
    <div>
      {/* <Head>
        <meta property="og:title" content="Homepage" />
        <meta property="og:description" content="Homepage..." />
        <meta
          property="og:image"
          content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
        />
        <meta
          property="og:url"
          content="https://metatags-nextjs.vercel.app/home"
        />
        <meta property="og:type" content="website" />
      </Head> */}
      <div>Home page</div>
    </div>
  );
}

export default Homepage;

export const metadata = {
  title: "Home Page",
  description: "Home Page Description...",
  openGraph: {
    title: "Next.js Home Page",
    description: "The React Framework for the Web",
    url: "https://metatags-nextjs.vercel.app/home",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};

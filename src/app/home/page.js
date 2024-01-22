import React from "react";
import Head from "next/head";

function Homepage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Homepage" />
        <meta property="og:description" content="Homepage..." />
        <meta
          property="og:image"
          content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
        />
        <meta property="og:url" content="http://localhost:3000/home" />
        <meta property="og:type" content="website" />
      </Head>
      <div>Home page</div>
    </div>
  );
}

export default Homepage;

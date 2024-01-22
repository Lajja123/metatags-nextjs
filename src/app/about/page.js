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
        <meta property="og:url" content="http://localhost:3000/home" />
        <meta property="og:type" content="website" />
      </Head>
      <div>About page</div>
    </div>
  );
}

export default Aboutpage;

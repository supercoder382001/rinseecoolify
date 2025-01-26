import React from "react";
import Head from "next/head";
import "./style.css"; // Ensure this is the correct path to your global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>Rinsee | Laundry and Dry Cleaning</title>
        <meta
          name="description"
          content="Rinsee delivers fast, reliable laundry service in Delhi, specializing in clothes washing and ironing. Open 24/7 located in Delhi, Noida and Gurgaon. Our express service ensures your garments are cleaned, ironed and delivered to your doorstep. Enjoy hassle free laundry with Rinsee - where convenience and quality meet for a spotless experience."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

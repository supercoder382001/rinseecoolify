import React, { useEffect } from "react";
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';  // Import Google Analytics functions
import "./style.css"; // Ensure this is the correct path to your global styles

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);  // Track page views on route change
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      {/* <script defer src="http://localhost:3000/script.js" data-website-id="0381e7a5-76ba-4973-8916-ab1e30cb8b89"></script> */}
      {/* Google Analytics Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

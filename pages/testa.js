"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const mid = searchParams.get("mid"); // Get the 'mid' query parameter
  const [linked, setLinked] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (mid) {
      try {
        // Decode the Base64-encoded token
        const jsonString = atob(mid);
        const jsonObject = JSON.parse(jsonString);
        console.log("Decoded JSON:", jsonObject);

        // Extract the URL
        const url = jsonObject?.payment_url;
        if (url) {
          setLinked(url);
        } else {
          console.error("URL not found in the JSON data.");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        alert("Invalid Base64-encoded token or JSON format.");
      }
    }
    // Simulate a small delay for the loader
    setTimeout(() => setLoading(false), 2000);
  }, [mid]);

  useEffect(() => {
    if (linked) {
      // Automatically redirect after 1 second
      const timer = setTimeout(() => {
        window.open(linked, "_parent");
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [linked]);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <title>Redirecting</title>
      </Head>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #000;
          color: white;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: ${linked ? "block" : "none"};
        }
      `}</style>

      {loading ? (
        <h1>Loading...</h1>
      ) : linked ? (
        <iframe src={linked} title="Redirect Frame" />
      ) : (
        <h1>Redirecting...</h1>
      )}
    </div>
  );
}

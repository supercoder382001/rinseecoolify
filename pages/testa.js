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
        const url = jsonObject?.data?.instrumentResponse?.redirectInfo?.url;
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
        window.open(linked, "_self");
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [linked]);

  return (
    <div>
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

        button {
          display: none; /* Hide the button */
        }
      `}</style>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Redirecting...</h1>
      )}
    </div>
  );
}

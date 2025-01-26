import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Script from 'dangerous-html/react';

export default function Page() {
  const queryParams = useSearchParams();
  const encodedToken = queryParams.get('token'); // Assuming the Base64 token is passed as 'token'
  let decodedData = {};

  // Decode Base64 JSON token
  if (encodedToken) {
    try {
      const jsonString = decodeURIComponent(escape(atob(encodedToken))); // Decode Base64 to string
      decodedData = JSON.parse(jsonString); // Parse string to JSON
    } catch (error) {
      console.error("Error decoding Base64 token:", error);
    }
  }

  const { mid, muid, mno, amount } = decodedData; // Extract values from decoded JSON

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/create", {
        merchantTransactionId: mid,
        merchantUserId: muid,
        mobileNumber: mno,
        amount: amount,
      });

      window.open(
        response.data.data.instrumentResponse.redirectInfo.url,
        "_parent"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div>
      <button id="myButton" onClick={handleClick}>Click me</button>
      <div>
        <Script html={`<script>
          const button = document.getElementById('myButton');
          function autoClick() {
              button.click(); // Triggers the button's click event
          }
          button.addEventListener('click', function() {
          console.log('Button was clicked automatically!');
          });
          setTimeout(autoClick, 1000);
        </script>`}></Script>
      </div>
    </div>
  );
}

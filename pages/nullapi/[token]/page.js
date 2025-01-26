import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Script from 'dangerous-html/react';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    const { token } = router.query;
    let jsonObject={};
    if (token) {
        try {
          // Decode the Base64-encoded token
          const jsonString = atob(token);
          // Parse the decoded string into a JSON object
          jsonObject = JSON.parse(jsonString);
          console.log(typeof(jsonObject["amount"]));
          console.log(typeof(jsonObject["mid"]));
          console.log(typeof(jsonObject["muid"]));
          console.log(typeof(jsonObject["mno"]));
        } catch (error) {
          console.error('Error decoding token:', error);
          alert('Invalid Base64-encoded token or JSON format.');
        }
      }
    const handleClick = async () => {
        const mid = jsonObject["mid"];
        const muid = jsonObject["muid"];
        const mno = jsonObject["mno"];
        const amount = jsonObject["amount"];
        try {
        const response = await axios.post("/api/create", {
        merchantTransactionId: mid,
        merchantUserId: muid,
        mobileNumber: mno,
        amount: amount,
      });
      // if (!response.ok) {
      //   window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
      // } else {
      // console.error('Error:', response);
      // }  
      
      window.open(
        response.data.data.instrumentResponse.redirectInfo.url,
        "_self"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };
  // useEffect(() => {
  //   // Automatically call the redirect function when the page loads
  //   handleClick();
  // }, []); // Empty dependency array ensures it runs only once on page load

  // return <div>Redirecting...</div>;
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

          setTimeout(autoClick, 1000)
          
          </script>`}></Script>
      </div>
    </div>
  );
}
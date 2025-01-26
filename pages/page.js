// import React, { useEffect } from "react";
// import axios from "axios";
// import { useSearchParams } from 'next/navigation';
// import Script from 'dangerous-html/react';
// export default function Page() {
//     const queryParams = useSearchParams();
//     const mid = queryParams.get('mid');
//     let jsonObject={};
//     let linked="";
//     // const jsonString=atob(mid);
//     // jsonObject=JSON.parse(jsonString);
//     // console.log(jsonObject);
//     // const muid = queryParams.get('muid');
//     // const mno = queryParams.get('mno');
//     // const amount = queryParams.get('amount');
//     if (mid) {
//       try {
//         // Decode the Base64-encoded token
//         const jsonString = atob(mid);
//         // Parse the decoded string into a JSON object
//         jsonObject = JSON.parse(jsonString);
//         console.log(jsonObject);
//       } catch (error) {
//         console.error('Error decoding token:', error);
//         alert('Invalid Base64-encoded token or JSON format.');
//       }
//     }
//     try{
//     linked = jsonObject?.data?.data?.instrumentResponse?.redirectInfo?.url;
//     }catch(error)
//     {
//       console.error('Error fetching token:', error);
      
//     }
//     console.log(linked);       
//     const handleClick = async () => {
//     try {
//       //   const response = await axios.post("/api/create", {
//       //   merchantTransactionId: mid,
//       //   merchantUserId: muid,
//       //   mobileNumber: mno,
//       //   amount: amount,
//       // });
      
//       window.open(
//         linked,
//         "_parent"
//       );
//     } catch (error) {
//       console.error("Error making API request:", error);
//     }
//   };
//   return (
//     <div>
//       <button id="myButton" onClick={handleClick}>Click me</button>
//       <div>
//         <Script html={`<script>
          
//           const button = document.getElementById('myButton');

//           function autoClick() {
//               button.click(); // Triggers the button's click event
//           }

//           button.addEventListener('click', function() {
//           console.log('Button was clicked automatically!');
//           });

//           setTimeout(autoClick, 1000)
          
//           </script>`}></Script>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const mid = searchParams.get("mid"); // Get the 'mid' query parameter
  const [linked, setLinked] = useState("");

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
  }, [mid]);

  useEffect(() => {
    if (linked) {
      // Automatically click the button after 1 second
      const timer = setTimeout(() => {
        document.getElementById("autoClickButton")?.click();
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [linked]);

  const handleClick = () => {
    if (linked) {
      window.open(linked, "_parent");
    } else {
      console.error("No URL available to open.");
    }
  };

  return (
    <div>
      <h1>Auto Redirect Example</h1>
      <button id="autoClickButton" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

import { NextApiRequest, NextApiResponse } from 'next/server';

const SUPABASE_URL = "https://zmvjylvafmgqpxqtrblc.supabase.co/rest/v1/phonepe";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptdmp5bHZhZm1ncXB4cXRyYmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0ODk4MTIsImV4cCI6MjAzOTA2NTgxMn0.-qK5cu9zPoVtcpGAf14-XuJ55SMYXpfpXXgp6lz-Z4M";

const handler = async (req, res) => {
  // Check for POST method
  let parsedData = {};
  if (req.method === 'POST') {
    try {
      const { response } = req.body;

      if (response) {
        try {
          const jsonString = decodeURIComponent(atob(response)); // Decode Base64 to string
          parsedData = JSON.parse(jsonString); // Parse string to JSON
        } catch (error) {
          console.error("Error decoding Base64 token:", error);
        }
      }
      // Decode the base64 string
      // const decodedBody = Buffer.from(response, 'base64').toString('utf-8');
      
      // Parse the decoded JSON
      // const parsedData = JSON.parse(decodedBody);

      // Extract data from the JSON object
      const { success, code, message, data } = parsedData;
      const {
        merchantId,
        merchantTransactionId,
        transactionId,
        amount,
        state,
        responseCode,
        paymentInstrument,
        feesContext
      } = data;

      // Prepare headers for Supabase request
      const headers = {
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      };

      // Prepare the data object to insert into Supabase
      const insertData = {
        success: success,
        code: code,
        message: message,
        merchantId: merchantId,
        merchantTransactionId: merchantTransactionId,
        transactionId: transactionId,
        amount: amount,
        state: state,
        responseCode: responseCode,
        paymentInstrumentType: paymentInstrument.type,
        utr: paymentInstrument.utr,
        accountType: paymentInstrument.accountType,
        feesAmount: feesContext.amount,
      };

      // Send the data to Supabase
      const responsea = await fetch(SUPABASE_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(insertData),
      });

      // Check if the request was successful
      if (responsea.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(responsea.status).json({ success: false, message: await responsea.text() });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    // If method is not POST, respond with method not allowed
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default handler;

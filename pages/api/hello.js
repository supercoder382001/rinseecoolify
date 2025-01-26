// pages/api/webhooks/newSubscription.js

import { NextApiRequest, NextApiResponse } from 'next/server';

const SUPABASE_URL = "https://zmvjylvafmgqpxqtrblc.supabase.co/rest/v1/testphonepe";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptdmp5bHZhZm1ncXB4cXRyYmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0ODk4MTIsImV4cCI6MjAzOTA2NTgxMn0.-qK5cu9zPoVtcpGAf14-XuJ55SMYXpfpXXgp6lz-Z4M";

const handler = async (req, res) => {
  // Check for POST method
  if (req.method === 'POST') {
    try {
      const body = req.body;

      // Prepare headers for the request
      const headers = {
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      };

      // Data to be sent to Supabase
      const data = {
        response: body,
      };

      // Send the POST request to Supabase
      const responsea = await fetch(SUPABASE_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
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

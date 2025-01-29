import { NextResponse,NextRequest } from "next/server";
import crypto from "crypto-js";
import axios from "axios";

export default async function POST(req,res) {
  try {
    const data =  req.body;
    const apidataa={
      merchantId: "M226CLAX56BUS",
      merchantTransactionId: data.merchantTransactionId,
      merchantUserId: data.merchantUserId,
      amount: data.amount,
      callbackUrl: "https://rinsee.in/api/result",
      mobileNumber: data.mobileNumber,
      paymentInstrument: {
        type: "UPI_COLLECT",
        vpa: data.upiid
      }
    };
    const data2 = JSON.stringify(apidataa);
    const base64data = Buffer.from(data2).toString("base64");

    const hash = crypto
      .SHA256(base64data + "/pg/v1/pay" + "e4b612bb-6f2e-4c23-8f4c-7019cc233bda")
      .toString(crypto.enc.Hex);
    const verify = hash + "###" + "1";

    const response = await axios.post(
      "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      { request: base64data },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": verify,
        },
      }
    );
    res.status(200).json({ message: 'Success', status:true , data: response.data.data })
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message || error.response.data.error || "Unknown error"
      : error.message;

    res.status(400).json({ message: errorMessage, status: false });
  }
}

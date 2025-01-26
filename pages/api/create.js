import { NextResponse,NextRequest } from "next/server";
import crypto from "crypto-js";
import axios from "axios";

export default async function POST(req,res) {
  try {
    const data =  req.body;
    const apidata = {
      merchantId: "M226CLAX56BUS",
      merchantTransactionId: data.merchantTransactionId,
      merchantUserId: data.merchantUserId,
      amount: data.amount,
      redirectUrl: `https://rinsee.in/api/hello`,
      redirectMode: "POST",
      callbackUrl: "https://rinsee.in/api/result",
      mobileNumber: data.mobileNumber,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const data2 = JSON.stringify(apidata);
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
    // return NextResponse.json({ message: "Success", data: response.data });
    // return new NextResponse(
    //   JSON.stringify({ success: true, data: response.data.data }),
    //   { status: 200, headers: { 'Content-Type': 'application/json' } }
    // );
  } catch (error) {
    res.status(400).json({message:"Failed", status:false, e:error});
  }
}

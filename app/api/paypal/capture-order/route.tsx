import { NextRequest, NextResponse } from "next/server";

async function generateAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(
    `${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  const json = await response.json();

  return json.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { orderID } = await req.json();

    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const capture = await response.json();

    return NextResponse.json(capture);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to capture payment" },
      { status: 500 }
    );
  }
}
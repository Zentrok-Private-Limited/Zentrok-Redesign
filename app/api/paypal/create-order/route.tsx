import { NextResponse, NextRequest } from "next/server";

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
    const { amount } = await req.json();

    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: Number(amount).toFixed(2),
              },
              description: "Digital Marketing Services",
            },
          ],
        }),
      }
    );

    const order = await response.json();

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create PayPal order" },
      { status: 500 }
    );
  }
}
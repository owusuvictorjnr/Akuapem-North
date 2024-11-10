import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { amount, mobileNumber, networkProvider } = await request.json();

  const paymentData = {
    amount: amount,
    paymentMethod: "card", // In this case, we assume card payment
    mobileNumber: mobileNumber,
    networkProvider: networkProvider,
    returnUrl: "https://your-website.com/thank-you", // Redirect URL after payment
  };

  try {
    // Call Hubtel API to create a payment session
    const response = await axios.post(
      "https://api.hubtel.com/v1/payments",
      paymentData,
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json",
        },
      }
    );

    const { checkoutUrl } = response.data.data;

    if (checkoutUrl) {
      return NextResponse.json({ checkoutUrl });
    } else {
      return NextResponse.json(
        { error: "Failed to create payment session" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error processing payment" },
      { status: 500 }
    );
  }
}

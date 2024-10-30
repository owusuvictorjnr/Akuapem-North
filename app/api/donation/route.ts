import Donation from "@/model/Donate";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-09-30.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { amount, paymentMethod, donorName, donorEmail } = await req.json();

    // payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: "usd", //  preferred currency
      payment_method_types:
        paymentMethod === "momo" ? ["mobilemoney"] : ["card"],
    });

    // donation details in your database (MongoDB)
    const donation = new Donation({
      donorName,
      donorEmail,
      paymentMethod,
      amount,
      transactionId: paymentIntent.id,
      status: "pending",
    });

    await donation.save();

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}

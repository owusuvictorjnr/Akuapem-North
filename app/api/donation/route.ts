import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-09-30.acacia",
});


export async function POST(req: NextRequest) {
    const {amount} = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        payment_method_types: ["card"],
    });

    return NextResponse.json({client_secret: paymentIntent.client_secret});
}
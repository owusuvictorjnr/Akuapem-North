"use client";

import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe outside of component to avoid re-creating on every render
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Elements stripe={stripePromise}>
        <TopNavbar />
        <main>{children}</main>
        <Footer />
      </Elements>
    </div>
  );
}

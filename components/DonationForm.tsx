"use client";

import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");

export default function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/donate",
        { amount },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { clientSecret } = res.data;

      const cardElement = elements?.getElement(CardElement);
      if (!cardElement) {
        throw new Error("Card element not found");
      }

      const result = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result?.error) {
        toast.error(result.error.message);
        console.log(result.error.message);
      } else {
        toast.success("Payment successful");
        console.log("Payment successful");
      }
    } catch {
      toast.error("Failed to add volunteer");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter the amount"
            required
          />
        </div>

        <div>
          <label htmlFor="card-element">Credit or debit card</label>
          <CardElement id="card-element" />
        </div>

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import type { PaymentIntent, PaymentIntentResult } from "@stripe/stripe-js";

export default function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [networkProvider, setNetworkProvider] = useState<string>("");

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe.js has not yet loaded. Please try again.");
      return;
    }

    if (amount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    try {
      const res = await axios.post("/api/donate", { amount, paymentMethod });
      const { clientSecret } = res.data;

      if (paymentMethod === "card") {
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          throw new Error("Card element not found");
        }

        const result: PaymentIntentResult = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: cardElement,
            },
          }
        );

        if (
          "paymentIntent" in result &&
          (result.paymentIntent as PaymentIntent).status === "succeeded"
        ) {
          toast.success("Card Payment successful");
        } else if (result.error) {
          toast.error(result.error.message || "Payment failed.");
        } else if (result as PaymentIntentResult) {
          toast.error(
            (result as PaymentIntentResult).error?.message || "Payment failed."
          );
        } else {
          toast.error("Unexpected payment result.");
        }
      } else if (paymentMethod === "momo") {
        if (!mobileNumber || !networkProvider) {
          toast.error(
            "Please enter your mobile number and select a network provider."
          );
          return;
        }

        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            payment_method_data: {
              billing_details: {
                name: "MoMo User",
                phone: mobileNumber,
              },
            },
            return_url: window.location.href,
          },
          clientSecret,
        });

        if (
          "paymentIntent" in result &&
          (result.paymentIntent as { status: string }).status === "succeeded"
        ) {
          toast.success("Mobile Money Payment successful");
        } else if (result.error) {
          toast.error(result.error.message || "Mobile Money Payment failed.");
        } else {
          toast.error("Unexpected payment result.");
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Failed to process the donation. Please try again.");
    }
  };

  return (
    <>
      <div className="mt-36">
        <h1 className="text-2xl font-bold capitalize text-center">
          Donate to support our cause
        </h1>
      </div>
      <div className="relative w-full min-h-">
        <Image
          src="/logo/npp-1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="-z-10 opacity-30 h-[50vh]"
        />
        <div className="space-y-10 relative z-10 bg-white bg-opacity-80 p-8 max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="amount"
                className="text-center font-semibold text-xl"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                placeholder="Enter the amount"
                min="1"
                required
                className="ring-1 ring-blue-500 outline-none rounded-md p-2"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="payment-method"
                className="text-center font-semibold text-xl"
              >
                Choose Payment Method
              </label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
                className="ring-1 ring-blue-500 outline-none rounded-md p-2"
              >
                <option value="card">Credit or Debit Card</option>
                <option value="momo">Mobile Money</option>
              </select>
            </div>
            {paymentMethod === "card" && (
              <div>
                <label htmlFor="card-element">Credit or debit card</label>
                <CardElement
                  id="card-element"
                  options={CARD_ELEMENT_OPTIONS}
                  className="rounded-md border-2 w-full py-2 p-4 ring-blue-500"
                />
              </div>
            )}
            {paymentMethod === "momo" && (
              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex flex-col space-y-3">
                  <label
                    htmlFor="mobile-number"
                    className="text-center font-semibold text-xl"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter your mobile number"
                    required
                    className="ring-1 ring-blue-500 outline-none rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col space-y-3 justify-center items-center">
                  <label
                    htmlFor="network-provider"
                    className="text-center font-semibold text-xl"
                  >
                    Network Provider
                  </label>
                  <select
                    id="network-provider"
                    value={networkProvider}
                    onChange={(e) => setNetworkProvider(e.target.value)}
                    required
                    className="ring-1 ring-blue-500 outline-none rounded-md p-2"
                  >
                    <option value="">Select your network provider</option>
                    <option value="MTN">MTN</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                  </select>
                </div>
              </div>
            )}
            <div className="bg-rose-400 w-1/2 lg:w- rounded-md text-center py-2 hover:bg-blue-500">
              <button
                type="submit"
                className="text-white font-semibold text-xl"
              >
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

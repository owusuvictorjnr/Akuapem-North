// /app/components/DonationForm.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";

export default function DonationForm() {
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [networkProvider, setNetworkProvider] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (amount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    // Check if mobile number is required and validate
    if (paymentMethod === "momo" && !mobileNumber) {
      toast.error("Please enter your mobile number.");
      return;
    }

    if (paymentMethod === "momo" && !networkProvider) {
      toast.error("Please select your network provider.");
      return;
    }

    setIsProcessing(true);

    try {
      const { data } = await axios.post("/api/hubtel-payment", {
        amount,
        paymentMethod,
        mobileNumber,
        networkProvider,
      });

      if (data.responseCode === "0000" && data.data.checkoutUrl) {
        // Redirect the user to Hubtel's payment page
        window.location.href = data.data.checkoutUrl;
      } else {
        toast.error("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Failed to process the donation. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-36">
      <h1 className="md:text-3xl text-lg text-blue-700 font-bold capitalize text-center">
        Donate to support our cause
      </h1>
      <div className="relative w-full mt-10">
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
            className="space-y-5 flex flex-col items-center"
          >
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="amount"
                className="font-semibold text-blue-400 text-center md:text-xl"
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
                className="ring-1 ring-blue-500 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="payment-method"
                className="font-semibold text-blue-400 text-center md:text-xl"
              >
                Choose Payment Method
              </label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
                className="ring-1 ring-blue-500 rounded-md p-2 outline-none"
              >
                <option value="card">Credit or Debit Card</option>
                <option value="momo">Mobile Money</option>
              </select>
            </div>
            {paymentMethod === "momo" && (
              <div className="space-y-3">
                <div className="flex flex-col space-y-3">
                  <label
                    htmlFor="mobile-number"
                    className="font-semibold text-blue-400 text-center md:text-xl"
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
                    className="ring-1 ring-blue-500 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label
                    htmlFor="network-provider"
                    className="font-semibold text-blue-400 text-center md:text-xl"
                  >
                    Network Provider
                  </label>
                  <select
                    id="network-provider"
                    value={networkProvider}
                    onChange={(e) => setNetworkProvider(e.target.value)}
                    required
                    className="ring-1 ring-blue-500 rounded-md p-2 outline-none"
                  >
                    <option value="">Select your network provider</option>
                    <option value="MTN">MTN</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                  </select>
                </div>
              </div>
            )}
            <button
              type="submit"
              disabled={isProcessing}
              className={`${
                isProcessing ? "bg-gray-400" : "bg-rose-400"
              } w-1/2 text-white font-semibold py-2 rounded-md hover:bg-blue-500`}
            >
              {isProcessing ? "Processing..." : "Donate"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

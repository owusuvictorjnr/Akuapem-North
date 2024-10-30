import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  paymentMethod: { type: String, enum: ["card", "momo"], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "usd" }, // Modify based on your local currency if necessary
  status: {
    type: String,
    enum: ["succeeded", "pending", "failed"],
    default: "pending",
  },
  transactionId: { type: String, required: true }, // Stripe Payment Intent ID
  createdAt: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;

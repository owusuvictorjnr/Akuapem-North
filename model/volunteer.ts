import { Schema, model, models } from "mongoose";

const volunteerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },

  interests: {
    type: [String],
    required: true,
  },
});

export const Volunteer =
  models.Volunteer || model("Volunteer", volunteerSchema);

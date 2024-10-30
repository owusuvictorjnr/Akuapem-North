import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  date: {
    type: String,
    require: true,
  },

  ImageUrl: {
    type: String,
    require: true,
  },
});

export default mongoose.models.News || mongoose.model("News", NewsSchema);

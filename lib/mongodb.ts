import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

declare const global: {
  mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<typeof mongoose> | null;
  };
};

let cached: {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
} = (global.mongoose = { conn: null, promise: null });

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = (await cached.promise) as unknown as mongoose.Connection;
  return cached.conn;
}

export default dbConnect;

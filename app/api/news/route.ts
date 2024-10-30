import { newsData } from "@/data/newsData";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const news = await newsData.find({});
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching news data", error },
      { status: 500 }
    );
  }
}

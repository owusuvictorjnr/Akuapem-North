import { connectDB } from "@/lib/mongodb";
import { Volunteer } from "@/model/volunteer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();

    const volunteer = new Volunteer(data);

    await volunteer.save();

    return NextResponse.json({ message: "Volunteer added successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to add volunteer" },
      { status: 500 }
    );
  }
}

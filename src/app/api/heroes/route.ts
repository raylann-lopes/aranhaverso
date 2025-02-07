import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.API_URL) {
    throw new Error("API_URL environment variable is not defined");
  }
  const res = await fetch(process.env.API_URL);
  const data = await res.json();

  return NextResponse.json({ data });
}

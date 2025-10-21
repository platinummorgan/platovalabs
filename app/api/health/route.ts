import { NextResponse } from "next/server";

export async function GET() {
  // lightweight health check
  return NextResponse.json({ status: "ok", uptime: process.uptime() });
}

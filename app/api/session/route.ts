import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getAuthSession(); 

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

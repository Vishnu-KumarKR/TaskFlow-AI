import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ success: true, ...body });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

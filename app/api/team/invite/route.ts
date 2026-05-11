import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email and save invite to DB:
    // await sendEmail(body.email);
    
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, email: body.email, role: body.role });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would connect to Prisma here:
    // const session = await getServerSession(authOptions);
    // const project = await prisma.project.create({ ... });
    
    // Simulating database latency
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ id: Date.now().toString(), ...body, progress: 0, status: "PLANNING", team: [] });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

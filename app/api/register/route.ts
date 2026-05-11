import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validatedData = registerSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json({ message: "Invalid data", errors: validatedData.error.issues }, { status: 400 });
    }

    const { email, name, password } = validatedData.data;

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Database connection timeout")), 4000)
    );

    // Check for duplicate email with timeout
    const existingUser = await Promise.race([
      prisma.user.findUnique({ where: { email } }),
      timeoutPromise
    ]) as any;

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await Promise.race([
      prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        }
      }),
      timeoutPromise
    ]) as any;

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error: any) {
    console.error("REGISTRATION_ERROR", error);
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}

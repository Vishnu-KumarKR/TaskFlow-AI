import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_development" });

  const isAuthRoute = req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";

  if (isAuthRoute) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return null;
  }

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return null;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"]
};

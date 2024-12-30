import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;

  // Define the routes that require authentication
  const protectedRoutes = ["/dashboard"];

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Specify the routes where the middleware should be applied
export const config = {
  matcher: ["/dashboard/:path*"], // Protected routes
};

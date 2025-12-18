import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl.origin));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/create", "/profile"],
};

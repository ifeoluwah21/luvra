// export { auth as proxy } from "./lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
export async function proxy(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  console.log(`Gotten session - ${session.user?.id}🚀`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/create", "/profile"],
};

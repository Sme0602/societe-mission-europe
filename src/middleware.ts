import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_DOMAIN = "societe-mission-europe.com";

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.includes("vercel.app")) {
    const url = new URL(request.url);
    url.host = CANONICAL_DOMAIN;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect unauthenticated users to login (except on login page)
  if (!user && !request.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Redirect authenticated users away from login page
  if (user && request.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|fonts|videos|documents|logos|partners|flags|icons).*)"],
};

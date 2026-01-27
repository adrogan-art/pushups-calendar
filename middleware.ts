import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // пропускаем next internal, api и файлы (favicon, png, css и т.п.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // если уже /ru/... или /en/... — ничего не делаем
  const seg = pathname.split("/")[1];
  if (seg && isLocale(seg)) return NextResponse.next();

  // иначе редиректим в /ru (defaultLocale)
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};

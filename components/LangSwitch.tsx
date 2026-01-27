"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";

export default function LangSwitch() {
  const pathname = usePathname(); // /ru/... или /en/...
  const parts = pathname.split("/");
  const current = (parts[1] && isLocale(parts[1]) ? parts[1] : "ru") as Locale;

  function hrefFor(next: Locale) {
    const rest = parts.slice(2).join("/");
    return `/${next}${rest ? `/${rest}` : ""}`;
  }

  return (
    <div className="langSwitch" role="group" aria-label="Language switch">
      {locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          className={`langBtn ${current === l ? "active" : ""}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

import type { Locale } from "@/lib/i18n";
import ru from "./ru";
import en from "./en";

export function getDict(lang: Locale) {
  return lang === "en" ? en : ru;
}

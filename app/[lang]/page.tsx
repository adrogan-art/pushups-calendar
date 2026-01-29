import CalendarClient from "./CalendarClient";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <CalendarClient lang={lang} />;
}

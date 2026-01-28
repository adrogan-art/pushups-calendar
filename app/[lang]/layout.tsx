import type { Metadata } from "next";

const metaByLang: Record<string, { title: string; description: string }> = {
  ru: {
    title: "100 отжиманий — челлендж",
    description: "Календарь для отслеживания прогресса. Визуализация, мотивация и удобная печать.",
  },
  en: {
    title: "100 push-ups — challenge",
    description: "A printable 100-day progress calendar: track, stay motivated, and keep going.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const m = metaByLang[params.lang] ?? metaByLang.ru;

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL("https://100pushapp.vercel.app"),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${params.lang}`,
      siteName: "100PushApp",
      type: "website",
      images: [
        {
          url: "/og.png", // или "/og.jpg" — должно совпадать с файлом в public
          width: 1200,
          height: 630,
          alt: m.title,
        },
      ],
    },
  };
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
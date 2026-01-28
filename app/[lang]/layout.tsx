import type { Metadata } from "next";

const metaByLang: Record<
  string,
  { title: string; description: string; ogImage: string }
> = {
  ru: {
    title: "100 отжиманий — челлендж",
    description:
      "Челлендж на 100 дней: начните с одного отжимания, каждый день добавляйте по одному и отмечайте прогресс в календаре A4.",
    ogImage: "/og-ru.jpg",
  },
  en: {
    title: "100 push-ups — challenge",
    description:
      "100‑day push-up challenge: start with one push-up, add one more every day and track your progress on a printable A4 calendar.",
    ogImage: "/og-en.jpg",
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
          url: m.ogImage,
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
import "@/styles/calendar.base.css";
import "@/styles/calendar.screen.css";
import "@/styles/calendar.print.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100 отжиманий — календарь",
  description: "Трекер на 100 дней: печатай календарь и отмечай дни!",
  metadataBase: new URL("https://100pushapp.vercel.app"),
  openGraph: {
    title: "100 отжиманий — календарь",
    description: "Трекер на 100 дней: печатай календарь и отмечай дни!",
    url: "/",
    siteName: "100PushApp",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Календарь 100 отжиманий",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

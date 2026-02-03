import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdPilot AI - 代理店品質の広告運用を、1/4のコストで",
  description:
    "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。月額3万円から始める新しい広告運用。",
  openGraph: {
    title: "AdPilot AI - 代理店品質の広告運用を、1/4のコストで",
    description:
      "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。月額3万円から始める新しい広告運用。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdPilot AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdPilot AI - 代理店品質の広告運用を、1/4のコストで",
    description:
      "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

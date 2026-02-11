import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rakuad.jp"),
  alternates: {
    canonical: "/",
  },
  title: "ラクアド - 代理店品質の広告運用を、1/4のコストで",
  description:
    "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。月額3万円から始める新しい広告運用。",
  openGraph: {
    title: "ラクアド - 代理店品質の広告運用を、1/4のコストで",
    description:
      "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。月額3万円から始める新しい広告運用。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ラクアド - SNS広告運用AIツール",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ラクアド - 代理店品質の広告運用を、1/4のコストで",
    description:
      "Meta・Google広告の監視・最適化・レポート作成をAIがサポート。代理店より速く、安く、ラクに。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ラクアド",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Meta・Google広告の監視・最適化・レポート作成をAIがサポートするSNS広告運用ツール",
      offers: {
        "@type": "Offer",
        price: "30000",
        priceCurrency: "JPY",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "どの広告媒体に対応していますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "初期はGoogle広告とMeta広告（Facebook/Instagram）に対応。TikTok、LINE、Yahoo!は順次対応予定です。",
          },
        },
        {
          "@type": "Question",
          name: "完全に自動で運用されますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "基本は「AI提案 → あなたが承認 → 実行」の流れです。承認なしの完全自動モードも設定可能です。",
          },
        },
        {
          "@type": "Question",
          name: "既存の代理店と併用できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、可能です。レポート作成や異常検知の補助ツールとしてもご利用いただけます。",
          },
        },
        {
          "@type": "Question",
          name: "広告アカウントの権限はどの程度必要ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "閲覧権限のみでもレポート機能は使えます。自動調整機能を使う場合は編集権限が必要です。",
          },
        },
        {
          "@type": "Question",
          name: "解約はいつでもできますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、月単位でいつでも解約可能です。縛り期間はありません。",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "ラクアド",
      url: "https://rakuad.jp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

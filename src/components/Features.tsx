"use client";

import Image from "next/image";
import { Check, MessageSquare, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "自然言語で操作、専門知識ゼロ",
    description:
      "「CPAを下げて」「20代向けの配信を強めて」。チャット感覚で指示を送れば、AIが最適な設定に即座に反映します。",
    stat: "専門知識",
    statLabel: "不要",
    color: "sky",
    image: "/images/feature-cost.png",
  },
  {
    icon: Brain,
    title: "プロレベルの最適化をAIが実行",
    description:
      "数万件の運用データを持つAIが、あなたの代わりに24時間365日ABテストと予算配分を実施。代理店トップレベルのパフォーマンスを実現します。",
    stat: "24時間365日",
    statLabel: "自動最適化",
    color: "amber",
    image: "/images/feature-alert.png",
  },
  {
    icon: Zap,
    title: "アカウント連携だけで即スタート",
    description:
      "面倒な初期設定や学習期間は不要。既存の広告アカウントを連携するだけで、AIが即座に分析・運用を開始します。",
    stat: "最短5分",
    statLabel: "で運用開始",
    color: "emerald",
    image: "/images/feature-time.png",
  },
];

const comparison = [
  {
    item: "専門知識",
    agency: "不要（代理店に依頼）",
    tool: "必要（自分で操作）",
    us: "不要（AIに話すだけ）",
  },
  {
    item: "操作方法",
    agency: "メール・電話で依頼",
    tool: "複雑な管理画面を操作",
    us: "チャットで自然言語指示",
  },
  {
    item: "最適化",
    agency: "担当者の経験に依存",
    tool: "自分で分析・判断",
    us: "AIが自動でABテスト・最適化",
  },
  {
    item: "対応速度",
    agency: "翌営業日",
    tool: "自分で気づく必要あり",
    us: "24時間365日リアルタイム",
  },
  {
    item: "導入の手軽さ",
    agency: "契約・打ち合わせが必要",
    tool: "初期設定に時間がかかる",
    us: "アカウント連携だけで即開始",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            簡単なのに中身は<span className="text-sky-500">プロ品質</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            誰でも使えるシンプルさと、代理店トップレベルの運用力。
            AIだからこそ実現できる、新しい広告運用のかたちです。
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full overflow-hidden"
            >
              {/* 背景画像 */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-white/80" />
              {/* コンテンツ */}
              <div className="relative z-10 h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    feature.color === "sky"
                      ? "bg-sky-100"
                      : feature.color === "amber"
                        ? "bg-amber-100"
                        : "bg-emerald-100"
                  }`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${
                      feature.color === "sky"
                        ? "text-sky-600"
                        : feature.color === "amber"
                          ? "text-amber-600"
                          : "text-emerald-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] flex items-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">
                  {feature.description}
                </p>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold w-fit ${
                    feature.color === "sky"
                      ? "bg-sky-50 text-sky-700"
                      : feature.color === "amber"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  <span className="text-lg">{feature.stat}</span>
                  <span className="font-normal">{feature.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">媒体別比較</h3>
          </div>
          <p className="px-6 pt-4 mb-4 text-xs text-slate-500 sm:hidden">
            横にスクロールできます →
          </p>
          <div className="table-scroll overflow-x-scroll">
            <table className="w-full min-w-[860px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap text-left p-4 text-slate-500 font-medium">
                    比較項目
                  </th>
                  <th className="whitespace-nowrap text-left p-4 text-slate-500 font-medium">
                    広告代理店
                  </th>
                  <th className="whitespace-nowrap text-left p-4 text-slate-500 font-medium">
                    運用自動化ツール
                  </th>
                  <th className="whitespace-nowrap bg-sky-50 p-4 text-left text-sky-600 font-bold">
                    AdPilot AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="whitespace-nowrap p-4 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="whitespace-nowrap p-4 text-slate-500">
                      {row.agency}
                    </td>
                    <td className="whitespace-nowrap p-4 text-slate-500">
                      {row.tool}
                    </td>
                    <td className={`whitespace-nowrap bg-sky-50 p-4 `}>
                      <div className="flex items-center gap-2 text-sky-700 font-medium">
                        <Check className="w-4 h-4" />
                        {row.us}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

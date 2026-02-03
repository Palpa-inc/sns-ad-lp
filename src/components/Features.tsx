"use client";

import { Check, Clock, PiggyBank, Zap } from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "代理店の1/4のコスト",
    description:
      "月額広告費100万円なら、代理店は月20万円。本サービスは月3万円から。",
    stat: "最大85%",
    statLabel: "コスト削減",
    color: "sky",
  },
  {
    icon: Zap,
    title: "リアルタイムで異常を検知",
    description:
      "CPAの急騰、予算の急消化を即座にキャッチ。代理店の「翌営業日対応」を待つ必要なし。",
    stat: "数分",
    statLabel: "検知から通知まで",
    color: "amber",
  },
  {
    icon: Clock,
    title: "面倒な作業から解放",
    description:
      "レポート作成、数値チェック、設定変更。時間のかかる作業をAIがサポート。",
    stat: "週15時間→2時間",
    statLabel: "作業時間削減",
    color: "emerald",
  },
];

const comparison = [
  {
    item: "月額コスト",
    agency: "広告費の20%",
    tool: "広告費の5%",
    us: "月額3万円〜",
  },
  {
    item: "対応速度",
    agency: "翌営業日",
    tool: "ダッシュボード確認が必要",
    us: "リアルタイム通知",
  },
  {
    item: "操作方法",
    agency: "メール・電話で依頼",
    tool: "管理画面を操作",
    us: "自然言語で指示",
  },
  {
    item: "レポート",
    agency: "週1回PDF",
    tool: "自分で出力",
    us: "自動生成・いつでも確認",
  },
  {
    item: "設定変更",
    agency: "依頼→確認→実行",
    tool: "自分で設定",
    us: "AIが提案→承認で実行",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            選ばれる3つの理由
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            代理店でもなく、単なるツールでもない。
            <br />
            AIパートナーとして、あなたの広告運用をサポートします。
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
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
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">競合比較</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4 text-slate-500 font-medium">
                    比較項目
                  </th>
                  <th className="text-left p-4 text-slate-500 font-medium">
                    広告代理店
                  </th>
                  <th className="text-left p-4 text-slate-500 font-medium">
                    運用自動化ツール
                  </th>
                  <th className="text-left p-4 text-sky-600 font-bold bg-sky-50">
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
                    <td className="p-4 font-medium text-slate-900">{row.item}</td>
                    <td className="p-4 text-slate-500">{row.agency}</td>
                    <td className="p-4 text-slate-500">{row.tool}</td>
                    <td className="p-4 bg-sky-50">
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

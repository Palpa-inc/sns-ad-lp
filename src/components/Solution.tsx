"use client";

import { ChevronRight, Check, X } from "lucide-react";

const comparisons = [
  {
    axis: "操作方法",
    agency: "専門スタッフが管理画面を操作",
    us: "チャットで指示するだけ",
  },
  {
    axis: "最適化",
    agency: "担当者の経験と勘",
    us: "AIが24時間365日データ分析・自動最適化",
  },
  {
    axis: "専門知識",
    agency: "不要（代理店に丸投げ）",
    us: "不要（AIが判断・実行）",
  },
];

const beforeAfter = [
  {
    before: "管理画面を開いて複雑な設定を操作",
    after: "「CPAを下げて」とチャットで指示するだけ",
  },
  {
    before: "何が悪いのか分析に時間がかかる",
    after: "AIが原因を特定し改善案を即座に提案",
  },
  {
    before: "ABテストの設計・実行を手動で管理",
    after: "AIが自動でABテスト・予算配分を実施",
  },
  {
    before: "媒体ごとの仕様を覚える必要がある",
    after: "媒体の違いはAIが吸収、あなたは目標を伝えるだけ",
  },
];

export default function Solution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-sky-500">「指示するだけ」</span>で、あとはAIにお任せ。
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            「CPAを下げて」「20代向けの配信を強めて」。チャット感覚で指示を送れば、
            <br />
            AIが最適な設定に即座に反映します。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-6 text-slate-500 font-medium">
                    比較軸
                  </th>
                  <th className="text-left p-6 text-slate-500 font-medium">
                    広告代理店
                  </th>
                  <th className="text-left p-6 text-sky-600 font-bold bg-sky-50">
                    AdPilot AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="p-6 font-semibold text-slate-900">
                      {row.axis}
                    </td>
                    <td className="p-6 text-slate-600">{row.agency}</td>
                    <td className="p-6 text-sky-700 font-medium bg-sky-50">
                      {row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Before/After */}
        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfter.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-sm line-through">{item.before}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium">{item.after}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-sky-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

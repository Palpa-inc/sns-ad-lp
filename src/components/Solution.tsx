"use client";

import { ChevronRight, Check, X } from "lucide-react";

const comparisons = [
  {
    axis: "コスト",
    agency: "広告費の20%（100万円で月20万円）",
    us: "月額3万円〜（最大85%削減）",
  },
  {
    axis: "対応速度",
    agency: "依頼→翌営業日",
    us: "リアルタイムで異常検知・通知",
  },
  {
    axis: "レポート",
    agency: "週1回のPDF",
    us: "いつでも最新データを確認",
  },
];

const beforeAfter = [
  {
    before: "代理店への手数料、月20万円",
    after: "月額3万円で同等以上の運用品質",
  },
  {
    before: "「確認します」から翌日対応",
    after: "異常発生から数分でSlack通知",
  },
  {
    before: "毎週2時間かけてレポート作成",
    after: "ワンクリックで自動生成",
  },
  {
    before: "設定変更の度にメールでやり取り",
    after: "自然言語で指示、即時反映",
  },
];

export default function Solution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            代理店より<span className="text-sky-500">速く</span>、
            <span className="text-sky-500">安く</span>、
            <span className="text-sky-500">ラクに</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AIが24時間体制であなたの広告を監視・最適化。
            <br />
            代理店への依頼が必要だった業務を自動化します。
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

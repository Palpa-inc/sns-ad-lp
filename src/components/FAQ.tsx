"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "どの広告媒体に対応していますか？",
    answer:
      "初期はGoogle広告とMeta広告（Facebook/Instagram）に対応。TikTok、LINE、Yahoo!は順次対応予定です。",
  },
  {
    question: "完全に自動で運用されますか？",
    answer:
      "基本は「AI提案 → あなたが承認 → 実行」の流れです。承認なしの完全自動モードも設定可能です。",
  },
  {
    question: "既存の代理店と併用できますか？",
    answer:
      "はい、可能です。レポート作成や異常検知の補助ツールとしてもご利用いただけます。",
  },
  {
    question: "広告アカウントの権限はどの程度必要ですか？",
    answer:
      "閲覧権限のみでもレポート機能は使えます。自動調整機能を使う場合は編集権限が必要です。",
  },
  {
    question: "解約はいつでもできますか？",
    answer: "はい、月単位でいつでも解約可能です。縛り期間はありません。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-slate-600">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors faq-button"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-200"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pt-3 pb-5 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (hover: hover) {
          .faq-button:hover {
            background-color: #f8fafc;
          }
        }
      `}</style>
    </section>
  );
}

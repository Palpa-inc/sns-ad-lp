"use client";

import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            シンプルな料金体系
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            広告費の20%ではなく、月額固定料金。
            <br />
            広告費が増えても料金は変わりません。
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-b from-sky-50 to-white rounded-3xl border-2 border-sky-200 p-8 shadow-xl shadow-sky-100/50">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                先行登録特典
              </div>
            </div>

            <div className="text-center pt-4 pb-8 border-b border-sky-100">
              <p className="text-sky-600 font-semibold mb-2">
                正式リリース時 50% OFF
              </p>

              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-slate-400 line-through">
                  ¥39,800
                </span>
                <span className="text-5xl font-bold text-slate-900">
                  ¥19,800
                </span>
                <span className="text-slate-500">/月</span>
              </div>

              <p className="text-sm text-slate-500">
                ※ 月額広告費100万円まで
              </p>
              <p className="text-sm text-slate-500">
                ※ それ以上は個別お見積り
              </p>
            </div>

            <div className="py-8 space-y-4">
              {[
                "Google広告・Meta広告の一元管理",
                "24時間リアルタイム監視",
                "異常検知・Slack通知",
                "自然言語での操作",
                "自動レポート生成",
                "専任サポート",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-600" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="w-full cta-button py-4 font-semibold text-lg transition-colors"
            >
              先行登録で50% OFFを確保
            </button>

            <p className="text-center text-sm text-slate-500 mt-4">
              クレジットカード不要・いつでもキャンセル可能
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            安全な決済
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            契約期間の縛りなし
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            専任サポート付き
          </div>
        </div>
      </div>
    </section>
  );
}

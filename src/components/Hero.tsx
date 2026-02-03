"use client";

import { ChevronRight, BarChart3, Bell, MessageSquare } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/75 via-white/50 to-white/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
              </span>
              先行登録受付中
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              代理店品質を、
              <br />
              <span className="text-sky-500">代理店価格の1/4で。</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              24時間リアルタイム監視、異常検知、最適化提案。
              <br />
              代理店に頼んでいた業務を、
              <span className="font-semibold text-slate-900">月額3万円</span>
              から。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="cta-button-square px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                無料で先行登録する
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                クレジットカード不要
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                いつでもキャンセル可能
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">AdPilot AI</h3>
                    <p className="text-sm text-slate-500">ダッシュボード</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm text-emerald-600 font-medium">
                    監視中
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm text-slate-500">今週のCPA</p>
                  <p className="text-2xl font-bold text-slate-900 tabular-nums">
                    ¥2,340
                  </p>
                  <p className="text-sm text-emerald-600 flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    前週比 -12%
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm text-slate-500">ROAS</p>
                  <p className="text-2xl font-bold text-slate-900 tabular-nums">
                    4.2x
                  </p>
                  <p className="text-sm text-emerald-600 flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    前週比 +8%
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-slate-500">費用消化</p>
                  <p className="text-sm font-medium text-slate-900">82%</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-sky-500 h-2 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>

              {/* Notification preview */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <Bell className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800">異常検知</p>
                  <p className="text-sm text-amber-700">
                    Meta広告のCPAが20%上昇しています
                  </p>
                </div>
              </div>

              {/* AI suggestion */}
              <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">AI提案</p>
                  <p className="text-sm text-slate-600">
                    効率の悪いクリエイティブを停止することを推奨します
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="decorative absolute -z-10 top-8 -right-8 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"
              aria-hidden="true"
            ></div>
            <div
              className="decorative absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-sky-300 rounded-full blur-3xl opacity-20"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";

export default function PreviewPage() {
  const buttonPatterns = [
    {
      name: "Pattern A: フラット単色",
      description: "シンプルで信頼感のあるデザイン",
      className: "bg-sky-500 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors",
    },
    {
      name: "Pattern B: フラット + 微細シャドウ",
      description: "単色だけど立体感あり",
      className: "bg-sky-500 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/30",
    },
    {
      name: "Pattern C: 縦グラデーション（ソフト）",
      description: "上から下に微妙な変化",
      style: { background: "linear-gradient(180deg, #0EA5E9 0%, #0284C7 100%)" },
      className: "text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity",
    },
    {
      name: "Pattern D: 下線アクセント",
      description: "ミニマルでモダン",
      className: "bg-sky-500 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors border-b-4 border-sky-700",
    },
    {
      name: "Pattern E: アウトライン",
      description: "軽やかでクリーン",
      className: "bg-transparent text-sky-600 px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 border-2 border-sky-500 hover:bg-sky-50 transition-colors",
    },
    {
      name: "Pattern F: ダーク",
      description: "力強くプロフェッショナル",
      className: "bg-slate-900 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors",
    },
    {
      name: "Pattern G: ダーク + スカイアクセント",
      description: "落ち着きとアクセント",
      className: "bg-slate-900 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors border-b-2 border-sky-500",
    },
    {
      name: "Pattern H: 左ボーダー",
      description: "ユニークで目立つ",
      className: "bg-sky-500 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors border-l-4 border-sky-700",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            CTAボタン デザインパターン
          </h1>
          <p className="text-slate-600">
            気に入ったパターンの番号を教えてね！
          </p>
        </div>

        <div className="space-y-8">
          {buttonPatterns.map((pattern, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-slate-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-1">
                    {pattern.name}
                  </h2>
                  <p className="text-sm text-slate-500">{pattern.description}</p>
                </div>
                <button
                  className={pattern.className}
                  style={pattern.style}
                >
                  無料で先行登録する
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Context Preview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            ヒーローセクションでのイメージ
          </h2>

          {/* Pattern A in context */}
          <div className="bg-gradient-to-b from-sky-50 to-white p-12 mb-8 border border-slate-200">
            <p className="text-xs text-slate-400 mb-4">Pattern A: フラット単色</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              代理店品質を、<span className="text-sky-500">代理店価格の1/4で。</span>
            </h3>
            <p className="text-slate-600 mb-6">
              24時間リアルタイム監視、異常検知、最適化提案。
            </p>
            <button className="bg-sky-500 text-white px-8 py-4 font-semibold text-lg flex items-center gap-2 hover:bg-sky-600 transition-colors">
              無料で先行登録する
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pattern F in context */}
          <div className="bg-gradient-to-b from-sky-50 to-white p-12 mb-8 border border-slate-200">
            <p className="text-xs text-slate-400 mb-4">Pattern F: ダーク</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              代理店品質を、<span className="text-sky-500">代理店価格の1/4で。</span>
            </h3>
            <p className="text-slate-600 mb-6">
              24時間リアルタイム監視、異常検知、最適化提案。
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 font-semibold text-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
              無料で先行登録する
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pattern G in context */}
          <div className="bg-gradient-to-b from-sky-50 to-white p-12 border border-slate-200">
            <p className="text-xs text-slate-400 mb-4">Pattern G: ダーク + スカイアクセント</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              代理店品質を、<span className="text-sky-500">代理店価格の1/4で。</span>
            </h3>
            <p className="text-slate-600 mb-6">
              24時間リアルタイム監視、異常検知、最適化提案。
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 font-semibold text-lg flex items-center gap-2 hover:bg-slate-800 transition-colors border-b-2 border-sky-500">
              無料で先行登録する
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

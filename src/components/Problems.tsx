"use client";

import Image from "next/image";
import { LayoutGrid, CircleHelp, SlidersHorizontal } from "lucide-react";

const problems = [
  {
    icon: LayoutGrid,
    title: "管理画面が複雑すぎる",
    description:
      "Meta、Google、X, TikTok... 媒体ごとに異なる仕様や指標を覚えるだけで手一杯になっていませんか？",
    image: "/images/problem-cost.png",
  },
  {
    icon: CircleHelp,
    title: "正解がわからず、手探り状態",
    description:
      "「何が悪いのか」「次はどうすべきか」。明確な答えが出ないまま場当たり的な運用をして、成果が伸び悩んでいませんか？",
    image: "/images/problem-slow.png",
  },
  {
    icon: SlidersHorizontal,
    title: "設定作業に追われる日々",
    description:
      "クリエイティブの入稿や予算調整。煩雑な作業に時間を取られ、本質的な戦略やアイディアを考える時間を確保できていますか？",
    image: "/images/problem-overwork.png",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            SNS広告運用、こんな「壁」を感じていませんか？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto flex flex-col gap-3">
            理解できない複雑な管理画面、キャンペーン・広告グループなど専門知識の壁、設定した項目って本当に妥当で効果が出るのか...
            <br />
            <span className="font-semibold text-sky-600 -mx-2">
              その「難しさ」と「不安」すべて引き受けます。
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors overflow-hidden h-full"
            >
              {/* 背景挿絵 */}
              <div className="absolute inset-0">
                <Image
                  src={problem.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-slate-50/80" />
              {/* コンテンツ */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] flex items-center">
                  {problem.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-1">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

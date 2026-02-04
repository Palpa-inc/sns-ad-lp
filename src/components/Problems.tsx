"use client";

import Image from "next/image";
import { LayoutGrid, CircleHelp, SlidersHorizontal } from "lucide-react";

const problems = [
  {
    icon: LayoutGrid,
    title: "管理画面が複雑すぎる",
    description:
      "Meta、Google、TikTok... 媒体ごとに異なる仕様や指標を覚えるだけで手一杯になっていませんか？",
    highlight: "複雑すぎる操作",
    image: "/images/problem-cost.png",
  },
  {
    icon: CircleHelp,
    title: "正解がわからず、手探り状態",
    description:
      "「何が悪いのか」「次はどうすべきか」。プロの知見がないまま運用し、成果が伸び悩んでいませんか？",
    highlight: "知見不足",
    image: "/images/problem-slow.png",
  },
  {
    icon: SlidersHorizontal,
    title: "設定作業に追われる日々",
    description:
      "クリエイティブの入稿や予算調整。煩雑な作業に時間を取られ、本来の戦略を考える時間がありません。",
    highlight: "戦略に集中できない",
    image: "/images/problem-overwork.png",
  },
];

export default function Problems() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            広告運用、こんな「壁」を感じていませんか？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            管理画面の複雑さ、専門知識の壁、終わらない作業…
            <br />
            <span className="font-semibold text-sky-600">
              その「難しさ」、AIがすべて引き受けます。
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
                <p className="text-slate-600 mb-4 flex-1">{problem.description}</p>
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {problem.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

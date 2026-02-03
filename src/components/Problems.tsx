"use client";

import Image from "next/image";
import { Banknote, Clock, Laptop } from "lucide-react";

const problems = [
  {
    icon: Banknote,
    title: "代理店への依頼、高くないですか？",
    description:
      "月額広告費の20%。100万円の運用で毎月20万円の手数料。",
    highlight: "年間240万円",
    image: "/images/problem-cost.png",
  },
  {
    icon: Clock,
    title: "代理店の対応、遅くないですか？",
    description:
      "「確認して折り返します」から翌営業日。その間にCPAは上がり続ける。",
    highlight: "機会損失",
    image: "/images/problem-slow.png",
  },
  {
    icon: Laptop,
    title: "自社運用、大変すぎませんか？",
    description:
      "3つの管理画面を行き来して、週15時間。本来の業務ができない。",
    highlight: "週15時間",
    image: "/images/problem-overwork.png",
  },
];

export default function Problems() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            広告運用、こんな状況になっていませんか？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            代理店に任せると高い。自分でやると時間がかかる。
            <br />
            <span className="font-semibold text-sky-600">
              その課題、AIで解決できます。
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors overflow-hidden"
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
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-600 mb-4">{problem.description}</p>
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
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

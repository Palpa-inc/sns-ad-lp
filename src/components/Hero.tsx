"use client";

import { ChevronRight, ShieldCheck } from "lucide-react";
import Dashboard from "./MockUI/Dashboard";
import SlackNotification from "./MockUI/SlackNotification";
import NaturalLanguageInput from "./MockUI/NaturalLanguageInput";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:py-20">
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
              SNS広告運用は、もう
              <br />
              <span className="text-sky-500">「AIに話しかけるだけ」。</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              複雑な管理画面や専門知識は不要。
              <br />
              あなたの「こうしたい」を伝えるだけで、AIが
              <span className="font-semibold text-slate-900">代理店トップレベル</span>
              の運用・最適化を実行します。
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
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                難しい設定は一切不要
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                既存アカウントを連携するだけ
              </div>
            </div>
          </div>

          {/* Right: MockUI Preview */}
          {/* Mobile: Marquee infinite scroll */}
          <div className="lg:hidden -mx-4 pb-8 overflow-hidden">
            <div className="h-[520px]">
              <div className="h-full flex items-start animate-marquee gap-6 px-4">
                {/* First set */}
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <Dashboard />
                </div>
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <SlackNotification />
                </div>
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <NaturalLanguageInput />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <Dashboard />
                </div>
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <SlackNotification />
                </div>
                <div className="flex-shrink-0 w-[84vw] max-w-[340px] origin-top scale-[0.92]">
                  <NaturalLanguageInput />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Fan Layout */}
          <div className="hidden lg:block relative h-[600px] group cursor-pointer mt-12">
            {/* Back layer - NaturalLanguageInput (tilted right) */}
            <div
              className="absolute top-0 w-full transition-all duration-150 ease-out
                         rotate-[10deg] translate-x-[2%]
                         group-hover:rotate-0 group-hover:translate-x-0 group-hover:top-8"
              style={{ zIndex: 1 }}
            >
              <NaturalLanguageInput />
            </div>

            {/* Middle layer - SlackNotification (straight - center) */}
            <div
              className="absolute top-24 w-full transition-all duration-150 ease-out
                         group-hover:scale-97"
              style={{ zIndex: 2 }}
            >
              <SlackNotification />
            </div>

            {/* Front layer - Dashboard (tilted left) */}
            <div
              className="absolute top-64 w-full transition-all duration-150 ease-out
                         -rotate-[8deg] translate-x-1
                         shadow-2xl shadow-slate-300/50
                         group-hover:rotate-0 group-hover:translate-x-0 group-hover:top-50 group-hover:scale-95 group-hover:shadow-xl"
              style={{ zIndex: 3 }}
            >
              <Dashboard />
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

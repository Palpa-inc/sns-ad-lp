"use client";

import { useEffect, useRef, useState } from "react";
import TypeIt from "typeit";
import Image from "next/image";
import {
  ArrowRight,
  Coins,
  MessageSquare,
  Sparkles,
  Target,
  TriangleAlert,
} from "lucide-react";

const PROMPT_SCENARIOS = [
  {
    prompt: "TikTokの予算を5万円増やして",
    summary: "了解しました。TikTokの配信を強化します。",
    statusLabel: "予算拡張プラン",
    changeLabel: "TikTok広告 日予算",
    changeValue: "¥15,000 → ¥20,000",
    impactLabel: "月間予算への影響",
    impactValue: "+¥150,000",
    impactToneClass: "text-sky-600",
    responseClass: "bg-sky-50 border-sky-100",
    botBadgeClass: "bg-sky-100",
    botIconClass: "text-sky-600",
    changeCardClass: "bg-white border-sky-100",
    primaryButtonClass: "bg-sky-500 text-white hover:bg-sky-600",
    secondaryButtonClass: "bg-sky-100 text-sky-700 hover:bg-sky-200",
    primaryAction: "確認して実行",
  },
  {
    prompt: "CPAが高い広告セットを停止して",
    summary: "高CPAの広告セット候補を抽出しました。",
    statusLabel: "停止候補レビュー",
    changeLabel: "停止候補",
    changeValue: "3件（過去7日で目標比+25%以上）",
    impactLabel: "見込みCPA改善",
    impactValue: "-18%",
    impactToneClass: "text-emerald-600",
    responseClass: "bg-amber-50 border-amber-100",
    botBadgeClass: "bg-amber-100",
    botIconClass: "text-amber-700",
    changeCardClass: "bg-white border-amber-100",
    primaryButtonClass: "bg-amber-500 text-white hover:bg-amber-600",
    secondaryButtonClass: "bg-amber-100 text-amber-700 hover:bg-amber-200",
    primaryAction: "停止候補を確認",
  },
  {
    prompt: "Metaの類似1%へ2万円を再配分して",
    summary: "予算を成果の高いセグメントへ再配分します。",
    statusLabel: "再配分プラン",
    changeLabel: "予算移動",
    changeValue: "低効率配信 → 類似1%へ +¥20,000",
    impactLabel: "見込み追加CV",
    impactValue: "+22件 / 月",
    impactToneClass: "text-sky-600",
    responseClass: "bg-emerald-50 border-emerald-100",
    botBadgeClass: "bg-emerald-100",
    botIconClass: "text-emerald-700",
    changeCardClass: "bg-white border-emerald-100",
    primaryButtonClass: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondaryButtonClass:
      "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    primaryAction: "再配分を実行",
  },
];

export default function NaturalLanguageInput() {
  const typeTargetRef = useRef<HTMLSpanElement>(null);
  const outputTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [displayedScenarioIndex, setDisplayedScenarioIndex] = useState(0);
  const [isLoadingOutput, setIsLoadingOutput] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const displayedScenario = PROMPT_SCENARIOS[displayedScenarioIndex];
  const showResponseShell = isLoadingOutput || isOutputVisible;

  useEffect(() => {
    if (!typeTargetRef.current) {
      return;
    }

    const clearOutputTimer = () => {
      if (outputTimerRef.current) {
        clearTimeout(outputTimerRef.current);
        outputTimerRef.current = null;
      }
    };

    const typewriterPrompts = PROMPT_SCENARIOS.map(
      (scenario) => scenario.prompt,
    );
    typeTargetRef.current.textContent = "";

    const typeIt = new TypeIt(typeTargetRef.current, {
      strings: typewriterPrompts,
      speed: 52,
      deleteSpeed: 28,
      breakLines: false,
      nextStringDelay: [3600, 280],
      loopDelay: [280, 3600],
      loop: true,
      cursor: true,
      cursorChar: "|",
      beforeString: () => {
        clearOutputTimer();
        setIsLoadingOutput(false);
        setIsOutputVisible(false);
      },
      afterString: (prompt: string) => {
        const scenarioIndex = PROMPT_SCENARIOS.findIndex(
          (scenario) => scenario.prompt === prompt,
        );
        if (scenarioIndex < 0) {
          return;
        }
        setDisplayedScenarioIndex(scenarioIndex);
        clearOutputTimer();
        setIsLoadingOutput(true);
        outputTimerRef.current = setTimeout(() => {
          setIsLoadingOutput(false);
          setIsOutputVisible(true);
        }, 900);
      },
    }).go();

    return () => {
      clearOutputTimer();
      typeIt.destroy(true);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex items-center gap-2.5 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">AIに指示する</h3>
          <p className="text-[10px] sm:text-xs text-slate-500">自然言語で広告を操作</p>
        </div>
      </div>

      {/* Input area */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Input field */}
        <div className="relative">
          {/*<Sparkles className="w-4 h-4 text-sky-500 absolute left-4 top-1/2 -translate-y-1/2" />*/}
          <div
            aria-label="AIへの指示入力"
            className="w-full pl-2.5 sm:pl-3 pr-12 sm:pr-16 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm sm:text-base"
          >
            <span ref={typeTargetRef} className="text-slate-900" />
          </div>
          <button className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>
        </div>

        <p className="text-[10px] sm:text-xs text-slate-500">
          {isLoadingOutput
            ? "AIが提案を作成しています..."
            : isOutputVisible
              ? `AI提案を更新しました（${displayedScenario.statusLabel}）`
              : "AIが入力内容を解析しています..."}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-100 text-slate-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs">
            <Coins className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
            予算調整
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-100 text-slate-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs">
            <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
            入札最適化
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-100 text-slate-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs">
            <TriangleAlert className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
            異常アラート
          </span>
        </div>

        {/* AI Response */}
        <div
          className={`${displayedScenario.responseClass} rounded-xl p-3 sm:p-4 border min-h-[180px] sm:min-h-[214px] transition-all duration-300 ease-out ${
            showResponseShell
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${displayedScenario.botBadgeClass}`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden bg-white/90 ring-1 ring-white/80 shadow-sm">
                <Image
                  src="/images/chatbot.gif"
                  alt="ラクアド"
                  width={24}
                  height={24}
                  unoptimized
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-medium text-slate-900 text-sm sm:text-base">ラクアド</span>
                <Sparkles
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${displayedScenario.botIconClass}`}
                />
              </div>

              <div className="relative min-h-[130px] sm:min-h-[158px] mt-2.5 sm:mt-3">
                <div
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    isLoadingOutput
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="w-full">
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 inline-flex items-center gap-2">
                      最適化プランを作成中...
                      <span className="ai-loading-dots" aria-label="loading">
                        <span />
                        <span />
                        <span />
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-out ${
                    isOutputVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 mb-2.5 sm:mb-3">
                    {displayedScenario.summary}
                  </p>

                  {/* Change preview */}
                  <div
                    className={`${displayedScenario.changeCardClass} rounded-lg p-2.5 sm:p-3 border space-y-1.5 sm:space-y-2`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-0.5 sm:gap-0">
                      <span className="text-slate-500">
                        {displayedScenario.changeLabel}
                      </span>
                      <span className="font-medium text-slate-900">
                        {displayedScenario.changeValue}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-slate-500">
                        {displayedScenario.impactLabel}
                      </span>
                      <span
                        className={`font-medium ${displayedScenario.impactToneClass}`}
                      >
                        {displayedScenario.impactValue}
                      </span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <button
                      className={`flex-1 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${displayedScenario.primaryButtonClass}`}
                    >
                      {displayedScenario.primaryAction}
                    </button>
                    <button
                      className={`flex-1 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${displayedScenario.secondaryButtonClass}`}
                    >
                      キャンセル
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

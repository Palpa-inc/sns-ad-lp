"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, BarChart2, Lightbulb, Play, Search } from "lucide-react";
import Image from "next/image";

export default function SlackNotification() {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    let cycleTimer: ReturnType<typeof setTimeout> | null = null;
    let stepTimers: ReturnType<typeof setTimeout>[] = [];

    const clearStepTimers = () => {
      stepTimers.forEach((timer) => clearTimeout(timer));
      stepTimers = [];
    };

    const runSequence = () => {
      clearStepTimers();
      setVisibleStep(0);
      [180, 520, 900, 1240].forEach((delay, index) => {
        const timer = setTimeout(() => setVisibleStep(index + 1), delay);
        stepTimers.push(timer);
      });
      cycleTimer = setTimeout(runSequence, 4200);
    };

    runSequence();

    return () => {
      if (cycleTimer) {
        clearTimeout(cycleTimer);
      }
      clearStepTimers();
    };
  }, []);

  const revealClass = (step: number) =>
    `transition-all duration-300 ease-out ${
      visibleStep >= step
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Slack-like header */}
      <div className="bg-[#4A154B] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <Image
            src="/images/slack.svg"
            alt="Slack"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
        <span className="text-white font-medium text-sm">
          #広告運用アラート
        </span>
        <span className="text-purple-200 text-xs ml-auto">14:32</span>
      </div>

      {/* Message content */}
      <div className="p-4 space-y-4">
        {/* Bot info */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-sky-100 border border-sky-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-7 h-7 rounded-md overflow-hidden bg-white/90 ring-1 ring-white/80 shadow-sm">
              <Image
                src="/images/chatbot.gif"
                alt="AdPilot AI"
                width={28}
                height={28}
                unoptimized
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">AdPilot AI</span>
              <span className="bg-sky-100 text-sky-700 text-xs px-2 py-0.5 rounded font-medium">
                APP
              </span>
              <span className="text-slate-400 text-xs">14:32</span>
            </div>

            <div className={`mt-3 ${revealClass(1)}`}>
              <div className="bg-slate-100 text-slate-700 text-sm px-3 py-2 rounded-lg">
                CPA悪化を検知したため、原因候補を共有します。
              </div>
            </div>

            {/* Alert card */}
            <div className={`mt-3 ${revealClass(2)}`}>
              <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-800">異常検知</span>
                </div>
                <p className="text-amber-700 text-sm">
                  Meta広告のCPAが20%上昇しています
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-amber-700">
                  <BarChart2 className="w-4 h-4" />
                  <span>
                    現在: <strong>¥2,800</strong> → 目標: ¥2,300
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendation card */}
            <div className={`mt-3 ${revealClass(3)}`}>
              <div className="border-l-4 border-sky-400 bg-sky-50 rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-sky-600" />
                  <span className="font-semibold text-sky-800">推奨アクション</span>
                </div>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• 効率の悪いクリエイティブを停止</li>
                  <li>• オーディエンス「類似1%」の予算を増額</li>
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className={`mt-4 ${revealClass(4)}`}>
              <div className="flex gap-2">
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors inline-flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" />
                  実行する
                </button>
                <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  詳細を見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

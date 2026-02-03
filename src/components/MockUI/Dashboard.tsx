"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

const DASHBOARD_SNAPSHOTS = [
  {
    spend: 82,
    cpa: "¥2,340",
    cpaTrend: "-12%",
    roas: "4.2x",
    roasTrend: "+8%",
    cv: "128",
    cvTrend: "+15%",
    updatedAt: "5分前",
  },
  {
    spend: 79,
    cpa: "¥2,210",
    cpaTrend: "-6%",
    roas: "4.4x",
    roasTrend: "+12%",
    cv: "131",
    cvTrend: "+18%",
    updatedAt: "たった今",
  },
  {
    spend: 84,
    cpa: "¥2,120",
    cpaTrend: "-4%",
    roas: "4.6x",
    roasTrend: "+5%",
    cv: "136",
    cvTrend: "+9%",
    updatedAt: "1分前",
  },
];

export default function Dashboard() {
  const [snapshotIndex, setSnapshotIndex] = useState(0);
  const [activeChannel, setActiveChannel] = useState<"meta" | "google">("meta");

  useEffect(() => {
    const snapshotTimer = setInterval(() => {
      setSnapshotIndex((prev) => (prev + 1) % DASHBOARD_SNAPSHOTS.length);
    }, 2600);
    const channelTimer = setInterval(() => {
      setActiveChannel((prev) => (prev === "meta" ? "google" : "meta"));
    }, 1500);

    return () => {
      clearInterval(snapshotTimer);
      clearInterval(channelTimer);
    };
  }, []);

  const current = DASHBOARD_SNAPSHOTS[snapshotIndex];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 space-y-3 sm:space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-100">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-500 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">今週のパフォーマンス</h3>
          <p className="text-xs sm:text-sm text-slate-500">2024年1月15日〜21日</p>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-1.5 sm:mb-2">
          <span className="text-xs sm:text-sm text-slate-600">費用消化</span>
          <span className="text-xs sm:text-sm font-semibold text-slate-900 tabular-nums">{current.spend}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 sm:h-3">
          <div
            className="bg-gradient-to-r from-sky-400 to-sky-500 h-2.5 sm:h-3 rounded-full transition-all duration-500"
            style={{ width: `${current.spend}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="bg-slate-50 rounded-xl p-2.5 sm:p-4">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">CPA</p>
          <p className="text-base sm:text-xl font-bold text-slate-900 tabular-nums transition-all duration-500">{current.cpa}</p>
          <div className="flex items-center gap-1 text-emerald-600 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
            <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="tabular-nums">{current.cpaTrend}</span>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-2.5 sm:p-4">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">ROAS</p>
          <p className="text-base sm:text-xl font-bold text-slate-900 tabular-nums transition-all duration-500">{current.roas}</p>
          <div className="flex items-center gap-1 text-emerald-600 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="tabular-nums">{current.roasTrend}</span>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-2.5 sm:p-4">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">CV数</p>
          <p className="text-base sm:text-xl font-bold text-slate-900 tabular-nums transition-all duration-500">{current.cv}</p>
          <div className="flex items-center gap-1 text-emerald-600 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="tabular-nums">{current.cvTrend}</span>
          </div>
        </div>
      </div>

      {/* Status indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-3 sm:pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Image
              src="/images/meta.svg"
              alt="Meta"
              width={14}
              height={14}
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
            />
            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${activeChannel === "meta" ? "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)] sm:shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" : "bg-slate-300"}`}></span>
            <span className="text-[10px] sm:text-xs text-slate-600">Meta</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Image
              src="/images/google-ads.svg"
              alt="Google Ads"
              width={14}
              height={14}
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
            />
            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${activeChannel === "google" ? "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)] sm:shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" : "bg-slate-300"}`}></span>
            <span className="text-[10px] sm:text-xs text-slate-600">Google</span>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400">更新: {current.updatedAt}</span>
      </div>
    </div>
  );
}

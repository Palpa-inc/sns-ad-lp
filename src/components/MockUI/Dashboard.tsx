"use client";

import { BarChart3, TrendingDown, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">今週のパフォーマンス</h3>
          <p className="text-sm text-slate-500">2024年1月15日〜21日</p>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-600">費用消化</span>
          <span className="text-sm font-semibold text-slate-900 tabular-nums">82%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-sky-400 to-sky-500 h-3 rounded-full transition-all duration-500"
            style={{ width: "82%" }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1">CPA</p>
          <p className="text-xl font-bold text-slate-900 tabular-nums">¥2,340</p>
          <div className="flex items-center gap-1 text-emerald-600 text-xs mt-1">
            <TrendingDown className="w-3 h-3" />
            <span>-12%</span>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1">ROAS</p>
          <p className="text-xl font-bold text-slate-900 tabular-nums">4.2x</p>
          <div className="flex items-center gap-1 text-emerald-600 text-xs mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>+8%</span>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1">CV数</p>
          <p className="text-xl font-bold text-slate-900 tabular-nums">128</p>
          <div className="flex items-center gap-1 text-emerald-600 text-xs mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>+15%</span>
          </div>
        </div>
      </div>

      {/* Status indicators */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-xs text-slate-600">Meta広告</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-xs text-slate-600">Google広告</span>
          </div>
        </div>
        <span className="text-xs text-slate-400">最終更新: 5分前</span>
      </div>
    </div>
  );
}

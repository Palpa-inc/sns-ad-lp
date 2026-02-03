"use client";

import { ArrowRight, Bot, MessageSquare, Sparkles } from "lucide-react";

export default function NaturalLanguageInput() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">AIに指示する</h3>
          <p className="text-xs text-slate-500">自然言語で広告を操作</p>
        </div>
      </div>

      {/* Input area */}
      <div className="p-6 space-y-4">
        {/* Input field */}
        <div className="relative">
          <input
            type="text"
            placeholder="例: TikTokの予算を5万円増やして"
            defaultValue="TikTokの予算を5万円増やして"
            className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            readOnly
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* AI Response */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-sky-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-slate-900">AdPilot AI</span>
                <Sparkles className="w-3 h-3 text-sky-500" />
              </div>
              <p className="text-sm text-slate-600 mb-3">
                了解しました。以下の変更を実行します：
              </p>

              {/* Change preview */}
              <div className="bg-white rounded-lg p-3 border border-slate-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">TikTok広告 日予算</span>
                  <span className="font-medium text-slate-900">
                    ¥15,000 → ¥20,000
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">月間予算への影響</span>
                  <span className="font-medium text-sky-600">+¥150,000</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-sky-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors">
                  確認して実行
                </button>
                <button className="flex-1 bg-slate-100 text-slate-600 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

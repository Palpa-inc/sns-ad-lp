"use client";

import Dashboard from "./MockUI/Dashboard";
import SlackNotification from "./MockUI/SlackNotification";
import NaturalLanguageInput from "./MockUI/NaturalLanguageInput";

export default function ServiceImage() {
  return (
    <section id="service" className="scroll-mt-24 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            サービス
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            直感的なダッシュボード、リアルタイム通知、
            <br />
            自然言語での操作を実現します。
          </p>
        </div>

        <div className="space-y-20">
          {/* Dashboard Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ダッシュボード
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                一目で分かるパフォーマンス
              </h3>
              <p className="text-slate-600 mb-6">
                費用消化率、CPA、ROAS、CV数など、重要な指標をリアルタイムで確認。
                複数の管理画面を行き来する必要はもうありません。
              </p>
              <ul className="space-y-3">
                {[
                  "Meta・Google広告を一元管理",
                  "リアルタイムでデータを更新",
                  "前週比で改善・悪化を可視化",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-sky-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Dashboard />
            </div>
          </div>

          {/* Slack Notification Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SlackNotification />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                リアルタイム通知
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                異常をすぐにキャッチ
              </h3>
              <p className="text-slate-600 mb-6">
                CPAの急騰、予算の急消化、パフォーマンスの低下を即座に検知。
                Slackに通知が届くので、管理画面を開く必要はありません。
              </p>
              <ul className="space-y-3">
                {[
                  "異常検知から数分で通知",
                  "原因と推奨アクションを提示",
                  "ワンクリックで対応可能",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-amber-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Natural Language Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                自然言語操作
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                話しかけるように指示
              </h3>
              <p className="text-slate-600 mb-6">
                「TikTokの予算を増やして」「CPAが高いクリエイティブを停止して」
                ─ 複雑な管理画面の操作は不要。AIが理解して実行します。
              </p>
              <ul className="space-y-3">
                {[
                  "日本語で自然に指示",
                  "変更内容を確認してから実行",
                  "操作履歴も自動で記録",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <NaturalLanguageInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

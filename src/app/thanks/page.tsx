"use client";

import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            ご登録ありがとうございます！
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            先行登録が完了しました。
          </p>
          <p className="text-slate-500">
            正式リリース時に、ご登録いただいたメールアドレスへ
            <br />
            優先的にご案内をお送りします。
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-4">
            先行登録特典
          </h2>
          <div className="bg-sky-50 rounded-xl p-4">
            <p className="text-sky-700 font-medium">
              正式リリース時
              <span className="text-2xl font-bold mx-2">50% OFF</span>
              でご利用いただけます
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

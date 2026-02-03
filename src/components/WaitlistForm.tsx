"use client";

import { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WaitlistForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    name: "",
    adBudget: "",
    currentSetup: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thanks");
      } else {
        alert("登録に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              まずは先行登録から
            </h2>
            <p className="text-lg text-slate-600">
              正式リリース時に優先的にご案内します。
              <br />
              <span className="text-sky-600 font-semibold">
                先行登録特典: 50% OFF
              </span>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="株式会社○○"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              {/* Ad Budget */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  月額広告費
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "under50", label: "50万円未満" },
                    { value: "50to100", label: "50〜100万円" },
                    { value: "100to300", label: "100〜300万円" },
                    { value: "over300", label: "300万円以上" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, adBudget: option.value })
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.adBudget === option.value
                          ? "bg-sky-500 text-white"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Setup */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  現在の運用体制
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "inhouse", label: "自社運用" },
                    { value: "agency", label: "代理店委託" },
                    { value: "both", label: "両方" },
                    { value: "starting", label: "これから始める" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, currentSetup: option.value })
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.currentSetup === option.value
                          ? "bg-sky-500 text-white"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cta-button py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    無料で先行登録する
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              ご登録いただいた情報は、サービスのご案内以外には使用しません。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

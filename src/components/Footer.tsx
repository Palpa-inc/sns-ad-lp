import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">ラ</span>
            </div>
            <span className="text-white font-semibold text-lg">
              ラクアド
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/terms" className="hover:text-white transition-colors">
              利用規約
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              プライバシーポリシー
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
            <a href="#" className="hover:text-white transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ラクアド. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

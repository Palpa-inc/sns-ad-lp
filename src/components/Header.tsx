"use client";

import { useState } from "react";
import { BarChart3, Menu, X } from "lucide-react";

const navLinks = [
  { label: "サービス", href: "#service" },
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">AdPilot AI</span>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav className="flex items-center gap-4 lg:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <button
              onClick={scrollToForm}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 lg:px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              無料で先行登録
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <hr className="border-slate-200" />
          <button
            onClick={scrollToForm}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            無料で先行登録
          </button>
        </div>
      </div>
    </header>
  );
}

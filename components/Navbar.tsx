'use client';

import { useState } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070b1a]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#hero"
          className="group flex items-center gap-3 whitespace-nowrap text-lg sm:text-xl font-bold tracking-tight text-white transition-opacity shrink-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-600 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-l from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
            آکادمی شهزاد قنبری
          </span>
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#hero"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            خانه
          </a>
          <a
            href="#courses"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            دوره‌ها
          </a>
          <a
            href="#about"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            درباره ما
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            تماس با ما
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent px-5 py-2.5 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap shrink-0"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>مشاوره و ثبت‌نام</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="باز کردن منو"
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#080d24] px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
            >
              خانه
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
            >
              دوره‌ها
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
            >
              درباره ما
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
            >
              تماس با ما
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20"
            >
              <PhoneCall className="h-4 w-4" />
              <span>مشاوره و ثبت‌نام</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

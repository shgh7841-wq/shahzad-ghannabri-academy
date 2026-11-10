import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#040711] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & short description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 shadow-sm shadow-cyan-500/20">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                آکادمی هوش مصنوعی شهزاد قنبری
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              مرجع تخصصی آموزش هوش مصنوعی، برنامه‌نویسی پایتون و ابزارهای نوین عصر دیجیتال با رویکرد توانمندسازی و ورود به بازار کار.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              خانه
            </a>
            <a href="#courses" className="hover:text-cyan-300 transition-colors">
              دوره‌ها
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              درباره ما
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              تماس با ما
            </a>
          </nav>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-right">
          <p>© ۱۴۰۳ کلیه حقوق این وبسایت محفوظ و متعلق به آکادمی شهزاد قنبری است.</p>
          <p className="text-[11px] text-slate-400">
            طراحی شده با مدرن‌ترین استانداردهای وب و فناوری‌های هوشمند
          </p>
        </div>
      </div>
    </footer>
  );
}

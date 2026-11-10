import Link from 'next/link';
import { Brain, Cpu, Sparkles } from 'lucide-react';

export default function Home() {
  const courses = [
    {
      id: 1,
      title: 'مبانی هوش مصنوعی',
      description:
        'آشنایی با مفاهیم بنیادین هوش مصنوعی، الگوریتم‌های هوشمند و ساختار داده‌ها با تمرکز بر کاربردهای نوین.',
      level: 'دوره مقدماتی',
      duration: '۴۰ ساعت آموزش',
      icon: Brain,
      tagColor: 'bg-blue-900/60 text-blue-300 border-blue-700/50',
    },
    {
      id: 2,
      title: 'یادگیری ماشین و شبکه‌های عصبی',
      description:
        'آموزش جامع مدل‌های یادگیری نظارت‌شده، یادگیری عمیق و پیاده‌سازی پروژه‌های پردازش تصویر و داده.',
      level: 'دوره تخصصی',
      duration: '۶۰ ساعت آموزش',
      icon: Cpu,
      tagColor: 'bg-indigo-900/60 text-indigo-300 border-indigo-700/50',
    },
    {
      id: 3,
      title: 'هوش مصنوعی مولد و ابزارهای نوین',
      description:
        'تسلط بر مدل‌های زبانی بزرگ (LLM)، مهندسی پرامپت و استفاده کاربردی از ابزارهای هوش مصنوعی در بازار کار.',
      level: 'دوره پیشرفته',
      duration: '۳۰ ساعت آموزش',
      icon: Sparkles,
      tagColor: 'bg-cyan-900/60 text-cyan-300 border-cyan-700/50',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col justify-between p-6 sm:p-10 md:p-16">
      {/* منوی بالای سایت و هدر */}
      <header className="max-w-6xl mx-auto w-full pb-8 border-b border-slate-800/80">
        <nav className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/50">
          <Link
            href="/"
            className="text-lg font-bold text-white hover:text-cyan-400 transition-colors"
          >
            آکادمی شهزاد قنبری
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/courses"
              className="text-slate-300 hover:text-cyan-300 transition-colors pb-1"
            >
              دوره‌های آموزشی
            </Link>
            <Link
              href="/instructor"
              className="text-slate-300 hover:text-cyan-300 transition-colors pb-1"
            >
              مدرس
            </Link>
            <Link
              href="/articles"
              className="text-slate-300 hover:text-cyan-300 transition-colors pb-1"
            >
              مقالات
            </Link>
          </div>
        </nav>

        <div className="text-center">
          <p className="text-sm md:text-base font-medium tracking-wide text-cyan-400 mb-2">
            مرکز تخصصی آموزش علوم داده و فناوری‌های نوین
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            آکادمی شهزاد قنبری
          </h1>
        </div>
      </header>

      {/* بخش اصلی با عنوان هوش مصنوعی */}
      <section className="max-w-6xl mx-auto w-full py-12 md:py-16 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/70 border border-slate-700 text-xs text-slate-300 mb-4 font-medium">
          آموزش تخصصی و مهارت‌محور
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 mb-6">
          هوش مصنوعی
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
          یادگیری گام به گام و استاندارد فناوری‌های هوش مصنوعی با متدهای به‌روز، متناسب با نیاز بازار کار و پیشرفت علمی.
        </p>
      </section>

      {/* سه کارت آموزشی */}
      <section className="max-w-6xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-[#112240] border border-slate-700/60 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${course.tagColor}`}
                    >
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>مدت زمان:</span>
                  <span className="font-medium text-slate-200">
                    {course.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* پاورقی بسیار ساده */}
      <footer className="max-w-6xl mx-auto w-full text-center pt-8 border-t border-slate-800/80 text-xs text-slate-400">
        <p>© تمام حقوق برای آکادمی شهزاد قنبری محفوظ است.</p>
      </footer>
    </main>
  );
}

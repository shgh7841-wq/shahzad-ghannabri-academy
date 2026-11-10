'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bot, Code2, Globe2, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const coursesList = [
    {
      id: 'ai',
      title: 'آموزش هوش مصنوعی',
      description: 'یادگیری کاربردی ابزارهای هوش مصنوعی و پرامپت‌نویسی.',
      icon: Bot,
      level: 'کاربردی و پروژه‌محور',
      tagColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60',
      iconBg: 'bg-cyan-950/70 border-cyan-800/60 text-cyan-400',
      buttonBg: 'bg-cyan-600 hover:bg-cyan-500 text-slate-950',
    },
    {
      id: 'programming',
      title: 'آموزش برنامه‌نویسی',
      description: 'یادگیری مهارت‌های برنامه‌نویسی و توسعه نرم‌افزار.',
      icon: Code2,
      level: 'از پایه تا بازار کار',
      tagColor: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
      iconBg: 'bg-blue-950/70 border-blue-800/60 text-blue-400',
      buttonBg: 'bg-blue-600 hover:bg-blue-500 text-white',
    },
    {
      id: 'digital-skills',
      title: 'مهارت‌های دیجیتال',
      description: 'آموزش مهارت‌های کاربردی دنیای فناوری.',
      icon: Globe2,
      level: 'مهارت‌های مدرن',
      tagColor: 'bg-sky-950/80 text-sky-300 border-sky-700/60',
      iconBg: 'bg-sky-950/70 border-sky-800/60 text-sky-400',
      buttonBg: 'bg-sky-600 hover:bg-sky-500 text-white',
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
              className="text-slate-300 hover:text-cyan-300 transition-colors pb-1"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/courses"
              className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
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
            مسیرهای یادگیری تخصصی
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            دوره‌های آموزشی
          </h1>
        </div>
      </header>

      {/* بخش معرفی صفحه دوره‌ها */}
      <section className="max-w-6xl mx-auto w-full py-10 md:py-14 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/70 border border-slate-700 text-xs text-slate-300 mb-4 font-medium">
          فهرست دوره‌های جامع
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 mb-5">
          دوره‌های آموزشی آکادمی
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
          دوره‌های طراحی‌شده بر مبنای آخرین دستاوردهای فناوری برای ورود موفق به بازار کار و ارتقای مهارت‌های فردی.
        </p>
      </section>

      {/* سه کارت آموزشی */}
      <section className="max-w-6xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coursesList.map((course) => {
            const IconComp = course.icon;
            return (
              <div
                key={course.id}
                className="bg-[#112240] border border-slate-700/60 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${course.iconBg}`}
                    >
                      <IconComp className="w-6 h-6" />
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

                <div className="pt-6 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCourse(
                        selectedCourse === course.id ? null : course.id
                      )
                    }
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${course.buttonBg}`}
                  >
                    <span>مشاهده دوره</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  {selectedCourse === course.id && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs text-cyan-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>سرفصل‌های دوره «{course.title}» به زودی در دسترس خواهد بود.</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* پاورقی ساده */}
      <footer className="max-w-6xl mx-auto w-full text-center pt-8 border-t border-slate-800/80 text-xs text-slate-400">
        <p>© تمام حقوق برای آکادمی شهزاد قنبری محفوظ است.</p>
      </footer>
    </main>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock, Calendar, ArrowLeft, Tag } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articles-data';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');

  const categories = ['همه', 'هوش مصنوعی', 'آموزش کاربردی', 'ابزارهای هوش مصنوعی'];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'همه' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
              className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
            >
              مقالات
            </Link>
          </div>
        </nav>

        <div className="text-center">
          <p className="text-sm md:text-base font-medium tracking-wide text-cyan-400 mb-2">
            مرکز دانش و مقالات تخصصی
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            دانشنامه هوش مصنوعی آکادمی
          </h1>
        </div>
      </header>

      {/* بخش عنوان و زیرعنوان */}
      <section className="max-w-6xl mx-auto w-full py-10 md:py-14 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/70 border border-slate-700 text-xs text-slate-300 mb-4 font-medium">
          آموزش‌ها و مقالات به‌روز
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 mb-4">
          دانشنامه هوش مصنوعی آکادمی
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
          با جدیدترین آموزشها و مقالات هوش مصنوعی همراه شوید.
        </p>

        {/* کادر جستجوی ساده و فیلتر دسته‌بندی */}
        <div className="mt-8 max-w-2xl mx-auto">
          {/* اینپوت سرچ */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در عنوان یا متن مقالات..."
              className="w-full bg-[#112240] border border-slate-700/80 focus:border-cyan-400 text-slate-100 placeholder-slate-400 py-3.5 pr-12 pl-4 rounded-2xl text-sm focus:outline-none transition-all shadow-md focus:shadow-cyan-900/30"
            />
            <Search className="w-5 h-5 text-cyan-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                پاک کردن
              </button>
            )}
          </div>

          {/* تب‌های فیلتر دسته‌بندی */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-900/50 font-semibold'
                    : 'bg-[#112240] text-slate-300 border border-slate-700/60 hover:border-slate-500 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* لیست کارت‌های مقالات با افکت hover نرم */}
      <section className="max-w-6xl mx-auto w-full mb-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#112240]/40 rounded-3xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-300 mb-1">
              مقاله‌ای یافت نشد
            </h3>
            <p className="text-xs text-slate-400">
              لطفاً عبارت جستجو یا دسته‌بندی انتخابی را تغییر دهید.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-[#112240] border border-slate-700/60 hover:border-cyan-400/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/20 hover:shadow-cyan-950/40 relative overflow-hidden"
              >
                {/* هایلایت نئونی ملایم در بالای کارت هنگام هاور */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                <div>
                  {/* ردیف دسته‌بندی و زمان مطالعه */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-cyan-950/70 text-cyan-300 border-cyan-800/60 group-hover:border-cyan-500/70 transition-colors">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* عنوان مقاله */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* توضیح مقاله */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* فوتر کارت شامل تاریخ و دکمه مطالعه */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {article.publishDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:-translate-x-1 transition-all duration-200">
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* پاورقی هماهنگ */}
      <footer className="max-w-6xl mx-auto w-full text-center pt-8 border-t border-slate-800/80 text-xs text-slate-400">
        <p>© تمام حقوق برای آکادمی شهزاد قنبری محفوظ است.</p>
      </footer>
    </main>
  );
}

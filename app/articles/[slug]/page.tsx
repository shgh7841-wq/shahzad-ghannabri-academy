import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, Calendar, User, Tag, BookOpen, CheckCircle } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articles-data';

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col justify-between p-6 sm:p-10 md:p-16">
      {/* منوی بالای سایت و هدر */}
      <header className="max-w-4xl mx-auto w-full pb-8 border-b border-slate-800/80">
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

        {/* دکمه بازگشت به لیست مقالات */}
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span>بازگشت به دانشنامه مقالات</span>
          </Link>
        </div>
      </header>

      {/* بدنه مقاله */}
      <article className="max-w-4xl mx-auto w-full py-10 md:py-14">
        {/* متادیتا و مشخصات بالای مقاله */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-cyan-950/80 text-cyan-300 border-cyan-700/60">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            {article.title}
          </h1>

          {/* نویسنده */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#112240] border border-slate-700/60 text-xs sm:text-sm text-slate-300">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 font-bold shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">نویسنده: {article.author}</p>
              <p className="text-xs text-slate-400">مدرس و پژوهشگر هوش مصنوعی در آکادمی شهزاد قنبری</p>
            </div>
          </div>
        </div>

        {/* محتوای متنی مقاله */}
        <div className="bg-[#112240] border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/25">
          {/* مقدمه */}
          <div className="text-base sm:text-lg leading-relaxed text-slate-200 font-medium mb-8 p-5 rounded-2xl bg-[#0a192f]/70 border-r-4 border-cyan-400">
            {article.content.intro}
          </div>

          {/* بخش‌های مقاله */}
          <div className="space-y-8">
            {article.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {section.heading}
                </h2>
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* نتیجه‌گیری */}
          <div className="mt-10 pt-8 border-t border-slate-800">
            <h3 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              جمع‌بندی و نتیجه‌گیری
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#0a192f]/50 p-5 rounded-2xl border border-slate-800">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* راهنمای اقدام و رفتن به دوره‌ها یا سایر مقالات */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#112240] to-[#0d2247] border border-cyan-800/50">
          <div>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">
              علاقه‌مند به یادگیری عمیق‌تر هستید؟
            </h4>
            <p className="text-xs text-slate-300">
              دوره‌های تخصصی هوش مصنوعی آکادمی شهزاد قنبری را بررسی کنید.
            </p>
          </div>
          <Link
            href="/courses"
            className="w-full sm:w-auto text-center shrink-0 py-2.5 px-6 rounded-xl font-bold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            مشاهده دوره‌ها
          </Link>
        </div>
      </article>

      {/* پاورقی ساده */}
      <footer className="max-w-4xl mx-auto w-full text-center pt-8 border-t border-slate-800/80 text-xs text-slate-400">
        <p>© تمام حقوق برای آکادمی شهزاد قنبری محفوظ است.</p>
      </footer>
    </main>
  );
}

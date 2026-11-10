import Link from 'next/link';
import {
  User,
  Sparkles,
  Cpu,
  GraduationCap,
  Layers,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export default function InstructorPage() {
  const skills = [
    {
      id: 1,
      title: 'هوش مصنوعی',
      desc: 'یادگیری ماشین، شبکه‌های عصبی عمیق، مدل‌های زبانی بزرگ (LLM) و پرامپت‌نویسی پیشرفته.',
      icon: Cpu,
      color: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60',
    },
    {
      id: 2,
      title: 'فناوری‌های نوین',
      desc: 'روندهای مدرن تکنولوژی، اتوماسیون هوشمند، ابزارهای تحول دیجیتال و سامانه‌های نوین داده‌محور.',
      icon: Sparkles,
      color: 'text-sky-400 bg-sky-950/60 border-sky-800/60',
    },
    {
      id: 3,
      title: 'آموزش و تدریس تخصصی',
      desc: 'طراحی سرفصل‌های استاندارد، تدریس پروژه‌محور و انتقال مهارت‌های تخصصی به زبان ساده و کاربردی.',
      icon: GraduationCap,
      color: 'text-blue-400 bg-blue-950/60 border-blue-800/60',
    },
    {
      id: 4,
      title: 'مهارت‌های دیجیتال',
      desc: 'توسعه نرم‌افزار، تفکر الگوریتمی، سواد داده و بهینه‌سازی فرایندها در محیط‌های نوین کاری.',
      icon: Layers,
      color: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/60',
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
              className="text-slate-300 hover:text-cyan-300 transition-colors pb-1"
            >
              دوره‌های آموزشی
            </Link>
            <Link
              href="/instructor"
              className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
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
            معرفی اساتید و مربیان
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            درباره مدرس آکادمی
          </h1>
        </div>
      </header>

      {/* بخش اصلی معرفی مدرس */}
      <section className="max-w-6xl mx-auto w-full py-10 md:py-14">
        {/* کارت کلی معرفی مدرس شامل تصویر و بیوگرافی */}
        <div className="bg-[#112240] border border-slate-700/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-black/25 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* جایگاه تصویر مدرس (Placeholder) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-[#0d2247] to-[#0a192f] border-2 border-dashed border-cyan-500/50 flex flex-col items-center justify-center text-center p-6 shadow-inner relative group">
                <div className="w-20 h-20 rounded-full bg-cyan-950/80 border border-cyan-700/60 flex items-center justify-center text-cyan-400 mb-4 shadow-lg">
                  <User className="w-10 h-10" />
                </div>
                <span className="text-sm font-semibold text-slate-200 mb-1">
                  جایگاه تصویر مدرس
                </span>
                <span className="text-xs text-slate-400">
                  (قابل افزودن تصویر در مراحل بعدی)
                </span>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs text-cyan-300 font-medium">
                  مدرس و بنیان‌گذار آکادمی
                </span>
              </div>
            </div>

            {/* توضیحات و بیوگرافی */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="inline-block self-start px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 mb-3 font-medium">
                مشخصات و سوابق علمی
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                شهزاد قنبری
              </h2>
              <h3 className="text-lg text-cyan-400 font-medium mb-6">
                مدرس و پژوهشگر هوش مصنوعی، فناوری‌های نوین و مهارت‌های دیجیتال
              </h3>

              {/* متن معرفی به صورت نمونه و قابل ویرایش */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0a192f]/60 p-5 sm:p-6 rounded-2xl border border-slate-800">
                <p>
                  شهزاد قنبری با سال‌ها تجربه در آموزش علوم داده، هوش مصنوعی و پیاده‌سازی پروژه‌های کاربردی نرم‌افزاری، آکادمی را با هدف ارائه آموزش‌های عملی و متناسب با نیاز روز بازارهای بین‌المللی پایه‌گذاری کرده است.
                </p>
                <p>
                  رویکرد آموزشی او مبتنی بر انتقال مفاهیم پیچیده به زبانی رسا، کاربردی و پروژه‌محور است تا فراگیران بتوانند از سطح مقدماتی تا رسیدن به تسلط کامل بر فناوری‌های هوش مصنوعی و توسعه سیستم‌های مدرن پیش بروند.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>تمرکز بر پروژه‌های واقعی و کاربردی</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>به‌روزرسانی پیوسته محتوا مطابق استانداردهای روز</span>
                  </div>
                </div>
              </div>

              {/* دکمه مشاهده دوره‌های آموزشی */}
              <div className="mt-8">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-950/40 text-sm group"
                >
                  <span>مشاهده دوره‌های آموزشی</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* بخش حوزه‌های تخصصی */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              تخصص‌ها و حوزه‌های فعالیت
            </h3>
            <p className="text-sm text-slate-400">
              مجموعه مهارت‌ها و حوزه‌های تدریس و هدایت علمی در آکادمی
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="bg-[#112240] border border-slate-700/60 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${skill.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* پاورقی ساده و هماهنگ */}
      <footer className="max-w-6xl mx-auto w-full text-center pt-8 border-t border-slate-800/80 text-xs text-slate-400">
        <p>© تمام حقوق برای آکادمی شهزاد قنبری محفوظ است.</p>
      </footer>
    </main>
  );
}

'use client';

import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Target className="h-6 w-6 text-cyan-400" />,
      title: 'آموزش پروژه‌محور و کاربردی',
      desc: 'به جای مباحث صرفاً تئوری، بر پیاده‌سازی گام‌به‌گام سناریوهای واقعی و ابزارهای موردنیاز صنایع تمرکز داریم.'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: 'منتورینگ و همراهی پیوسته',
      desc: 'در تمام طول دوره، پاسخ‌گویی به سوالات، بررسی کُدها و رفع اشکال فردی تحت نظارت مستقیم مدرس انجام می‌شود.'
    },
    {
      icon: <Zap className="h-6 w-6 text-sky-400" />,
      title: 'به‌روزترین فناوری‌های روز دنیا',
      desc: 'سرفصل‌های آموزشی منطبق با آخرین تحولات هوش مصنوعی مولد، مدل‌های زبانی بزرگ و استانداردهای جهانی است.'
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      title: 'آمادگی برای ورود به بازار کار',
      desc: 'راهنمایی در ساخت پورتفولیو، رزومه‌نویسی حرفه‌ای و توسعه پروژه‌های نمونه برای فرصت‌های شغلی داخلی و دلاری.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#060915] border-t border-slate-900 overflow-hidden">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-900/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          
          {/* Text narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 text-right"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-2">
              <span>درباره آکادمی</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">دیدگاه و رسالت ما</span>
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl text-balance leading-snug">
              آکادمی شهزاد قنبری؛ پلی میان علم نوین داده و عملگرایی هوشمند
            </h2>

            <p className="mt-5 text-base text-slate-300 leading-relaxed">
              هوش مصنوعی دیگر فقط یک تخصص آکادمیک دور از دسترس نیست؛ بلکه موتور محرک تمامی صنایع، کسب‌وکارها و تصمیم‌گیری‌های فردی است.
            </p>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              آکادمی شهزاد قنبری با هدف شکستن موانع یادگیری و ایجاد یک تجربه ملموس، عمیق و کاربردی بنا شده است. هدف ما این است که هر دانش‌پژوه بتواند با اعتماد به نفس کامل، سیستم‌های هوشمند را درک کند، کُدنویسی کند و در کسب‌وکار یا حرفه شخصی خود به کار گیرد.
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#0a0f26]">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white text-lg shrink-0">
                ش‌ق
              </div>
              <div className="text-right">
                <h4 className="text-sm font-bold text-white">شهزاد قنبری</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  بنیان‌گذار و مدرس ارشد آکادمی هوش مصنوعی
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4 Feature highlight cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-800/90 bg-[#090e24] p-5 transition-all hover:border-slate-700 hover:bg-[#0c1433]"
              >
                <div className="mb-3.5 inline-flex rounded-xl bg-slate-900/90 p-2.5 border border-slate-800">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

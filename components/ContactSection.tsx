'use client';

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    courseInterest: 'ai-mastery',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant smooth local submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        courseInterest: 'ai-mastery',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#070b1a] border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Info side (5 cols) */}
          <div className="lg:col-span-5 text-right flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
                <span>ارتباط مستقیم و ثبت‌نام</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">مشاوره رایگان</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                آماده ورود به دنیای هوش مصنوعی هستید؟
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                اگر در انتخاب دوره مناسب یا شروع مسیر یادگیری سوالی دارید، کارشناسان آموزشی آکادمی شهزاد قنبری در کوتاه‌ترین زمان همراه شما خواهند بود.
              </p>

              {/* Direct channels */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0b1028] p-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">تماس تلفنی و پشتیبانی:</span>
                    <span className="text-sm font-semibold text-white font-mono" dir="ltr">
                      021 - 8899 4400
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0b1028] p-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">پست الکترونیکی آکادمی:</span>
                    <span className="text-sm font-semibold text-white font-mono" dir="ltr">
                      info@ghanbari-ai.ir
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0b1028] p-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">دفتر مرکزی و فضای برگزاری:</span>
                    <span className="text-sm font-semibold text-white">
                      تهران، خیابان ولیعصر، برج فناوری
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <span>ساعات پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸ · پنجشنبه‌ها ۹ الی ۱۴</span>
            </div>
          </div>

          {/* Form side (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0c122a] p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 text-right">
                فرم درخواست مشاوره و ثبت‌نام
              </h3>
              <p className="text-xs text-slate-400 mb-6 text-right">
                اطلاعات خود را وارد کنید؛ مشاوران آکادمی حداکثر تا ۲ ساعت کاری با شما تماس می‌گیرند.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center animate-fadeIn">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-300">
                    پیام شما با موفقیت ثبت شد!
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    با تشکر از اعتماد شما به آکادمی شهزاد قنبری. کارشناسان ما به زودی با شما تماس خواهند گرفت.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-lg bg-emerald-600/30 px-4 py-2 text-xs font-semibold text-emerald-200 hover:bg-emerald-600/40"
                  >
                    ارسال فرم دیگر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        نام و نام خانوادگی *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="مثال: علی رضایی"
                        className="w-full rounded-xl border border-slate-700 bg-[#070b1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        شماره تلفن همراه *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="۰۹۱۲..."
                        dir="ltr"
                        className="w-full rounded-xl border border-slate-700 bg-[#070b1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      دوره یا موضوع مورد نظر:
                    </label>
                    <select
                      value={formData.courseInterest}
                      onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-[#070b1a] px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      <option value="ai-mastery">دوره جامع هوش مصنوعی و یادگیری ماشین</option>
                      <option value="programming-for-ai">برنامه‌نویسی تخصصی پایتون و الگوریتم‌ها</option>
                      <option value="digital-skills-ai">مهارت‌های دیجیتال و ابزارهای نوین AI</option>
                      <option value="general-consult">مشاوره عمومی برای شروع مسیر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      توضیحات یا سوالات شما (اختیاری):
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اگر پیش‌زمینه‌ای دارید یا هدف خاصی مدنظرتان است برای ما بنویسید..."
                      className="w-full rounded-xl border border-slate-700 bg-[#070b1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>در حال ثبت اطلاعات...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>ارسال درخواست مشاوره رایگان</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

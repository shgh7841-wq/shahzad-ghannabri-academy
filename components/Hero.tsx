'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Sparkles, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
}

export default function Hero({ onStartLearning }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'llm' | 'code' | 'prompt'>('llm');

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-cyan-500/15 to-transparent blur-[120px]" />
        <div className="absolute top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Main Hero Content (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-right"
          >
            {/* Quiet category label without pill enclosure */}
            <div className="mb-4 flex items-center gap-2 text-xs font-medium text-cyan-400">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>مرکز آموزش تخصصی هوش مصنوعی و فناوری‌های نوین</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">آکادمی شهزاد قنبری</span>
            </div>

            {/* Requested Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight">
              به دنیای{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                هوش مصنوعی
              </span>{' '}
              خوش آمدید
            </h1>

            {/* Requested Subtitle introducing Shahzad Ghanbari Academy */}
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
              آکادمی شهزاد قنبری، بستری نوین برای تسلط عمیق بر الگوریتم‌های هوش مصنوعی، برنامه‌نویسی تخصصی پایتون و ابزارهای تحول‌آفرین دیجیتال است. ما مسیر یادگیری را از مبانی پایه تا اجرای پروژه‌های صنعتی و خلق ارزش برای شما هموار ساخته‌ایم.
            </p>

            {/* Two Requested CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartLearning}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>شروع یادگیری</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToCourses}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-500/60 hover:bg-slate-800/80 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-cyan-400" />
                <span>مشاهده دوره‌ها</span>
              </button>
            </div>

            {/* Adjacent Trust Proof Strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>آموزش کاملاً پروژه‌محور و کاربردی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                <span>منتورینگ اختصاصی شهزاد قنبری</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>ارائه مدرک پایان‌دوره آکادمی</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive AI Preview Showcase (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-slate-800/90 bg-gradient-to-b from-[#0e1633] to-[#070b1a] p-6 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
              {/* Header of the interactive display card */}
              <div className="flex items-center justify-between border-b border-slate-800/70 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-cyan-300">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>AI_LAB :: SHAHZAD_GHANBARI</span>
                </div>
              </div>

              {/* Functional tabs to switch AI concept previews */}
              <div className="mt-4 flex gap-1 p-1 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('llm')}
                  className={`flex-1 py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'llm'
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  شبکه‌های عصبی
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'code'
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  کُد پایتون
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('prompt')}
                  className={`flex-1 py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'prompt'
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-sky-300 border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  پرامپت و ابزارها
                </button>
              </div>

              {/* Dynamic code/architecture preview display */}
              <div className="mt-4 rounded-xl bg-[#050813] p-4 font-mono text-xs text-slate-300 border border-slate-800/80 min-h-[220px] flex flex-col justify-between">
                {activeTab === 'llm' && (
                  <div className="space-y-2 text-right">
                    <p className="text-cyan-400 font-semibold font-sans">
                      معماری ترنسفورمر و یادگیری عمیق
                    </p>
                    <div className="space-y-1 text-slate-400 text-[11px] font-sans leading-relaxed">
                      <p>✓ مکانیسم خودتوجهی (Self-Attention Mechanism)</p>
                      <p>✓ آموزش مدل‌های پیش‌بینی توالی و طبقه‌بندی متن</p>
                      <p>✓ بهینه‌سازی گرادیان و تنظیم هایپرپارامترها</p>
                      <p>✓ پیاده‌سازی عملیاتی روی GPU با PyTorch</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                      <span>دقت ارزیابی مدل:</span>
                      <span className="text-cyan-300 font-mono font-bold">98.4% Acc</span>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-2 text-left dir-ltr" dir="ltr">
                    <div className="text-purple-400 flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      <span>model_training.py</span>
                    </div>
                    <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
{`import torch
import torch.nn as nn

class NeuralClassifier(nn.Module):
    def __init__(self, in_features, hidden=128):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_features, hidden),
            nn.GELU(),
            nn.Dropout(0.2),
            nn.Linear(hidden, 1)
        )
    def forward(self, x):
        return self.net(x)`}
                    </pre>
                  </div>
                )}

                {activeTab === 'prompt' && (
                  <div className="space-y-2 text-right">
                    <p className="text-purple-400 font-semibold font-sans">
                      فرمول مهندسی پرامپت حرفه‌ای
                    </p>
                    <div className="rounded-lg bg-slate-900/90 p-2.5 text-[11px] text-slate-300 font-sans border border-purple-500/20 leading-relaxed">
                      <span className="text-cyan-400 font-bold">[نقش]: </span>
                      تحلیل‌گر ارشد هوش مصنوعی
                      <br />
                      <span className="text-purple-400 font-bold">[هدف]: </span>
                      طراحی سیستم اتوماسیون داده با هوش مصنوعی
                      <br />
                      <span className="text-emerald-400 font-bold">[فرمت]: </span>
                      گام‌به‌گام همراه با کُد و شاخص‌های کلیدی عملکرد
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans mt-2">
                      تسلط بر تولید محتوا و ابزارهای خودکارسازی در محیط کار.
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] text-slate-400 font-sans">
                  <span>وضعیت آموزشی:</span>
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    آماده برای ثبت‌نام دوره جدید
                  </span>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium">منتورینگ و تدریس مستقیم:</span>
                <span className="font-bold text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  مهندس شهزاد قنبری
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

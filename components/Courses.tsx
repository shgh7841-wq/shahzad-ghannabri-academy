'use client';

import { motion } from 'motion/react';
import { Brain, Code2, Sparkles, Clock, Layers, ArrowLeft } from 'lucide-react';
import { Course, COURSES_DATA } from '@/lib/courses-data';

interface CoursesProps {
  onSelectCourse: (course: Course) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  const getIcon = (name: Course['iconName']) => {
    switch (name) {
      case 'Brain':
        return <Brain className="h-6 w-6 text-cyan-400" />;
      case 'Code':
        return <Code2 className="h-6 w-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-sky-400" />;
      default:
        return <Brain className="h-6 w-6 text-cyan-400" />;
    }
  };

  const getAccentBorder = (accent: Course['accentColor']) => {
    switch (accent) {
      case 'cyan':
        return 'hover:border-cyan-500/50 hover:shadow-cyan-500/10';
      case 'purple':
        return 'hover:border-purple-500/50 hover:shadow-purple-500/10';
      case 'indigo':
        return 'hover:border-sky-500/50 hover:shadow-sky-500/10';
      default:
        return 'hover:border-cyan-500/50';
    }
  };

  return (
    <section id="courses" className="relative py-20 bg-[#070b1b] border-t border-slate-900">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-end">
        <div className="h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <span>دوره‌های تخصصی و کاربردی</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">تقویم آموزشی جدید</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            مسیرهای تخصصی یادگیری در آکادمی شهزاد قنبری
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            سه برنامه آموزشی مدون طراحی شده برای هدایت علاقه‌مندان، دانشجویان و متخصصان بازار کار به سمت قله‌های هوش مصنوعی و فناوری‌های دیجیتال.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0c1228] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${getAccentBorder(
                course.accentColor
              )}`}
            >
              <div>
                {/* Header with icon and quiet text metadata */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(course.iconName)}
                  </div>
                  {/* Clean unboxed metadata separator */}
                  <div className="text-xs text-slate-400 font-medium">
                    <span>{course.category}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Tagline / short description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {course.tagline}
                </p>

                {/* Key Skills unboxed list */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <p className="text-xs font-semibold text-slate-400 mb-2.5">
                    مهارت‌های کلیدی دوره:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {course.skills.slice(0, 3).map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom metadata and action */}
              <div className="mt-8 pt-5 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-purple-400" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCourse(course)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 py-3 text-xs font-bold text-slate-100 transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] cursor-pointer"
                >
                  <span>مشاهده سرفصل‌ها و ثبت‌نام</span>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

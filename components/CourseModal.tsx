'use client';

import { useState } from 'react';
import { X, Check, Clock, Layers, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Course } from '@/lib/courses-data';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  const [enrolled, setEnrolled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!course) return null;

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-[#0b1026] p-6 sm:p-8 text-right shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="بستن"
          className="absolute top-5 left-5 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <span>{course.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{course.level}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {course.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Quick specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#070b1a] border border-slate-800 text-xs">
          <div>
            <span className="block text-slate-400">مدت دوره:</span>
            <span className="font-semibold text-cyan-300 mt-1 block">{course.duration}</span>
          </div>
          <div>
            <span className="block text-slate-400">تعداد پروژه‌ها:</span>
            <span className="font-semibold text-purple-300 mt-1 block">{course.projectsCount}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-slate-400">مدرک نهایی:</span>
            <span className="font-semibold text-white mt-1 block">گواهی آکادمی قنبری</span>
          </div>
        </div>

        {/* Topics / Syllabus */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white mb-3">سرفصل‌های آموزشی دوره:</h4>
          <div className="space-y-3">
            {course.topics.map((t, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800/80 bg-[#0e1634] p-3.5">
                <p className="text-xs font-bold text-cyan-300">{t.title}</p>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills learned */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white mb-2.5">مهارت‌هایی که کسب خواهید کرد:</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {course.skills.map((s, idx) => (
              <span key={idx} className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-slate-200 border border-slate-700">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="mb-8 p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
          <span className="font-bold text-purple-300">مخاطبان این دوره: </span>
          {course.audience}
        </div>

        {/* Action / Pre-registration */}
        {enrolled ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
            <CheckCircle2 className="h-6 w-6 text-emerald-400 mx-auto mb-1.5" />
            <p className="text-xs font-bold text-emerald-300">
              درخواست پیش‌ثبت‌نام شما ثبت شد!
            </p>
            <p className="text-[11px] text-slate-300 mt-1">
              کارشناس دوره در اسرع وقت جهت ارائه برنامه کلاسی و شرایط ثبت‌نام با شما تماس خواهد گرفت.
            </p>
          </div>
        ) : (
          <form onSubmit={handleEnroll} className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="شماره تماس خود را وارد کنید..."
              dir="ltr"
              className="flex-1 rounded-xl border border-slate-700 bg-[#070b1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 whitespace-nowrap cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>پیش‌ثبت‌نام در این دوره</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

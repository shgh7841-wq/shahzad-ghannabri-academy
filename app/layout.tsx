import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'آکادمی شهزاد قنبری | هوش مصنوعی',
  description: 'صفحه رسمی آکادمی شهزاد قنبری - آموزش تخصصی هوش مصنوعی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning className="bg-[#0a192f] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

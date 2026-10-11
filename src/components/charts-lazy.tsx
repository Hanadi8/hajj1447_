"use client";

import dynamic from "next/dynamic";

// تحميل مؤجل (lazy) لمكتبة Recharts — لا تُحمَّل هذه المكتبة إلا عند
// الحاجة الفعلية لعرض الرسم البياني، بدل تضمينها في حزمة JS الأولية
// لكل صفحة تستورد من charts.tsx (حتى لو كان الرسم أسفل الصفحة).
const chartLoadingFallback = () => (
  <div className="h-[280px] w-full animate-pulse rounded-lg bg-offwhite" aria-hidden="true" />
);

export const CategoryHorizontalBarChart = dynamic(
  () => import("./charts").then((m) => m.CategoryHorizontalBarChart),
  { ssr: false, loading: chartLoadingFallback }
);

export const CategoryBarChart = dynamic(
  () => import("./charts").then((m) => m.CategoryBarChart),
  { ssr: false, loading: chartLoadingFallback }
);

export const CountDonutChart = dynamic(
  () => import("./charts").then((m) => m.CountDonutChart),
  { ssr: false, loading: chartLoadingFallback }
);

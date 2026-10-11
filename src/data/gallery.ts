// ==========================================================================
// PLACEHOLDER DATA — REPLACE WITH OFFICIAL CONTENT
// ==========================================================================
import { GalleryItem } from "@/types";

const categories = ["المبادرات", "التطوع", "الميدان", "التدريب", "الفعاليات", "الشراكات"];
const titles = [
  "اطلاع نائب الأمير على التقرير ومتابعة أبرز الأعمال والجهود",
  "قائد.. يتابع المهام",
  "لا بأس طهور إن شاء الله",
  "مواردنا.. لكم أهل",
  "نهتم بتوثيق اللحظة",
  "عدسة الذكريات.. سفير التجربة",
];

export const galleryItems: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  image: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  title: titles[i],
  category: categories[i],
  initiativeId: (i % 8) + 1,
}));

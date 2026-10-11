// ==========================================================================
// PLACEHOLDER DATA — REPLACE WITH OFFICIAL CONTENT-
// ==========================================================================
import { GalleryItem } from "@/types";

const categories = ["المبادرات", "التطوع", "الميدان", "التدريب", "الفعاليات", "الشراكات"];
const titles = [
  "صورة من فعاليات المبادرات",
  "متطوعون في خدمة ضيوف الرحمن",
  "العمل الميداني خلال موسم الحج",
  "جلسة تدريبية للكوادر",
  "فعالية إطلاق إحدى المبادرات",
  "لقاء تنسيقي مع الجهات الشريكة",
];


const uppercaseExtensionIndexes = new Set([2, 6]);

export const galleryItems: GalleryItem[] = Array.from({ length: 6 }, (_, i) => {
  const num = i + 1;
  const ext = uppercaseExtensionIndexes.has(num) ? "JPG" : "jpg";
  return {
    id: num,
    image: /images/gallery/gallery-${String(num).padStart(2, "0")}.${ext},
    title: titles[i],
    category: categories[i],
    initiativeId: (i % 8) + 1,
  };
});

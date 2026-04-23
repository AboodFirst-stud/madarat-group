import {
  Map,
  Landmark,
  Waves,
  Factory,
  Truck,
  Trophy,
  Pill,
  LucideIcon,
} from "lucide-react";

type Project = {
  badge: string;
  title: string;
  scope?: string;
  tech?: string;
  out: string;
  featured?: boolean;
  icon: LucideIcon;
  /** background color for placeholder block */
  color: string;
};

const projects: Project[] = [
  {
    badge: "★ المشروع الرائد",
    title: "مسح سهل الزبداني المتقدم",
    scope: "2,700 هكتار — أضخم مسح ذكي في المنطقة",
    tech: "AI (SamGeo/QGIS) + LiDAR",
    out: "DTM/DSM · خرائط طبوغرافية · تحليل التربة والكربون · تصنيف المحاصيل",
    icon: Map,
    color: "#0D5014",
    featured: true,
  },
  {
    badge: "★ نموذج فريد — تراثي دولي",
    title: "المدرج البصري الأثري",
    scope: "1,880 م² — موقع مدرج دولياً على قائمة UNESCO",
    tech: "Drone Photogrammetry + 3D Model",
    out: "مخططات As-Built · DWG/PDF · تقرير QA معتمد",
    icon: Landmark,
    color: "#1a3d1c",
    featured: true,
  },
  {
    badge: "مسح جيوفضائي",
    title: "نهر بردى — من المصب إلى المنبع",
    tech: "Geo AI",
    out: "خرائط · طبقات · صور مقارنة · نموذج 2.5D",
    icon: Waves,
    color: "#063020",
  },
  {
    badge: "دراسة جدوى — ROI: 42.6%",
    title: "معمل طباعة علب الكرتون",
    scope:
      "آلة أوفست رباعية الرؤوس + CTB + قص القوالب — دراسة بتاريخ 11/10/2023",
    out: "دراسة جدوى كاملة معتمدة · تحليل مالي · خطة تشغيل",
    icon: Factory,
    color: "#2d1a0a",
  },
  {
    badge: "دراسة جدوى — ROI: 40.7%",
    title: "معمل الكرتون ثلاثي الطبقات",
    scope: "خدمات فريدة في المنطقة — دراسة بتاريخ 21/9/2023",
    out: "صناعة + طباعة فلاسكو + تشكيل علب · تقرير معتمد",
    icon: Factory,
    color: "#2d1a0a",
  },
  {
    badge: "دراسة جدوى — ROI: 77.1%",
    title: "مشروع المواصلات — إعزاز–عفرين",
    scope: "أسطول باصات نقل عام وشحن داخلي — دراسة بتاريخ 16/12/2023",
    out: "جدول رحلات · دفع إلكتروني · خطة توسع تدريجي",
    icon: Truck,
    color: "#1a2d3a",
  },
  {
    badge: "مشروع منجز — تشغيل فعلي",
    title: "المجمع الرياضي — إعزاز",
    scope: "ملعب + بينت بول + صالة إلكترونية + كافتيريا + أكاديمية كارتيه",
    out: "قيد التشغيل الفعلي · خطط توسع مستقبلية تشمل مسبح ونادي مائي",
    icon: Trophy,
    color: "#1a0a2d",
  },
  {
    badge: "مشروع منجز — تشغيل فعلي",
    title: "مستودع بيع وتوزيع الدواء — عفرين",
    scope: "شراء من المستوى الأول + بيع للصيدليات + سلسلة مفرق",
    out: "شبكة صيدليات منتشرة في الشمال السوري · خطط وكالات حصرية",
    icon: Pill,
    color: "#0a1a2d",
  },
];

function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  const Icon = p.icon;
  const accent = p.featured ? "#982532" : "#009E8A";
  return (
    <article className="surface-card overflow-hidden reveal h-full flex flex-col">
      {/* 📷 IMAGE_PLACEHOLDER: ضع صورة المشروع هنا */}
      <div
        className={`relative w-full ${large ? "h-72" : "h-48"}`}
        style={{ background: p.color }}
      >
        <div
          className="absolute top-0 inset-x-0"
          style={{ height: 3, background: accent }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={large ? 56 : 40} strokeWidth={1.25} color="#009E8A" />
        </div>
      </div>

      <div className={`p-6 ${large ? "md:p-7" : ""} flex-1 flex flex-col`}>
        <span
          className="text-xs font-semibold"
          style={{ color: p.featured ? "#982532" : "#009E8A" }}
        >
          {p.badge}
        </span>
        <h3
          className={`font-bold text-foreground mt-2 ${
            large ? "text-2xl" : "text-lg"
          }`}
        >
          {p.title}
        </h3>
        {p.scope && (
          <p className="text-sm text-text-secondary mt-2">{p.scope}</p>
        )}
        {p.tech && (
          <p className="text-sm text-text-secondary mt-1">
            <span className="text-text-muted">التقنية: </span>
            {p.tech}
          </p>
        )}
        <p className="text-sm text-foreground/85 mt-3 leading-relaxed">
          {p.out}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[120px]">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">مشاريعنا المُنجزة</span>
          <h2 className="heading-section text-foreground mt-4">
            أعمال موثّقة بدقة سنتيمترية
          </h2>
          <p className="text-body mt-4">ونتائج قابلة للقياس.</p>
        </div>

        {/* Featured row — 2 large cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {featured.map((p) => (
            <ProjectCard key={p.title} p={p} large />
          ))}
        </div>

        {/* Rest — 3 columns */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

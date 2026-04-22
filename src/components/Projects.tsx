import { Map, Landmark, Waves, Factory, LucideIcon } from "lucide-react";

type Project = {
  badge: string;
  title: string;
  scope?: string;
  tech?: string;
  out: string;
  featured?: boolean;
  icon: LucideIcon;
  /** HSL values (without hsl()) for the placeholder gradient + top bar */
  gradFrom: string;
  gradTo: string;
  iconColor: string;
};

const projects: Project[] = [
  {
    badge: "★ المشروع الرائد",
    title: "مسح سهل الزبداني المتقدم",
    scope: "2,700 هكتار — أضخم مسح ذكي في المنطقة",
    tech: "AI (SamGeo/QGIS) + LiDAR",
    out: "DTM/DSM · خرائط طبوغرافية · تحليل التربة والكربون · تصنيف المحاصيل",
    featured: true,
    icon: Map,
    gradFrom: "137 72% 19%", // #0D5014
    gradTo: "125 53% 3%",
    iconColor: "var(--accent-blue)",
  },
  {
    badge: "★ نموذج فريد",
    title: "المدرج البصري الأثري",
    scope: "1,880 م² — موقع تراثي مدرج دولياً",
    tech: "Drone Photogrammetry + 3D Model",
    out: "مخططات As-Built · DWG/PDF · تقرير QA معتمد",
    featured: true,
    icon: Landmark,
    gradFrom: "122 40% 17%", // #1a3d1c
    gradTo: "125 53% 3%",
    iconColor: "var(--accent-blue)",
  },
  {
    badge: "مسح جيوفضائي",
    title: "نهر بردى — من المصب إلى المنبع",
    tech: "Geo AI",
    out: "خرائط · طبقات · صور مقارنة · نموذج 2.5D",
    icon: Waves,
    gradFrom: "166 67% 11%", // #063020
    gradTo: "125 53% 3%",
    iconColor: "var(--accent-blue)",
  },
  {
    badge: "دراسة جدوى",
    title: "معمل طباعة علب الكرتون",
    scope: "آلة أوفست رباعية الرؤوس + CTB + قص القوالب",
    out: "ROI: 42.6% — دراسة جدوى كاملة معتمدة",
    icon: Factory,
    gradFrom: "27 64% 11%", // #2d1a0a
    gradTo: "125 53% 3%",
    iconColor: "var(--accent-red)",
  },
];

export default function Projects() {
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

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="surface-card overflow-hidden reveal"
              >
                {/* 📷 IMAGE_PLACEHOLDER: ضع صورة المشروع هنا (مثال: <img src="/images/project-zabadani.jpg" className="w-full h-64 object-cover" />) */}
                <div
                  className="h-56 w-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, hsl(${p.gradFrom}) 0%, hsl(${p.gradTo}) 100%)`,
                  }}
                >
                  {/* شريط علوي مميز بلون المشروع */}
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: `hsl(${p.iconColor})` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      size={72}
                      strokeWidth={1.25}
                      style={{ color: `hsl(${p.iconColor})`, opacity: 0.85 }}
                    />
                  </div>
                </div>

                <div className="p-7">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "hsl(var(--accent-blue))" }}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-2">
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
          })}
        </div>
      </div>
    </section>
  );
}

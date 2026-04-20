const projects = [
  {
    badge: "★ المشروع الرائد",
    title: "مسح سهل الزبداني المتقدم",
    scope: "2,700 هكتار — أضخم مسح ذكي في المنطقة",
    tech: "AI (SamGeo/QGIS) + LiDAR",
    out: "DTM/DSM · خرائط طبوغرافية · تحليل التربة والكربون · تصنيف المحاصيل",
    featured: true,
  },
  {
    badge: "★ نموذج فريد",
    title: "المدرج البصري الأثري",
    scope: "1,880 م² — موقع تراثي مدرج دولياً",
    tech: "Drone Photogrammetry + 3D Model",
    out: "مخططات As-Built · DWG/PDF · تقرير QA معتمد",
    featured: true,
  },
  {
    badge: "مسح جيوفضائي",
    title: "نهر بردى — من المصب إلى المنبع",
    tech: "Geo AI",
    out: "خرائط · طبقات · صور مقارنة · نموذج 2.5D",
  },
  {
    badge: "دراسة جدوى",
    title: "معمل طباعة علب الكرتون",
    scope: "آلة أوفست رباعية الرؤوس + CTB + قص القوالب",
    out: "ROI: 42.6% — دراسة جدوى كاملة معتمدة",
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
          <p className="text-body mt-4">
            ونتائج قابلة للقياس.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`surface-card overflow-hidden reveal ${
                p.featured ? "" : ""
              }`}
            >
              {/* 📷 IMAGE_PLACEHOLDER: ضع صورة المشروع هنا (مثال: <img src="/images/project-zabadani.jpg" className="w-full h-64 object-cover" />) */}
              <div
                className="h-56 w-full relative overflow-hidden"
                style={{ background: "var(--gradient-card-feature)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-text-muted text-xs">
                  مكان الصورة
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
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Plane,
  Radar,
  Map,
  Box,
  Activity,
  BarChart2,
  ClipboardList,
  TrendingUp,
  FileText,
  Wrench,
  Building2,
  Network,
  LucideIcon,
} from "lucide-react";

type ServiceItem = { t: string; d: string; icon: LucideIcon };
type Service = {
  eyebrow: string;
  title: string;
  en: string;
  intro: string;
  items: ServiceItem[];
  star?: string;
};

const services: Service[] = [
  {
    eyebrow: "المحور الأول",
    title: "المسح الجيوفضائي",
    en: "Geospatial Survey Services",
    intro:
      "نواة العمل في مدارات — بيانات جغرافية مكانية دقيقة، معتمدة وقابلة للتطوير، تُتيح اتخاذ قرارات إعمارية مدروسة.",
    items: [
      { t: "المسح الجوي بالدرون", d: "دقة سنتيمترية ونماذج ثلاثية الأبعاد", icon: Plane },
      { t: "مسح LiDAR الجوي", d: "نمذجة التضاريس تحت الغطاء النباتي، دقة ≤5 سم", icon: Radar },
      { t: "الخرائط الطبوغرافية وتحليل GIS", d: "انحدارات، فيضانات، استخدامات الأراضي", icon: Map },
      { t: "التوثيق المعماري Scan to CAD/BIM", d: "مخططات 2D، BIM LOD 200-300، IFC", icon: Box },
      { t: "رصد التقدم وكشف التغيير", d: "تحديثات دورية، مقارنة زمنية، حساب الكميات", icon: Activity },
    ],
    star: "جميع المخرجات معتمدة: تقرير QA + Release ID + شهادة دقة",
  },
  {
    eyebrow: "المحور الثاني",
    title: "دراسة وإدارة المشاريع",
    en: "Project Study & Management",
    intro: "قلب المجموعة — تُحوِّل الفرص الاستثمارية إلى خطط قابلة للتنفيذ.",
    items: [
      { t: "دراسات الجدوى الاقتصادية", d: "تحليل السوق، حساب ROI، تحليل المخاطر، معتمدة من البنوك والمموّلين", icon: BarChart2 },
      { t: "إدارة المشاريع والإشراف الميداني", d: "خرائط Gantt، متابعة يومية، تقارير دورية، ضبط الجودة", icon: ClipboardList },
      { t: "تطوير الأعمال والفرص الاستثمارية", d: "ملفات استثمارية، خطط عمل، نماذج مالية، مرافقة المستثمر", icon: TrendingUp },
      { t: "إدارة العقود والموردين", d: "إعداد العقود، التفاوض، متابعة التسليمات والمدفوعات", icon: FileText },
    ],
  },
  {
    eyebrow: "المحور الثالث",
    title: "الإنشاء وإعادة الإعمار",
    en: "Construction & Reconstruction",
    intro: "تنفيذ ميداني مبني على بيانات حقيقية — من إعادة التأهيل إلى البناء الجديد.",
    items: [
      { t: "إعادة تأهيل المباني المتضررة", d: "تقييم هيكلي، خطة تأهيل، تنفيذ بفرق متخصصة، شهادة إنجاز + ضمان", icon: Wrench },
      { t: "بناء مجمعات سكنية وتجارية", d: "تصميم + BIM + هيكل خرساني + أنظمة المبنى + تسليم مفتاح باليد", icon: Building2 },
      { t: "مشاريع البنية التحتية", d: "طرق، شبكات مياه، كهرباء، جسور، صرف صحي — مع امتثال بيئي كامل", icon: Network },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">ماذا نقدم</span>
          <h2 className="heading-section text-foreground mt-4">
            ثلاثة محاور متكاملة
          </h2>
          <p className="text-body mt-4">
            من المسح إلى التصميم إلى التنفيذ — تحت سقف واحد.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-card p-8 md:p-12 reveal bg-card-bg"
            >
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12">
                <header>
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                    {s.title}
                  </h3>
                  <div className="text-sm text-text-muted mt-1 font-mono" dir="ltr">
                    {s.en}
                  </div>
                  <p className="text-body mt-5">{s.intro}</p>

                  {/* 📷 IMAGE_PLACEHOLDER: ضع صورة توضيحية للخدمة هنا (مثال: <img src="/images/service-1.jpg" />) */}
                </header>

                <div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.items.map((it) => {
                      const Icon = it.icon;
                      return (
                        <li
                          key={it.t}
                          className="rounded-xl border border-border-line p-4 hover:border-accent-blue/40 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <Icon
                              size={14}
                              className="mt-1 shrink-0"
                              style={{ color: "hsl(var(--accent-blue))" }}
                            />
                            <div>
                              <div className="text-foreground font-semibold text-sm">
                                {it.t}
                              </div>
                              <div className="text-text-secondary text-xs mt-1 leading-relaxed">
                                {it.d}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {s.star && (
                    <div
                      className="mt-5 text-sm font-medium px-4 py-3 rounded-xl"
                      style={{
                        background: "hsl(var(--accent-blue) / 0.1)",
                        color: "hsl(var(--accent-blue))",
                        border: "1px solid hsl(var(--accent-blue) / 0.3)",
                      }}
                    >
                      ★ {s.star}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

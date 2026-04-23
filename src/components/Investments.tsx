import { useState } from "react";
import {
  ArrowLeft,
  Sprout,
  Heart,
  Factory,
  Zap,
  Truck,
  Building2,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

type Opportunity = {
  category: string;
  icon: LucideIcon;
  t: string;
  d: string;
  status: "دراسة مكتملة ✓" | "فرصة مفتوحة";
};

const opportunities: Opportunity[] = [
  /* ── زراعية وغذائية ── */
  {
    category: "زراعية وغذائية",
    icon: Sprout,
    t: "الزراعة والتصدير",
    d: "نخيل مثمر، زيتون، تين بعلي، مشمش كلابي — منتجات ذات قيمة مضافة عالية وأسواق تصدير راسخة.",
    status: "دراسة مكتملة ✓",
  },
  {
    category: "زراعية وغذائية",
    icon: Heart,
    t: "الثروة الحيوانية — الغنم العواس",
    d: "السلالة السورية الأشهر عالمياً — تتكامل مع المشاريع الزراعية لتخفيض التكاليف وتنويع الإيرادات.",
    status: "دراسة مكتملة ✓",
  },
  /* ── صناعية ── */
  {
    category: "صناعية",
    icon: Factory,
    t: "مصانع غذائية متنوعة",
    d: "معمل مرتديلا دجاج (ROI: 39.2%) — معمل شيبس وبوشار (ROI: 38.3%) — معمل قهوة سريعة التحضير (ROI: 82.4%).",
    status: "دراسة مكتملة ✓",
  },
  {
    category: "صناعية",
    icon: Factory,
    t: "معامل التعبئة والتصنيع",
    d: "معمل طباعة علب الكرتون (ROI: 42.6%) — معمل الكرتون ثلاثي الطبقات (ROI: 40.7%) — خدمات فريدة في المنطقة.",
    status: "دراسة مكتملة ✓",
  },
  /* ── طاقة ولوجستيات ── */
  {
    category: "طاقة ولوجستيات",
    icon: Zap,
    t: "الطاقة المتجددة",
    d: "مزارع طاقة شمسية وريحية في مناطق سورية مؤهلة — باب الشراكة مع القطاع الخاص مفتوح حكومياً.",
    status: "دراسة مكتملة ✓",
  },
  {
    category: "طاقة ولوجستيات",
    icon: Truck,
    t: "النقل والدعم اللوجستي",
    d: "شركة نقل بين المدن (ROI: 77.1%) — أسطول باصات وشحن داخلي مع دفع إلكتروني — خط إعزاز–عفرين نموذجاً.",
    status: "دراسة مكتملة ✓",
  },
  /* ── تجارية وعقارية ── */
  {
    category: "تجارية وعقارية",
    icon: Building2,
    t: "العقارات وإعادة الإعمار",
    d: "شركة تعهدات وتطوير عقاري — استصلاح مبانٍ متضررة، بناء مجمعات جديدة، مشاريع حكومية ضخمة.",
    status: "فرصة مفتوحة",
  },
  {
    category: "تجارية وعقارية",
    icon: TrendingUp,
    t: "وكالات تجارية متنوعة",
    d: "وكالات أجهزة كهربائية، صناعات غذائية، أدوية ومستحضرات — إعادة فتح الوكالات الأجنبية في السوق السوري.",
    status: "فرصة مفتوحة",
  },
];

const categories = [
  "الكل",
  "زراعية وغذائية",
  "صناعية",
  "طاقة ولوجستيات",
  "تجارية وعقارية",
] as const;

export default function Investments() {
  const [active, setActive] = useState<(typeof categories)[number]>("الكل");
  const filtered =
    active === "الكل"
      ? opportunities
      : opportunities.filter((o) => o.category === active);

  return (
    <section id="investments" className="py-[120px] bg-section-alt">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">فرص استثمارية جاهزة</span>
          <h2 className="heading-section text-foreground mt-4">
            دراسات مكتملة — نبحث عن شركاء
          </h2>
          <p className="text-body mt-4">ومستثمرين لتحويل الفرصة إلى واقع.</p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 reveal">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all border"
                style={{
                  background: isActive
                    ? "hsl(var(--accent-blue))"
                    : "transparent",
                  color: isActive ? "white" : "hsl(var(--foreground))",
                  borderColor: isActive
                    ? "hsl(var(--accent-blue))"
                    : "hsl(var(--border-line))",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {filtered.map((o) => {
            const Icon = o.icon;
            const isCompleted = o.status === "دراسة مكتملة ✓";
            return (
              <article
                key={o.t}
                className="surface-card p-6 reveal hover:border-accent-blue/40 transition-colors group"
              >
                {/* 📷 IMAGE_PLACEHOLDER: ضع أيقونة أو صورة للفرصة الاستثمارية هنا */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--accent-blue) / 0.12)" }}
                >
                  <Icon size={20} style={{ color: "hsl(var(--accent-blue))" }} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{o.t}</h3>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {o.d}
                </p>
                <div
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: isCompleted
                      ? "hsl(var(--brand-deep) / 0.15)"
                      : "hsl(var(--accent-blue) / 0.15)",
                    color: isCompleted
                      ? "hsl(var(--brand-deep))"
                      : "hsl(var(--accent-blue))",
                  }}
                >
                  {o.status}
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="/contact"
            className="btn-pill btn-primary inline-flex items-center gap-2 px-7 py-3 text-base"
          >
            تحدث مع فريقنا الاستثماري
            <ArrowLeft size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

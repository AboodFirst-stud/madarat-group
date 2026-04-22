import { ArrowLeft, Leaf, Heart, Zap, Sprout, LucideIcon } from "lucide-react";

type Opportunity = { t: string; d: string; icon: LucideIcon };

const opportunities: Opportunity[] = [
  {
    t: "الزراعة والتصدير",
    d: "التغليف والتبريد الزراعي وتصدير الخضار والفواكه",
    icon: Leaf,
  },
  {
    t: "الثروة الحيوانية",
    d: "التربية والتسمين والصناعات الإنتاجية التحويلية",
    icon: Heart,
  },
  {
    t: "الطاقة البديلة",
    d: "مزارع الطاقة الشمسية — مناطق سورية مؤهلة، شراكة حكومية",
    icon: Zap,
  },
  {
    t: "المشاريع الزراعية المتخصصة",
    d: "مشاريع متنوعة في مناطق متعددة",
    icon: Sprout,
  },
];

export default function Investments() {
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((o) => {
            const Icon = o.icon;
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
                    background: "hsl(var(--accent-blue) / 0.15)",
                    color: "hsl(var(--accent-blue))",
                  }}
                >
                  دراسة مكتملة ✓
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="#contact"
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

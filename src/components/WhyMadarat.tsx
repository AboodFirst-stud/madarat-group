import { GitMerge, Database, Globe2, LucideIcon } from "lucide-react";

type Reason = {
  n: string;
  t: string;
  d: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    n: "01",
    t: "التكامل بين الأذرع الثلاثة",
    d: "المسح الجيوفضائي يُغذي دراسات الجدوى — ودراسات الجدوى تُوجّه قرارات الإنشاء. لا حاجة لثلاث شركات منفصلة — مدارات تجمع الكل تحت سقف واحد.",
    icon: GitMerge,
  },
  {
    n: "02",
    t: "بيانات حقيقية لا نماذج نظرية",
    d: "جميع دراساتنا مدعومة ببيانات ميدانية حقيقية من مسوحات جيومكانية دقيقة — مخرجات تُقبل من البنوك وصناديق الاستثمار والجهات الدولية.",
    icon: Database,
  },
  {
    n: "03",
    t: "الفهم المحلي مع المعايير الدولية",
    d: "خبرات أوروبية وعالمية موظّفة في الميدان السوري — منظور يجمع بين الصرامة المنهجية الدولية والتكيّف الميداني العميق.",
    icon: Globe2,
  },
];

export default function WhyMadarat() {
  return (
    <section className="py-[120px] bg-section-alt">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">لماذا مدارات؟</span>
          <h2 className="heading-section text-foreground mt-4">
            ثلاث ميزات تنافسية
          </h2>
        </div>

        <div className="mt-20 space-y-20">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isReversed = i % 2 === 1;
            return (
              <div
                key={r.n}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal"
                style={{ direction: "rtl" }}
              >
                {/* النص */}
                <div className={isReversed ? "md:order-last" : ""}>
                  <div
                    className="text-6xl font-bold mb-4 select-none"
                    style={{
                      color: "hsl(var(--accent-blue))",
                      opacity: 0.3,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {parseInt(r.n)}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {r.t}
                  </h3>
                  <p className="text-body mt-5">{r.d}</p>
                </div>

                {/* الأيقونة */}
                <div
                  className={`aspect-square rounded-2xl border border-border-line relative overflow-hidden flex items-center justify-center ${
                    isReversed ? "md:order-first" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--brand-deep) / 0.18) 0%, transparent 100%)",
                  }}
                >
                  {/* 📷 IMAGE_PLACEHOLDER: ضع صورة توضيحية لهذه الميزة هنا (مثال: <img src={`/images/why-${r.n}.jpg`} className="w-full h-full object-cover" />) */}
                  <Icon
                    size={96}
                    strokeWidth={1.25}
                    style={{ color: "hsl(var(--accent-blue))" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

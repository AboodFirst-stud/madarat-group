const sectors = [
  "التخطيط العمراني وتطوير المدن",
  "البنية التحتية والمرافق العامة",
  "الزراعة وإدارة الموارد الطبيعية",
  "البيئة والتغير المناخي",
  "الطاقة (التقليدية والمتجددة)",
  "المياه والصرف الصحي",
  "النقل والطرق",
  "الاتصالات والشبكات",
  "التراث الثقافي والتوثيق الأثري",
  "إدارة الكوارث وتقييم الأضرار",
  "الاستثمار العقاري والتطوير العمراني",
  "الجهات الحكومية والبلديات",
  "المنظمات الدولية والإنسانية",
];

export default function Sectors() {
  return (
    <section className="py-[120px]">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">قطاعات نخدمها</span>
          <h2 className="heading-section text-foreground mt-4">
            خبرة شاملة عبر القطاعات
          </h2>
          <p className="text-body mt-4">
            في التنمية وإعادة الإعمار.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 reveal">
          {sectors.map((s) => (
            <span
              key={s}
              className="px-5 py-2.5 rounded-full border border-border-line text-sm text-foreground/90 hover:border-accent-blue hover:text-foreground transition-colors cursor-default"
              style={{ background: "hsl(0 0% 5%)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

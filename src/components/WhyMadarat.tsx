const reasons = [
  {
    n: "01",
    t: "التكامل بين الأذرع الثلاثة",
    d: "المسح الجيوفضائي يُغذي دراسات الجدوى — ودراسات الجدوى تُوجّه قرارات الإنشاء. لا حاجة لثلاث شركات منفصلة — مدارات تجمع الكل تحت سقف واحد.",
  },
  {
    n: "02",
    t: "بيانات حقيقية لا نماذج نظرية",
    d: "جميع دراساتنا مدعومة ببيانات ميدانية حقيقية من مسوحات جيومكانية دقيقة — مخرجات تُقبل من البنوك وصناديق الاستثمار والجهات الدولية.",
  },
  {
    n: "03",
    t: "الفهم المحلي مع المعايير الدولية",
    d: "خبرات أوروبية وعالمية موظّفة في الميدان السوري — منظور يجمع بين الصرامة المنهجية الدولية والتكيّف الميداني العميق.",
  },
];

export default function WhyMadarat() {
  return (
    <section className="py-[120px]" style={{ background: "hsl(0 0% 2%)" }}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">لماذا مدارات؟</span>
          <h2 className="heading-section text-foreground mt-4">
            ثلاث ميزات تنافسية
          </h2>
        </div>

        <div className="mt-20 space-y-20">
          {reasons.map((r, i) => (
            <div
              key={r.n}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal ${
                i % 2 ? "md:[direction:ltr]" : ""
              }`}
              style={{ direction: "rtl" }}
            >
              <div>
                <div
                  className="text-6xl font-bold mb-4"
                  style={{ color: "hsl(var(--accent-blue))" }}
                >
                  {r.n}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {r.t}
                </h3>
                <p className="text-body mt-5">{r.d}</p>
              </div>
              <div
                className="aspect-square rounded-2xl border border-border-line relative overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(212 100% 14%) 0%, hsl(0 0% 4%) 70%)",
                }}
              >
                {/* 📷 IMAGE_PLACEHOLDER: ضع صورة توضيحية لهذه الميزة هنا (مثال: <img src={`/images/why-${r.n}.jpg`} className="w-full h-full object-cover" />) */}
                <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm">
                  مكان الصورة
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    t: "تقييم الفكرة",
    d: "جلسة استكشافية، تحديد القطاع، مسح أولي للسوق، وتقييم سريع للجدوى — قبل أن تُنفق درهماً واحداً.",
  },
  {
    n: "02",
    t: "دراسة الجدوى",
    d: "تحليل مالي كامل يشمل ROI، تكاليف التشغيل، السيناريوهات المتعددة — مدعومة ببيانات ميدانية حقيقية وليست نماذج نظرية.",
  },
  {
    n: "03",
    t: "المسح والتصميم الهندسي",
    d: "مخططات معمارية وإنشائية متكاملة مع BIM، مدعومة ببيانات جيومكانية دقيقة من ذراع المسح — تصميم صحيح من المرة الأولى.",
  },
  {
    n: "04",
    t: "خطة التنفيذ",
    d: "جدول زمني تفصيلي، خطة المشتريات، تحديد الموردين والشركاء — لا مفاجآت في الموقع.",
  },
  {
    n: "05",
    t: "إدارة التنفيذ والمراقبة",
    d: "إشراف ميداني يومي، رصد بالدرون، تقارير دورية، ضبط الجودة — التكامل بين الأذرع الثلاثة يمنحنا ميزة تنافسية حصرية.",
  },
  {
    n: "06",
    t: "التسليم والتشغيل",
    d: "محاضر استلام، وثائق As-Built، دعم مرحلة التشغيل الأولى — مدارات شريككم من الفكرة إلى التشغيل.",
  },
];

export default function Methodology() {
  return (
    <section className="py-[120px] bg-section-alt">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">منهجيتنا</span>
          <h2 className="heading-section text-foreground mt-4">
            من الفكرة إلى التشغيل
          </h2>
          <p className="text-body mt-4">
            منهجية متكاملة تمشي معك في كل خطوة.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-col gap-6 md:gap-16 items-start reveal ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className="text-7xl md:text-8xl font-bold leading-none select-none shrink-0 w-24 text-center"
                style={{ color: "hsl(var(--accent-blue))", opacity: 0.6 }}
              >
                {s.n}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {s.t}
                </h3>
                <p className="text-body mt-3 max-w-2xl">{s.d}</p>
                {/* 📷 IMAGE_PLACEHOLDER: ضع صورة توضح هذه المرحلة هنا (مثال: <img src={`/images/step-${s.n}.jpg`} />) */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

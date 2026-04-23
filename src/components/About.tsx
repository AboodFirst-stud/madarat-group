const values = [
  { title: "الجودة", desc: "ضرورة استراتيجية" },
  { title: "الابتكار", desc: "محرك النمو" },
  { title: "الفهم المحلي", desc: "ميزة لا تُشترى" },
  { title: "الشفافية", desc: "أساس الثقة" },
  { title: "العمل الجماعي", desc: "روح المؤسسة" },
  { title: "المسؤولية", desc: "الاجتماعية والبيئية" },
];

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 reveal">
          <div>
            <span className="eyebrow">من نحن</span>
            <h2 className="heading-section text-foreground mt-4">
              مجموعة استثمارية متكاملة
            </h2>
            <p className="text-body mt-6">
              مجموعة مدارات مجموعة استثمارية متكاملة متخصصة في ثلاثة محاور:
              المسح الجيوفضائي وتحليل البيانات المكانية، ودراسة وإدارة المشاريع،
              وأعمال الإنشاء وإعادة الإعمار.
            </p>
            <p className="text-body mt-4">
              عمل فريق مدارات على تنفيذ مشاريع دراسية وتخطيطية وتنفيذية في سوريا،
              مستفيداً من خبرات أوروبية وعالمية — مما منحها منظوراً يجمع بين
              الصرامة المنهجية الدولية والتكيّف الميداني العميق.
            </p>

            {/* 📷 IMAGE_PLACEHOLDER: ضع صورة الفريق أو المكتب هنا (مثال: <img src="/images/team.jpg" />) */}

            <p
              className="mt-8 text-2xl md:text-3xl italic font-medium leading-snug"
              style={{ color: "hsl(var(--accent-blue))" }}
            >
              «ما يميّزنا ليس الحجم، بل عمق الفهم — ومخرجات يُوثق بها.»
            </p>

            {/* Mini stats (O) */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: "2,700", u: "هكتار", l: "أكبر مشروع مسح" },
                { n: "82.4%", u: "ROI", l: "أعلى عائد محقق" },
                { n: "+15", u: "دراسة", l: "جدوى منجزة" },
              ].map((s) => (
                <div key={s.n} className="surface-card p-4 text-center">
                  <div className="text-xl font-bold text-foreground">{s.n}</div>
                  <div
                    className="text-xs font-medium mt-1"
                    style={{ color: "hsl(var(--accent-blue))" }}
                  >
                    {s.u}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="surface-card p-5 hover:border-foreground/20 transition-colors"
              >
                <div className="text-foreground font-semibold text-base">
                  {v.title}
                </div>
                <div className="text-text-secondary text-xs mt-1">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

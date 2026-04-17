export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh"
    >
      {/* 📷 IMAGE_PLACEHOLDER: يمكن إضافة صورة خلفية هنا (مثال: <img src="/images/hero-bg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30" />) */}

      {/* Subtle radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(212 100% 18% / 0.45) 0%, transparent 60%)",
        }}
      />

      <div className="container-apple relative z-10 text-center pt-20">
        <div className="animate-in" style={{ animationDelay: "0s" }}>
          <span className="eyebrow">المُمكِّن الذكي لإعادة الإعمار</span>
        </div>

        <h1
          className="heading-display text-foreground mt-6 animate-in"
          style={{ animationDelay: "0.2s" }}
        >
          قبل أن تبني —
          <br />
          <span className="text-text-secondary">اعرف أرضك</span>
        </h1>

        <p
          className="text-body mt-6 max-w-[560px] mx-auto animate-in"
          style={{ animationDelay: "0.4s" }}
        >
          مجموعة مدارات تجمع بين المسح الجيوفضائي الدقيق، ودراسة المشاريع،
          وتنفيذ أعمال الإنشاء — لتمنحك القرار الصحيح قبل أول حجر.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="#services" className="btn-pill btn-primary">
            استكشف خدماتنا
          </a>
          <a href="#projects" className="btn-pill btn-ghost">
            اطلع على مشاريعنا ←
          </a>
        </div>
      </div>
    </section>
  );
}

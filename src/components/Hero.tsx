export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh"
    >
      {/* 📷 IMAGE_PLACEHOLDER: ضع خلفية الهيرو هنا (مثال: <img src="/images/hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20" />) */}

      {/* توهج شعاعي خفيف بالألوان البراندية */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--hero-overlay) / var(--hero-overlay-alpha)) 0%, transparent 60%)",
        }}
      />

      <div className="container-apple relative z-10 text-center mx-auto pt-20">
        {/* Eyebrow */}
        <div className="hero-reveal hero-reveal-1">
          <span className="eyebrow">المُمكِّن الذكي لإعادة الإعمار</span>
        </div>

        {/* H1 — السطر الأول */}
        <h1 className="hero-reveal hero-reveal-2 heading-display text-foreground mt-6">
          قبل أن تبني —
        </h1>

        {/* H1 — السطر الثاني (مع توهّج خفيف) */}
        <h1
          className="hero-reveal hero-reveal-3 heading-display mt-0"
          style={{
            color: "hsl(var(--text-secondary))",
            animation:
              "slideUpFade 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) forwards, glowPulse 4s 1.5s ease-in-out infinite",
          }}
        >
          اعرف أرضك
        </h1>

        {/* وصف */}
        <p className="hero-reveal hero-reveal-4 text-body mt-6 max-w-[560px] mx-auto">
          مجموعة مدارات تجمع بين المسح الجيوفضائي الدقيق، ودراسة المشاريع،
          وتنفيذ أعمال الإنشاء — لتمنحك القرار الصحيح قبل أول حجر.
        </p>

        {/* الأزرار */}
        <div className="hero-reveal hero-reveal-5 mt-10 flex flex-wrap justify-center gap-3">
          <a href="#services" className="btn-pill btn-primary">
            استكشف خدماتنا
          </a>
          <a href="#projects" className="btn-pill btn-ghost">
            اطلع على مشاريعنا ←
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="اكتشف المزيد"
        className="hero-reveal hero-reveal-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hover:opacity-80 transition-opacity"
        style={{ color: "hsl(var(--accent-blue))" }}
      >
        <span className="text-xs">اكتشف المزيد</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}

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
        <div className="animate-in duration-5000" style={{ animationDelay: "0s" }}>
          <span className="eyebrow ">المُمكِّن الذكي لإعادة الإعمار</span>
        </div>

        <h1
          className="heading-display text-foreground mt-6 animate-in duration-5000"
          style={{ animationDelay: "0.2s" }}
        >
          قبل أن تبني —
          <br />
          <span className="text-text-secondary">اعرف أرضك</span>
        </h1>

        <p
          className="text-body mt-6 max-w-[560px] mx-auto animate-in duration-5000"
          style={{ animationDelay: "0.4s" }}
        >
          مجموعة مدارات تجمع بين المسح الجيوفضائي الدقيق، ودراسة المشاريع،
          وتنفيذ أعمال الإنشاء — لتمنحك القرار الصحيح قبل أول حجر.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-in duration-5000"
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

export default function Vision() {
  return (
    <section
      className="relative py-[120px] overflow-hidden bg-section-alt"
    >
      {/* Diagonal subtle line */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0 1px, transparent 1px 80px)",
        }}
      />

      <div className="container-apple relative z-10 grid md:grid-cols-2 gap-14">
        <div className="reveal">
          <span className="eyebrow">رؤيتنا</span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 leading-snug">
            الخيار الأول للمستثمرين والجهات الحكومية والمؤسسات التنموية.
          </h3>
          <p className="text-body mt-5">
            تتطلع مجموعة مدارات إلى أن تكون الشركة الرائدة في الحلول الهندسية
            المتكاملة في سوريا والمنطقة — الخيار الأول لكل من يبحث عن شريك يجمع
            بين الخبرة المحلية العميقة والتنفيذ بمعايير دولية.
          </p>
        </div>
        <div className="reveal">
          <span className="eyebrow">رسالتنا</span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 leading-snug">
            حلقة الوصل بين الطموحات والإمكانات التقنية.
          </h3>
          <p className="text-body mt-5">
            نكون حلقة الوصل بين طموحات صناع القرار والإمكانات التقنية المتاحة،
            ونساعدهم على اتخاذ قرارات مبنية على بيانات دقيقة — بمخرجات معتمدة
            وقابلة للتوسع.
          </p>
        </div>
      </div>
    </section>
  );
}

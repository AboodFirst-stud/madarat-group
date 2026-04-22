interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-20 text-center hero-mesh relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--hero-overlay) / 0.35) 0%, transparent 70%)",
        }}
      />
      <div className="container-apple relative z-10">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="heading-display text-foreground mt-4">{title}</h1>
        {subtitle && (
          <p className="text-body mt-4 max-w-xl mx-auto text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

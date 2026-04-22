import { useCountUp } from "@/hooks/useCountUp";

function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}) {
  const [ref, current] = useCountUp(value);
  const display = decimals
    ? (current / Math.pow(10, decimals)).toFixed(decimals)
    : current.toLocaleString("en-US");
  return (
    <div ref={ref} className="flex-1 px-6 text-center min-w-[180px]">
      <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {prefix && (
          <span style={{ color: "hsl(var(--accent-red))" }}>{prefix}</span>
        )}
        {display}
        {suffix && (
          <span style={{ color: "hsl(var(--accent-red))" }}>{suffix}</span>
        )}
      </div>
      <div className="mt-2 text-sm text-text-secondary leading-snug">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="border-y border-border-line bg-section-alt"
      style={{ padding: "48px 0" }}
    >
      <div className="container-wide flex flex-wrap items-stretch divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border-line">
        <Stat value={400} prefix="+" suffix=" مليار$" label="تكلفة إعادة إعمار سوريا المتوقعة" />
        <Stat value={15} prefix="+" label="دراسة جدوى منجزة" />
        <Stat value={426} suffix="%" decimals={1} label="أعلى عائد ROI في دراساتنا" />
        <Stat value={5} prefix="+" label="قطاعات مدروسة ومُنفَّذة" />
      </div>
    </section>
  );
}

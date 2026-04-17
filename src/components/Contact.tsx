import { useState, type FormEvent } from "react";
import { MapPin, Globe, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("تم إرسال طلبك بنجاح — سنرد خلال 24 ساعة.");
    }, 700);
  };

  return (
    <section id="contact" className="py-[120px]">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">تواصل معنا</span>
          <h2 className="heading-section text-foreground mt-4">
            ابدأ مشروعك اليوم
          </h2>
          <p className="text-body mt-4">
            أخبرنا عن فكرتك وسنرد خلال 24 ساعة.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 reveal">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="surface-card p-7 md:p-9 space-y-5"
          >
            <Field label="الاسم الكامل" name="name" type="text" required />
            <Field label="البريد الإلكتروني" name="email" type="email" required />

            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">
                نوع الطلب
              </label>
              <select
                name="type"
                required
                className="w-full bg-black border border-border-line rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-blue transition-colors"
              >
                <option value="">اختر نوع الطلب</option>
                <option>مسح جيوفضائي</option>
                <option>دراسة جدوى</option>
                <option>إدارة مشروع</option>
                <option>أعمال إنشائية</option>
                <option>فرصة استثمارية</option>
                <option>أخرى</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">
                رسالتك
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-black border border-border-line rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-blue transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-pill btn-primary py-3 text-base disabled:opacity-60"
            >
              {submitting ? "جاري الإرسال..." : "أرسل طلبك"}
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <ContactRow icon={<MapPin size={18} />} label="المقر الرئيسي" value="دمشق، سوريا" />
              <ContactRow icon={<Globe size={18} />} label="الموقع" value="madaratgrop.com" />
              <ContactRow icon={<Mail size={18} />} label="البريد" value="info@madaratgrop.com" />
              <ContactRow icon={<Clock size={18} />} label="أوقات العمل" value="الأحد – الخميس، 9 صباحاً – 6 مساءً" />
            </div>

            <blockquote
              className="mt-10 pr-6 border-r-2"
              style={{ borderColor: "hsl(var(--accent-blue))" }}
            >
              <p
                className="text-2xl md:text-3xl font-bold leading-snug"
                style={{ color: "hsl(var(--accent-blue))" }}
              >
                «قبل أن تبني — اعرف أرضك»
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-black border border-border-line rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-blue transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 surface-card p-5">
      <div
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
        style={{
          background: "hsl(var(--accent-blue) / 0.15)",
          color: "hsl(var(--accent-blue))",
        }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-text-muted">{label}</div>
        <div className="text-sm text-foreground mt-0.5 font-medium">{value}</div>
      </div>
    </div>
  );
}

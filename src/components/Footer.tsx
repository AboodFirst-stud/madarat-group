const cols = [
  {
    title: "الخدمات",
    items: [
      "المسح الجوي بالدرون",
      "مسح LiDAR",
      "الخرائط الطبوغرافية",
      "التوثيق Scan to BIM",
      "دراسات الجدوى",
      "إدارة المشاريع",
      "أعمال الإنشاء",
    ],
  },
  {
    title: "الشركة",
    items: ["من نحن", "رؤيتنا ورسالتنا", "مشاريعنا", "الفرص الاستثمارية", "انضم لفريقنا"],
  },
  {
    title: "القطاعات",
    items: ["التخطيط العمراني", "البنية التحتية", "الطاقة", "الزراعة", "التراث والتوثيق"],
  },
  {
    title: "التواصل",
    items: ["دمشق، سوريا", "info@madaratgrop.com", "madaratgrop.com"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-line pt-16 pb-8" style={{ background: "hsl(0 0% 2%)" }}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-10 pb-12 border-b border-border-line">
          <div>
            {/* 📷 IMAGE_PLACEHOLDER: ضع رابط الشعار الكامل في الفوتر هنا */}
            <div className="text-2xl font-bold text-foreground">مدارات</div>
            <p className="text-text-secondary text-sm mt-2 max-w-md">
              مدارات — شريككم من الفكرة إلى التشغيل
            </p>
            <p className="text-text-muted text-xs mt-1 font-mono" dir="ltr">
              Madarat — From Idea to Operation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-foreground font-semibold text-sm mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-xs text-text-secondary hover:text-foreground transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center md:text-right">
            © 2025 مجموعة مدارات للاستثمار وإدارة المشاريع. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>
            </SocialIcon>
            <SocialIcon label="Twitter / X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialIcon>
            <SocialIcon label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-border-line flex items-center justify-center text-text-secondary hover:text-foreground hover:border-foreground/40 transition-colors"
    >
      {children}
    </a>
  );
}

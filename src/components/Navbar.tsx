import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  Map,
  BarChart2,
  Building2,
  Satellite,
  Landmark,
  TrendingUp,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type DropdownItem = { label: string; desc: string; href: string };
type DropdownGroup = {
  title: string;
  icon: LucideIcon;
  items: DropdownItem[];
};
type NavItem = {
  label: string;
  href: string;
  dropdown?: {
    description: string;
    groups: DropdownGroup[];
    cta: { label: string; href: string };
  };
};

const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  {
    label: "خدماتنا",
    href: "/services",
    dropdown: {
      description: "ثلاثة محاور متكاملة من المسح إلى التنفيذ",
      groups: [
        {
          title: "المسح الجيوفضائي",
          icon: Map,
          items: [
            { label: "المسح الجوي بالدرون", desc: "دقة سنتيمترية", href: "/services#drone" },
            { label: "مسح LiDAR الجوي", desc: "نمذجة تحت الغطاء النباتي", href: "/services#lidar" },
            { label: "الخرائط الطبوغرافية", desc: "تحليل GIS متكامل", href: "/services#gis" },
            { label: "Scan to CAD/BIM", desc: "توثيق معماري دقيق", href: "/services#bim" },
          ],
        },
        {
          title: "دراسة وإدارة المشاريع",
          icon: BarChart2,
          items: [
            { label: "دراسات الجدوى", desc: "تحليل ROI واقعي", href: "/services#feasibility" },
            { label: "إدارة المشاريع", desc: "إشراف ميداني يومي", href: "/services#pm" },
            { label: "تطوير الأعمال", desc: "ملفات استثمارية احترافية", href: "/services#biz" },
          ],
        },
        {
          title: "الإنشاء وإعادة الإعمار",
          icon: Building2,
          items: [
            { label: "إعادة تأهيل المباني", desc: "من التقييم إلى التسليم", href: "/services#rehab" },
            { label: "بناء المجمعات", desc: "سكنية وتجارية", href: "/services#construction" },
            { label: "البنية التحتية", desc: "طرق وشبكات ومرافق", href: "/services#infra" },
          ],
        },
      ],
      cta: { label: "عرض جميع الخدمات", href: "/services" },
    },
  },
  {
    label: "مشاريعنا",
    href: "/projects",
    dropdown: {
      description: "أعمال موثّقة بدقة سنتيمترية",
      groups: [
        {
          title: "مسوحات جيوفضائية",
          icon: Satellite,
          items: [
            { label: "مسح سهل الزبداني", desc: "2,700 هكتار — LiDAR + AI", href: "/projects#zabadani" },
            { label: "نهر بردى", desc: "مسح من المصب إلى المنبع", href: "/projects#barada" },
          ],
        },
        {
          title: "توثيق تراثي",
          icon: Landmark,
          items: [
            { label: "المدرج البصري الأثري", desc: "1,880 م² — موقع دولي", href: "/projects#bosra" },
          ],
        },
        {
          title: "دراسات جدوى",
          icon: TrendingUp,
          items: [
            { label: "معمل طباعة الكرتون", desc: "ROI: 42.6%", href: "/projects#carton" },
          ],
        },
      ],
      cta: { label: "عرض جميع المشاريع", href: "/projects" },
    },
  },
  {
    label: "الفرص الاستثمارية",
    href: "/investments",
    dropdown: {
      description: "دراسات مكتملة — نبحث عن شركاء ومستثمرين",
      groups: [
        {
          title: "فرص جاهزة",
          icon: Sprout,
          items: [
            { label: "الزراعة والتصدير", desc: "تغليف وتبريد وتصدير", href: "/investments#agri" },
            { label: "الثروة الحيوانية", desc: "تربية وصناعات تحويلية", href: "/investments#livestock" },
            { label: "الطاقة الشمسية", desc: "شراكة حكومية", href: "/investments#solar" },
            { label: "مشاريع زراعية متخصصة", desc: "مناطق سورية متعددة", href: "/investments#farming" },
          ],
        },
      ],
      cta: { label: "تحدث مع فريقنا الاستثماري", href: "/contact" },
    },
  },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

function MegaDropdown({ item }: { item: NavItem }) {
  if (!item.dropdown) return null;
  const { description, groups, cta } = item.dropdown;
  const colsClass =
    groups.length === 3 ? "grid-cols-3" : groups.length === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div
      className="absolute top-full right-0 mt-2 w-[680px] max-w-[95vw] rounded-2xl border border-border-line shadow-2xl overflow-hidden bg-card-bg animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Header */}
      <div
        className="px-6 py-4 border-b border-border-line"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--hero-overlay)) 0%, hsl(var(--card-bg)) 100%)",
        }}
      >
        <p className="text-sm text-text-secondary">{description}</p>
      </div>

      {/* Groups Grid */}
      <div className={`grid gap-0 ${colsClass}`}>
        {groups.map((group, gi) => {
          const Icon = group.icon;
          return (
            <div
              key={gi}
              className={`p-5 ${gi < groups.length - 1 ? "border-l border-border-line" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md flex items-center justify-center bg-accent-blue/15 text-accent-blue">
                  <Icon size={14} />
                </div>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  {group.title}
                </span>
              </div>
              <ul className="space-y-1">
                {group.items.map((it, ii) => (
                  <li key={ii}>
                    <Link
                      to={it.href}
                      className="block px-3 py-2 rounded-lg hover:bg-border-line/50 transition-colors group/item"
                    >
                      <div className="text-sm font-medium text-foreground group-hover/item:text-accent-blue transition-colors">
                        {it.label}
                      </div>
                      <div className="text-xs text-text-muted mt-0.5">{it.desc}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Footer */}
      <div className="px-6 py-3 border-t border-border-line flex justify-between items-center bg-section-alt">
        <Link
          to={cta.href}
          className="text-sm font-medium flex items-center gap-2 text-accent-red hover:opacity-80 transition-opacity"
        >
          {cta.label}
          <ArrowLeft size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setOpen(false);
    setMobileSubOpen(null);
  }, [location.pathname]);

  // Click outside to close
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border-line"
          : "bg-transparent"
      }`}
      style={{ height: 52 }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 right-0 h-[2px] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          background: "var(--gradient-progress)",
        }}
      />
      <div
        ref={navRef}
        className="container-wide h-full flex items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight shrink-0">
          {/* 📷 IMAGE_PLACEHOLDER: ضع رابط الشعار هنا (مثال: <img src="/images/logo.svg" />) */}
          <span className="text-[20px] font-bold text-foreground">مدارات</span>
          <span className="text-[11px] font-light text-text-secondary">
            للاستثمار وإدارة المشاريع
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isOpen = openDropdown === item.label;
            const isActive =
              item.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && handleEnter(item.label)}
                onMouseLeave={() => hasDropdown && handleLeave()}
              >
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] rounded-md transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
                {hasDropdown && isOpen && <MegaDropdown item={item} />}
              </div>
            );
          })}
        </nav>

        {/* CTA + Theme */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="hidden md:inline-flex btn-pill btn-primary">
            ابدأ مشروعك
          </Link>

          {/* Mobile menu trigger */}
          <button
            aria-label="فتح القائمة"
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — accordion */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border-line max-h-[calc(100vh-52px)] overflow-y-auto">
          <nav className="container-wide py-6 flex flex-col gap-2">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isSubOpen = mobileSubOpen === item.label;
              return (
                <div key={item.label} className="border-b border-border-line/50 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="text-base text-foreground/90 py-2 flex-1"
                    >
                      {item.label}
                    </Link>
                    {hasDropdown && (
                      <button
                        aria-label="فتح القائمة الفرعية"
                        onClick={() =>
                          setMobileSubOpen(isSubOpen ? null : item.label)
                        }
                        className="p-2 text-foreground/60"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {hasDropdown && isSubOpen && item.dropdown && (
                    <div className="pr-3 pt-1 pb-3 space-y-3">
                      {item.dropdown.groups.map((g, gi) => (
                        <div key={gi}>
                          <div className="text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wide">
                            {g.title}
                          </div>
                          <ul className="space-y-1">
                            {g.items.map((it, ii) => (
                              <li key={ii}>
                                <Link
                                  to={it.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-1.5 text-sm text-foreground/85"
                                >
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        to={item.dropdown.cta.href}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent-red mt-2"
                      >
                        {item.dropdown.cta.label}
                        <ArrowLeft size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-pill btn-primary self-start mt-3"
            >
              ابدأ مشروعك
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

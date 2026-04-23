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
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

/* ── بيانات القائمة ── */
const iconMap: Record<string, React.ReactNode> = {
  Map: <Map size={14} />,
  BarChart2: <BarChart2 size={14} />,
  Building2: <Building2 size={14} />,
  Satellite: <Satellite size={14} />,
  Landmark: <Landmark size={14} />,
  TrendingUp: <TrendingUp size={14} />,
  Sprout: <Sprout size={14} />,
};

type DropdownItem = { label: string; desc: string; href: string };
type DropdownGroup = {
  title: string;
  icon: keyof typeof iconMap;
  items: DropdownItem[];
};
type NavItem = {
  label: string;
  href: string;
  dropdown?: {
    desc: string;
    groups: DropdownGroup[];
    cta: { label: string; href: string };
  };
};

const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  {
    label: "خدماتنا",
    href: "/services",
    dropdown: {
      desc: "ثلاثة محاور متكاملة — من المسح إلى التنفيذ",
      groups: [
        {
          title: "المسح الجيوفضائي",
          icon: "Map",
          items: [
            { label: "المسح الجوي بالدرون", desc: "دقة سنتيمترية ونماذج 3D", href: "/services" },
            { label: "مسح LiDAR الجوي", desc: "نمذجة تحت الغطاء النباتي", href: "/services" },
            { label: "الخرائط الطبوغرافية", desc: "تحليل GIS متكامل", href: "/services" },
            { label: "Scan to CAD/BIM", desc: "توثيق معماري دقيق", href: "/services" },
          ],
        },
        {
          title: "دراسة وإدارة المشاريع",
          icon: "BarChart2",
          items: [
            { label: "دراسات الجدوى", desc: "تحليل ROI واقعي", href: "/services" },
            { label: "إدارة المشاريع", desc: "إشراف ميداني يومي", href: "/services" },
            { label: "تطوير الأعمال", desc: "ملفات استثمارية احترافية", href: "/services" },
          ],
        },
        {
          title: "الإنشاء وإعادة الإعمار",
          icon: "Building2",
          items: [
            { label: "إعادة تأهيل المباني", desc: "من التقييم إلى التسليم", href: "/services" },
            { label: "بناء المجمعات", desc: "سكنية وتجارية", href: "/services" },
            { label: "البنية التحتية", desc: "طرق وشبكات ومرافق", href: "/services" },
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
      desc: "أعمال موثّقة بدقة سنتيمترية ونتائج قابلة للقياس",
      groups: [
        {
          title: "مسوحات جيوفضائية",
          icon: "Satellite",
          items: [
            { label: "مسح سهل الزبداني", desc: "2,700 هكتار — LiDAR + AI", href: "/projects" },
            { label: "نهر بردى", desc: "مسح من المصب إلى المنبع", href: "/projects" },
          ],
        },
        {
          title: "توثيق تراثي",
          icon: "Landmark",
          items: [
            { label: "المدرج البصري الأثري", desc: "1,880 م² — موقع دولي", href: "/projects" },
          ],
        },
        {
          title: "دراسات جدوى منجزة",
          icon: "TrendingUp",
          items: [
            { label: "معمل طباعة الكرتون", desc: "ROI: 42.6%", href: "/projects" },
            { label: "معمل الكرتون ثلاثي الطبقات", desc: "ROI: 40.7%", href: "/projects" },
            { label: "مشروع المواصلات", desc: "ROI: 77.1%", href: "/projects" },
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
      desc: "دراسات مكتملة — نبحث عن شركاء ومستثمرين",
      groups: [
        {
          title: "فرص زراعية وغذائية",
          icon: "Sprout",
          items: [
            { label: "الزراعة والتصدير", desc: "نخيل، زيتون، تين، مشمش", href: "/investments" },
            { label: "الثروة الحيوانية", desc: "الغنم العواس — تربية وتصدير", href: "/investments" },
            { label: "مصانع غذائية", desc: "مرتديلا، شيبس، قهوة، كرتون", href: "/investments" },
          ],
        },
        {
          title: "فرص تجارية ولوجستية",
          icon: "TrendingUp",
          items: [
            { label: "الطاقة المتجددة", desc: "طاقة شمسية وريحية — شراكة حكومية", href: "/investments" },
            { label: "النقل والمواصلات", desc: "أسطول باصات — ROI: 77.1%", href: "/investments" },
            { label: "العقارات والبناء", desc: "إعادة إعمار وتطوير", href: "/investments" },
          ],
        },
      ],
      cta: { label: "تحدث مع فريقنا الاستثماري", href: "/contact" },
    },
  },
  { label: "تواصل معنا", href: "/contact" },
];

/* ── مكون الـ Dropdown ── */
function MegaDropdown({
  groups,
  desc,
  cta,
  onClose,
}: {
  groups: DropdownGroup[];
  desc: string;
  cta: { label: string; href: string };
  onClose: () => void;
}) {
  return (
    <div
      className="absolute top-full right-0 mt-1 rounded-2xl border border-border-line shadow-2xl overflow-hidden bg-card-bg"
      style={{
        width: groups.length >= 3 ? 680 : groups.length === 2 ? 480 : 320,
        maxWidth: "95vw",
        zIndex: 100,
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 border-b border-border-line"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand-deep)) 0%, hsl(var(--card-bg)) 100%)",
        }}
      >
        <p className="text-xs" style={{ color: "hsl(var(--footer-foreground) / 0.85)" }}>
          {desc}
        </p>
      </div>

      {/* Groups */}
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${groups.length}, 1fr)` }}
      >
        {groups.map((g, gi) => (
          <div
            key={gi}
            className={`p-4 ${gi < groups.length - 1 ? "border-l border-border-line" : ""}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-5 h-5 flex items-center justify-center rounded"
                style={{
                  color: "hsl(var(--accent-blue))",
                  background: "hsl(var(--accent-blue) / 0.13)",
                }}
              >
                {iconMap[g.icon]}
              </span>
              <span
                className="text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "hsl(var(--accent-blue))" }}
              >
                {g.title}
              </span>
            </div>
            <ul className="space-y-0.5">
              {g.items.map((it, ii) => (
                <li key={ii}>
                  <Link
                    to={it.href}
                    onClick={onClose}
                    className="block px-3 py-2 rounded-lg transition-colors group/item hover:bg-border-line/40"
                    style={{ direction: "rtl" }}
                  >
                    <div className="text-sm font-medium text-foreground group-hover/item:text-[hsl(var(--accent-blue))] transition-colors">
                      {it.label}
                    </div>
                    <div className="text-xs mt-0.5 text-text-muted">{it.desc}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="px-5 py-3 border-t border-border-line flex justify-between items-center"
        style={{ background: "hsl(var(--section-alt))" }}
      >
        <Link
          to={cta.href}
          onClick={onClose}
          className="text-sm font-semibold flex items-center gap-2 transition-opacity hover:opacity-80"
          style={{ color: "hsl(var(--accent-red))" }}
        >
          {cta.label}
          <ArrowLeft size={14} />
        </Link>
        <span className="text-xs text-text-muted">مجموعة مدارات</span>
      </div>
    </div>
  );
}

/* ── مكون Navbar الرئيسي ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const closeAll = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border-line"
          : "bg-transparent"
      }`}
      style={{ height: 52 }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-150 pointer-events-none"
        style={{
          width: `${progress}%`,
          background: "var(--gradient-progress)",
        }}
      />

      <div className="container-wide h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight shrink-0">
          {/* 📷 IMAGE_PLACEHOLDER: ضع رابط الشعار هنا */}
          <span
            className="text-[20px] font-bold"
            style={{ color: "hsl(var(--accent-blue))" }}
          >
            مدارات
          </span>
          <span className="text-[10px] font-light text-text-secondary">
            للاستثمار وإدارة المشاريع
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 mx-auto" dir="rtl">
          {navItems.map((item) => {
            const isOpen = openDropdown === item.label;
            const hasDropdown = !!item.dropdown;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => hasDropdown && handleMouseLeave()}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[13px] transition-colors hover:bg-border-line/40"
                  style={{
                    color: isOpen ? "hsl(var(--accent-blue))" : undefined,
                  }}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </Link>

                {hasDropdown && isOpen && item.dropdown && (
                  <MegaDropdown
                    groups={item.dropdown.groups}
                    desc={item.dropdown.desc}
                    cta={item.dropdown.cta}
                    onClose={closeAll}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA + Theme + Burger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-pill btn-primary text-sm"
          >
            ابدأ مشروعك
          </Link>
          <button
            aria-label="فتح القائمة"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Accordion */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border-line"
          style={{
            background: "hsl(var(--background))",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <nav className="container-wide py-4 flex flex-col gap-1" dir="rtl">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 px-3 py-2.5 rounded-lg text-base text-foreground hover:bg-border-line/30 transition-colors"
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-label="فتح القائمة الفرعية"
                        className="p-2 text-foreground/60"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                      >
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200"
                          style={{
                            transform:
                              mobileExpanded === item.label
                                ? "rotate(180deg)"
                                : "rotate(0)",
                          }}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.label && (
                      <div className="pr-4 pb-2 space-y-3">
                        {item.dropdown.groups.map((g, gi) => (
                          <div key={gi}>
                            <div
                              className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1"
                              style={{ color: "hsl(var(--accent-blue))" }}
                            >
                              {g.title}
                            </div>
                            {g.items.map((it, ii) => (
                              <Link
                                key={ii}
                                to={it.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-1.5 text-sm text-foreground/80 hover:text-foreground rounded-lg hover:bg-border-line/20 transition-colors"
                              >
                                {it.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={item.dropdown.cta.href}
                          onClick={() => setMobileOpen(false)}
                          className="inline-flex items-center gap-2 text-sm font-medium mt-2 px-3"
                          style={{ color: "hsl(var(--accent-red))" }}
                        >
                          {item.dropdown.cta.label}
                          <ArrowLeft size={14} />
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-base text-foreground/90 hover:text-foreground hover:bg-border-line/30 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-pill btn-primary self-start mt-2"
            >
              ابدأ مشروعك
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

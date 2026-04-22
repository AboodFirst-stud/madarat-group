import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#projects", label: "مشاريعنا" },
  { href: "#investments", label: "الفرص الاستثمارية" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border-line"
          : "bg-transparent"
      }`}
      style={{ height: 52 }}
    >
      {/* Scroll Progress Bar (N) */}
      <div
        className="absolute bottom-0 right-0 h-[2px] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          background: "var(--gradient-progress)",
        }}
      />
      <div className="container-wide h-full flex items-center justify-between gap-6">
        {/* Logo (right in RTL) */}
        <a href="#top" className="flex flex-col leading-tight shrink-0">
          {/* 📷 IMAGE_PLACEHOLDER: ضع رابط الشعار هنا (مثال: <img src="/images/logo.svg" />) */}
          <span className="text-[20px] font-bold text-foreground">مدارات</span>
          <span className="text-[11px] font-light text-text-secondary">
            للاستثمار وإدارة المشاريع
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 mx-auto">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-foreground/85 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Theme */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex btn-pill btn-primary"
          >
            ابدأ مشروعك
          </a>

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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border-line">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-pill btn-primary self-start"
            >
              ابدأ مشروعك
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import Investments from "@/components/Investments";
import Sectors from "@/components/Sectors";
import WhyMadarat from "@/components/WhyMadarat";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * 📷 ===== دليل إضافة الصور =====
 * في كل مكان يمكن إضافة صورة فيه ستجد تعليقاً موحداً بهذا الشكل:
 *   { /* 📷 IMAGE_PLACEHOLDER: ضع رابط الصورة هنا (مثال: <img src="/images/your-image.jpg" />) *\/ }
 *
 * كيفية الاستخدام:
 *   1) ضع ملفات الصور في مجلد:  public/images/
 *   2) استبدل التعليق بسطر مثل:
 *      <img src="/images/hero.jpg" alt="وصف الصورة" className="..." />
 *
 * المواقع التي تنتظر صوراً:
 *   - Navbar.tsx        → الشعار
 *   - Hero.tsx          → خلفية الهيرو
 *   - About.tsx         → صورة الفريق / المكتب
 *   - Services.tsx      → صورة لكل محور (3 محاور)
 *   - Methodology.tsx   → صورة لكل خطوة (6 خطوات)
 *   - Projects.tsx      → صورة لكل مشروع (4 مشاريع)
 *   - Investments.tsx   → أيقونة لكل فرصة (4 فرص)
 *   - WhyMadarat.tsx    → صورة لكل ميزة (3 ميزات)
 *   - Footer.tsx        → الشعار الكامل
 */
const Index = () => {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Vision />
        <Services />
        <Methodology />
        <Projects />
        <Investments />
        <Sectors />
        <WhyMadarat />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

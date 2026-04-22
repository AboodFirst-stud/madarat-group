import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import WhyMadarat from "@/components/WhyMadarat";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="من نحن"
        title="مدارات للاستثمار وإدارة المشاريع"
        subtitle="مجموعة سورية متخصصة في تمكين إعادة الإعمار بالبيانات الجيوفضائية وإدارة المشاريع"
      />
      <About />
      <Vision />
      <WhyMadarat />
    </PageLayout>
  );
}

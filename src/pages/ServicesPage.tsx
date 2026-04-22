import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ماذا نقدم"
        title="خدماتنا"
        subtitle="ثلاثة محاور متكاملة من المسح الجيوفضائي إلى التنفيذ وإعادة الإعمار"
      />
      <Services />
      <Methodology />
    </PageLayout>
  );
}

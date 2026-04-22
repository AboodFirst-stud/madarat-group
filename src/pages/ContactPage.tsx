import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="نحن هنا"
        title="تواصل معنا"
        subtitle="ابدأ مشروعك معنا — فريقنا جاهز للرد خلال 24 ساعة"
      />
      <Contact />
    </PageLayout>
  );
}

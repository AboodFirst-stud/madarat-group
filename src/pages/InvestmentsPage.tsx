import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Investments from "@/components/Investments";

export default function InvestmentsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="فرص جاهزة"
        title="الفرص الاستثمارية"
        subtitle="دراسات مكتملة — نبحث عن شركاء ومستثمرين لتحويلها إلى واقع"
      />
      <Investments />
    </PageLayout>
  );
}

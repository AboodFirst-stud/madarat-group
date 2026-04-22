import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import Sectors from "@/components/Sectors";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="أعمالنا"
        title="مشاريعنا"
        subtitle="أعمال موثّقة بدقة سنتيمترية في المسح الجيوفضائي والتوثيق التراثي ودراسات الجدوى"
      />
      <Projects />
      <Sectors />
    </PageLayout>
  );
}

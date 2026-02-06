import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <ServicesPreview />
      <ProjectsShowcase />
      <StatsSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ValueProps } from "@/components/home/ValueProps";
import { ToolsTeaser } from "@/components/home/ToolsTeaser";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { NotableProjects } from "@/components/home/NotableProjects";
import { DesignStyles } from "@/components/home/DesignStyles";
import { Testimonials } from "@/components/home/Testimonials";
import { Locations } from "@/components/home/Locations";
import { MediaCoverage } from "@/components/home/MediaCoverage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ValueProps />
      <ToolsTeaser />
      <ProcessSteps />
      <ServicesGrid />
      <NotableProjects />
      <DesignStyles />
      <Testimonials />
      <Locations />
      <MediaCoverage />
    </>
  );
}

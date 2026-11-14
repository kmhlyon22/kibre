import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectVideoDialog } from "@/components/projects/ProjectVideoDialog";

import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <SectionEyebrow>Recent Works</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-heading mb-3">
              Our Past Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Real solutions we've built for real businesses
            </p>
          </div>
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onWatch={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectVideoDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

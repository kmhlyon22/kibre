import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onWatch: (project: Project) => void;
};

export function ProjectCard({ project, onWatch }: ProjectCardProps) {
  return (
    <article className="project-card group flex h-full flex-col rounded-lg border p-4 sm:p-5 transition-all duration-300 motion-safe:hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-md border border-border bg-muted">
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
          className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="project-category mb-2 text-xs font-bold uppercase leading-relaxed">{project.category}</p>
        <h3 className="mb-3 text-xl font-bold leading-snug text-heading">{project.title}</h3>
        <p className="project-description mb-5 text-sm leading-7">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2">
          {project.link && (
            <Button asChild variant="link" className="project-action h-auto justify-start whitespace-normal p-0 text-sm font-bold">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View live project <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          )}
          {project.screenrecording && (
            <Button variant="link" onClick={() => onWatch(project)} className="project-action h-auto justify-start whitespace-normal p-0 text-sm font-bold">
              Watch screenrecording <Play aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
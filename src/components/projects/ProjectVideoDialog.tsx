import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

export function ProjectVideoDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="w-[95vw] max-w-5xl overflow-hidden">
        <DialogTitle>{project?.title}</DialogTitle>
        <DialogDescription>Project screenrecording</DialogDescription>
        {project?.screenrecording && (
          <video key={project.id} src={project.screenrecording} controls autoPlay className="max-h-[75vh] w-full rounded-md bg-navy">
            Your browser does not support video playback.
          </video>
        )}
      </DialogContent>
    </Dialog>
  );
}
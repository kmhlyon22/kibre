import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Import project thumbnails
import churrosThumb from "@/assets/projects/churros-thumb.png";
import sunnyThumb from "@/assets/projects/sunny-thumb.png";
import uconThumb from "@/assets/projects/ucon-thumb.png";
import yonasThumb from "@/assets/projects/yonas-thumb.jpg";
import amenThumb from "@/assets/projects/amen-thumb-new.jpg";
import sfkThumb from "@/assets/projects/sfk-thumb.jpg";
import honeybadgerThumb from "@/assets/projects/honeybadger-thumb-new.jpg";
import fiandimoThumb from "@/assets/projects/fiandimo-thumb.png";

// Project data with screenrecordings
const projects = [
  {
    id: 1,
    title: "Mr. & Mrs. Churros",
    category: "Website",
    thumbnail: churrosThumb,
    screenrecording: "/recordings/churros.mp4",
  },
  {
    id: 2,
    title: "Sunny Side Hotel",
    category: "Website",
    thumbnail: sunnyThumb,
    screenrecording: "/recordings/sunny-side.mp4",
  },
  {
    id: 3,
    title: "United Construction",
    category: "Website",
    thumbnail: uconThumb,
    screenrecording: "/recordings/united-construction.mp4",
  },
  {
    id: 4,
    title: "Yonas Chercher",
    category: "Website",
    thumbnail: yonasThumb,
    screenrecording: "/recordings/yonas-chercher.mp4",
  },
  {
    id: 5,
    title: "Amen Car Dealership",
    category: "Website",
    thumbnail: amenThumb,
    screenrecording: "/recordings/amen.mp4",
  },
  {
    id: 6,
    title: "SFK Sports Group",
    category: "Website",
    thumbnail: sfkThumb,
    screenrecording: "/recordings/sfk.mp4",
  },
  {
    id: 7,
    title: "Honey Badger Courses",
    category: "Mobile App",
    thumbnail: honeybadgerThumb,
    screenrecording: "/recordings/honey-badger.mp4",
    inProgress: true,
  },
  {
    id: 8,
    title: "Fiandimo Aquadrill",
    category: "Website",
    thumbnail: fiandimoThumb,
    screenrecording: "/recordings/fiandimo.mp4",
  },
];

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openProject = (project: typeof projects[0]) => {
    if (project.screenrecording) {
      setSelectedProject(project);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-sky-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-sky-400/30 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-primary/15 rounded-full animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <SectionEyebrow>Recent Works</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-3">
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

        {/* Vertical Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 card-hover bg-card opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail Image */}
              <div className="h-[280px] bg-secondary overflow-hidden relative">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <span className="text-muted-foreground">Coming Soon</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent group-hover:from-navy/90 transition-all duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.inProgress && (
                    <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full animate-pulse">
                      In Progress
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.screenrecording ? (
                  <button
                    onClick={() => openProject(project)}
                    className="text-primary text-sm inline-block group-hover:underline cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    Click to view screenrecording →
                  </button>
                ) : (
                  <span className="text-white/50 text-sm inline-block">
                    Screenrecording coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screenrecording Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProject()}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title} Screenrecording
          </DialogTitle>
          <DialogDescription className="sr-only">
            View screenrecording of the {selectedProject?.title} project
          </DialogDescription>
          
          {selectedProject && selectedProject.screenrecording && (
            <div className="relative">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex gap-2 mb-1">
                      <span className="text-primary text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      {selectedProject.inProgress && (
                        <span className="text-amber-400 text-sm font-medium">
                          • In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-white text-xl font-semibold">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeProject}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative bg-black min-h-[60vh] flex items-center justify-center pt-16">
                <video
                  src={selectedProject.screenrecording}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh]"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

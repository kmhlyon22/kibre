import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, ExternalLink } from "lucide-react";
import projectsHeroImage from "@/assets/illustrations/projects-hero.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";
// Import project thumbnails
import { projects } from "@/data/projects";

export default function Projects() {
  const isApp = (c: string) => /SaaS|ERP|Platform/i.test(c);
  const websiteCount = projects.filter(p => !isApp(p.category)).length;
  const appCount = projects.filter(p => isApp(p.category)).length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero pt-20 pb-32 lg:pt-28 lg:pb-44 overflow-hidden relative">
        {/* Floating Tech Elements - colorful background illustrations */}
        <FloatingTechElements className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
                Our Projects
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {projects.length} projects for real clients. Each one solved a specific 
                business problem with a custom solution.
              </p>
              <div className="flex justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-medium">{websiteCount} Websites</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="font-medium">{appCount} Apps &amp; Platforms</span>
                </div>
              </div>
            </div>
            {/* Illustration - visible on all screens, below text on mobile */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-sky-light/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={projectsHeroImage} 
                  alt="Projects illustration" 
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-float-subtle mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover opacity-0 animate-slide-up relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Tech Network Background */}
                  
                  <h3 className="text-xl font-semibold text-heading mb-2 group-hover:text-primary transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 relative z-10">
                    {project.description}
                  </p>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                      Visit live site <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
              Your Project Could Be Next
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every project starts with a conversation. Let's discuss your goals 
              and see if we're the right fit.
            </p>
            <Button asChild variant="hero" size="xl" className="hover:scale-105 transition-transform">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { serviceDetails, ServiceSlug } from "@/data/service-details";
import { projects } from "@/data/projects";
import websiteImage from "@/assets/illustrations/services-hero.webp";
import erpImage from "@/assets/illustrations/connected-erp-hero.webp";
import appImage from "@/assets/illustrations/projects-hero.webp";

const images = { websites: websiteImage, erp: erpImage, apps: appImage };

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = serviceDetails[slug];
  const examples = projects.filter(project => (service.projectIds as readonly number[]).includes(project.id));

  return (
    <Layout>
      <section className="bg-hero relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link><span aria-hidden="true">/</span>
            <Link to="/services" className="hover:text-primary">Services</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{service.serviceType}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionEyebrow>{service.eyebrow}</SectionEyebrow>
              <h1 className="text-4xl md:text-5xl font-bold text-heading leading-tight mb-6">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.intro}</p>
              <Button asChild variant="hero" size="lg"><Link to="/contact">Discuss Your Project<ArrowRight className="w-5 h-5" /></Link></Button>
            </div>
            <img src={images[service.image]} alt="Connected digital systems illustrating our development services" fetchPriority="high" loading="eager" decoding="async" width={1000} height={760} className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-heading mb-6">{service.overview}</h2>
            {service.paragraphs.map(paragraph => <p key={paragraph} className="text-muted-foreground leading-relaxed mb-5">{paragraph}</p>)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-heading mb-6">What we can build</h2>
            <ul className="space-y-5">
              {service.features.map(feature => <li key={feature} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary mt-0.5" />{feature}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-heading mb-4">{service.projectHeading}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">{service.projectIntro}</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {examples.map(project => <ProjectCard key={project.id} project={project} onWatch={() => undefined} />)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-heading mb-5">Plan your project with our Addis Ababa team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.scope}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero"><Link to="/contact">Get a Free Consultation<ArrowRight className="w-4 h-4" /></Link></Button>
            <Button asChild variant="outline"><Link to="/projects">View All Projects</Link></Button>
          </div>
          <nav aria-label="Related services" className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {Object.entries(serviceDetails).filter(([key]) => key !== slug).map(([key, detail]) => <Link key={key} to={`/${key}`} className="text-primary font-medium underline underline-offset-4">{detail.title}</Link>)}
          </nav>
        </div>
      </section>
    </Layout>
  );
}
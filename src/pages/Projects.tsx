import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, ExternalLink } from "lucide-react";
import projectsHeroImage from "@/assets/illustrations/projects-hero.png";
import { TechNetworkBackground } from "@/components/ui/tech-network-background";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";
// Import project thumbnails
import churrosThumb from "@/assets/projects/churros-thumb.png";
import sunnyThumb from "@/assets/projects/sunny-thumb.png";
import uconThumb from "@/assets/projects/ucon-thumb.png";
import yonasThumb from "@/assets/projects/yonas-thumb.jpg";
import amenThumb from "@/assets/projects/amen-thumb.png";
import sfkThumb from "@/assets/projects/sfk-thumb.jpg";
import honeybadgerThumb from "@/assets/projects/honeybadger-thumb.jpg";
import schoolThumb from "@/assets/projects/school-thumb.jpg";
import gymThumb from "@/assets/projects/gym-thumb.jpg";
import medicalThumb from "@/assets/projects/medical-thumb.jpg";
import afrotattooThumb from "@/assets/projects/afrotattoo-thumb.jpg";
import kmgThumb from "@/assets/projects/kmg-thumb.jpg";
import gospelThumb from "@/assets/projects/gospel-thumb.jpg";

const projects = [
  {
    id: 1,
    title: "Mr. & Mrs. Churros",
    type: "website",
    category: "E-Commerce",
    description: "Premium e-commerce platform with stunning visual design for Ethiopia's beloved pastry brand.",
    problem: "Needed an online presence that matched their premium brand identity and enabled seamless online ordering",
    solution: "Built a visually striking website with custom graphics, smooth animations, and integrated ordering system",
    image: churrosThumb,
  },
  {
    id: 2,
    title: "Sunny Side Hotel",
    type: "website",
    category: "Hospitality",
    description: "Elegant hotel booking platform with seamless reservation system and immersive guest experience.",
    problem: "Required a modern booking system to handle reservations and showcase their property effectively",
    solution: "Developed a sophisticated booking platform with room availability, date selection, and location integration",
    image: sunnyThumb,
  },
  {
    id: 3,
    title: "United Construction",
    type: "website",
    category: "Corporate",
    description: "Professional corporate website for Ethiopia's leading Grade 1 construction company.",
    problem: "Needed to establish credibility and showcase their portfolio to attract major contracts",
    solution: "Created a professional corporate site highlighting their Grade 1 status, project gallery, and capabilities",
    image: uconThumb,
    link: "https://unitedconstruction.company/",
  },
  {
    id: 4,
    title: "Yonas Chercher",
    type: "website",
    category: "Restaurant",
    description: "Authentic digital presence for Ethiopia's renowned traditional restaurant specializing in kitfo and raw meat.",
    problem: "Wanted to attract more customers and establish their reputation as a premier dining destination",
    solution: "Built an appetizing website with menu showcase, location info, and cultural storytelling",
    image: yonasThumb,
    link: "https://yonaschercher.et/",
  },
  {
    id: 5,
    title: "Amen Car Dealership",
    type: "website",
    category: "Automotive",
    description: "Modern car showroom platform with intuitive vehicle browsing and inquiry system.",
    problem: "Needed a professional platform to display inventory and generate quality leads",
    solution: "Developed a sleek showroom website with vehicle listings, specifications, and easy inquiry forms",
    image: amenThumb,
  },
  {
    id: 6,
    title: "SFK Sports Group",
    type: "website",
    category: "Sports",
    description: "Football talent registration platform built for a UK-based sports recruitment company.",
    problem: "Required a streamlined system to discover and register football talent from Ethiopia",
    solution: "Created a registration platform with player profiles, trial scheduling, and recruitment pipeline",
    image: sfkThumb,
  },
  {
    id: 7,
    title: "Honey Badger Courses",
    type: "app",
    category: "Mobile App",
    description: "Course marketplace app with seamless learning experience — currently in development by our team.",
    problem: "Needed a mobile-first platform for course creators to sell and deliver educational content",
    solution: "Building a feature-rich app with course browsing, purchases, and in-app learning experience",
    image: honeybadgerThumb,
    inProgress: true,
    link: "https://honeybadger.et/",
  },
  { id: 8, title: "HB School Management System", type: "app", category: "SaaS", link: "https://project-qi8ab.vercel.app/", image: schoolThumb, inProgress: true,
    description: "School management platform for students, classes, attendance and academic records.",
    problem: "Schools needed one place to run daily operations instead of paper and spreadsheets",
    solution: "Building a role-based system for administrators and teachers with attendance, marks and fees" },
  { id: 9, title: "HB Gym Management System", type: "app", category: "SaaS", link: "https://swift-gym-sync.lovable.app/", image: gymThumb, inProgress: true,
    description: "Gym management platform for members, memberships, subscriptions, payments and attendance.",
    problem: "Gyms struggled to track memberships, renewals and payments manually",
    solution: "Building a dashboard that automates subscriptions, check-ins and payment tracking" },
  { id: 10, title: "United Secured Medical Transport", type: "website", category: "Healthcare", link: "https://united-website-teal.vercel.app/", image: medicalThumb,
    description: "Professional website for a medical transportation company.",
    problem: "Needed a trustworthy online presence to reach patients and healthcare partners",
    solution: "Designed a clean, credible site presenting services, coverage and easy contact" },
  { id: 11, title: "Afro Tattoo Studio", type: "website", category: "Creative", link: "https://afrotattoo.com/", image: afrotattooThumb,
    description: "Modern website for a tattoo studio showcasing artwork, services and the brand.",
    problem: "Needed a stylish way to show off artwork and turn visitors into bookings",
    solution: "Built a dark, artistic site with a gallery, testimonials and WhatsApp booking" },
  { id: 12, title: "KMG Engineering", type: "website", category: "Engineering", link: "https://kmgelectricalandsanitary.com/", image: kmgThumb,
    description: "Professional digital presence for an electrical and sanitary engineering company.",
    problem: "Needed to present capabilities and past work to win new contracts",
    solution: "Created a corporate site highlighting services, projects and contact channels" },
  { id: 13, title: "Gospel Light Missionary Company", type: "website", category: "Organization", link: "https://gospel-light-website-main.vercel.app/", image: gospelThumb,
    description: "Professional online presence for a missionary organization.",
    problem: "Needed a welcoming place online to share their mission and connect with supporters",
    solution: "Designed a warm, clear site presenting their mission, activities and ways to get involved" },
];

export default function Projects() {
  const websiteCount = projects.filter(p => p.type === "website").length;
  const appCount = projects.filter(p => p.type === "app").length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20 lg:py-28 overflow-hidden relative">
        {/* Floating Tech Elements - colorful background illustrations */}
        <FloatingTechElements className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
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
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-float-subtle transition-transform duration-500 group-hover:scale-105"
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
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    {project.inProgress && (
                      <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Tech Network Background */}
                  <TechNetworkBackground variant="compact" className="!inset-0" />
                  
                  <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-primary transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 relative z-10">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="space-y-3 mb-4 relative z-10">
                    <div className="text-sm">
                      <span className="text-navy font-medium">Challenge: </span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-primary font-medium">Solution: </span>
                      <span className="text-muted-foreground">{project.solution}</span>
                    </div>
                  </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dashboardVisual from "@/assets/dashboard-visual.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";


export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-hero pb-16 lg:pb-24">
            {/* Background Pattern */}

            {/* Floating Tech Elements */}
            <FloatingTechElements
                variant="dense"
                className="opacity-60 lg:opacity-100"
            />

            <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>
                                Trusted by Ethiopia’s Growing Businesses
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl font-bold text-heading leading-tight mb-4">
                            United Tech{" "}
                            <span style={{ color: "#8B5A2B" }}>Ethiopia</span>
                        </h1>

                        <h2 className="text-2xl md:text-4xl font-bold text-heading leading-snug mb-6">
                            The best <span className="text-primary">website, mobile app and ERP system</span> developers in Addis Ababa, Ethiopia.
                        </h2>

                        {/* Subheadline */}
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                            We help Ethiopian businesses automate operations and
                            build modern digital products that scale with your
                            growth.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild variant="hero" size="lg">
                                <a
                                    href="https://united_kmh.t.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get a Free Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button asChild variant="heroOutline" size="lg">
                                <Link to="/projects">View Our Work</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual */}
                    <div>
                        <img
                            src={dashboardVisual}
                            alt="Dashboard visualization showing analytics and data management"
                            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto mix-blend-multiply"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

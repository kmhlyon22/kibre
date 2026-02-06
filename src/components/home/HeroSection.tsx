import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.png";
import dashboardVisual from "@/assets/dashboard-visual.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";

const heroList = ["ERP Systems", "Website Development", "Mobile Apps"];

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url(${heroPattern})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

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
                        <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight mb-4">
                            United Tech{" "}
                            <span className="text-green-600">Ethiopia</span>
                        </h1>

                        {/* ERP / Website / Apps List as H1 */}
                        <div className="flex flex-col gap-3 mb-4">
                            {heroList.map((item) => (
                                <h1
                                    key={item}
                                    className="flex items-center gap-3 text-black text-4xl md:text-5xl font-bold"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-black" />
                                    {item}
                                </h1>
                            ))}
                        </div>

                        {/* For Growing Businesses */}
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0d96da] mb-4">
                            for Growing Businesses
                        </h1>

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
                            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

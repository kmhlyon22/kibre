import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardVisual from "@/assets/illustrations/connected-erp-hero.webp";


export function HeroSection() {
    return (
        <section className="home-hero relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24 relative z-10">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        {/* Trust Badge */}
                        <p className="text-sm font-semibold text-primary mb-5">Trusted by Ethiopia’s Growing Businesses</p>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-5 text-balance">
                            United Tech{" "}
                            <span className="hero-earth">Ethiopia</span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-heading leading-relaxed mb-5 text-balance">
                            Professional <span className="text-primary">website, mobile app and ERP system</span> development in Addis Ababa, Ethiopia.
                        </p>

                        {/* Subheadline */}
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                            We’re a software company in Addis Ababa serving businesses across Ethiopia.
                            Our tailored digital solutions streamline operations, strengthen your
                            online presence, and support lasting business growth.
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
                        <img fetchPriority="high" loading="eager" decoding="async" width={1000} height={760}
                            src={dashboardVisual}
                            alt="Connected ERP platform with inventory, analytics, mobile, website and cloud systems"
                            className="relative w-full max-w-sm sm:max-w-lg lg:max-w-none mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

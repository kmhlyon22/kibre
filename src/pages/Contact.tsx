import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  Clock,
  Shield,
  Headphones
} from "lucide-react";
import { z } from "zod";
import contactHeroImage from "@/assets/illustrations/contact-hero.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";
import { TechNetworkBackground } from "@/components/ui/tech-network-background";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours.",
  },
  {
    icon: Shield,
    title: "No Pressure",
    description: "Just a friendly conversation about your needs.",
  },
  {
    icon: Headphones,
    title: "Expert Advice",
    description: "Get honest recommendations, even if we're not the right fit.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof typeof fieldErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Open email client with form data
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:unitedtechnologieseth@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Opening email client...",
      description: "Complete sending your message in your email app.",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in discussing a project with United Tech.");
    window.open(`https://wa.me/251911517680?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero pt-20 pb-32 lg:pt-28 lg:pb-44 overflow-hidden relative">
        {/* Floating Tech Elements - visible on all screens */}
        <FloatingTechElements variant="minimal" className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Let's Discuss Your Project
              </h1>
              <p className="text-lg text-muted-foreground">
                Have an idea? Need a solution? Just want to chat? We're here to help. 
                No pressure, no obligations—just a conversation.
              </p>
            </div>
            {/* Illustration - visible on all screens, below text on mobile */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-sky-light/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={contactHeroImage} 
                  alt="Contact illustration" 
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md animate-float-subtle transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3 opacity-0 animate-slide-up">
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card card-hover relative overflow-hidden">
                  {/* Tech Network Background */}
                  <TechNetworkBackground variant="wide" />
                  
                  {isSubmitted ? (
                    <div className="text-center py-12 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-glow">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-navy mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="hover:scale-105 transition-transform">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="opacity-0 animate-fade-in stagger-1">
                        <Label htmlFor="name" className="text-navy font-medium">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=""
                          className={`mt-2 input-glow transition-all duration-300 ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div className="opacity-0 animate-fade-in stagger-2">
                        <Label htmlFor="email" className="text-navy font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=""
                          className={`mt-2 input-glow transition-all duration-300 ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="opacity-0 animate-fade-in stagger-3">
                        <Label htmlFor="message" className="text-navy font-medium">
                          Tell Us About Your Project
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder=""
                          rows={5}
                          className={`mt-2 resize-none input-glow transition-all duration-300 ${errors.message ? 'border-destructive' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <div className="opacity-0 animate-fade-in stagger-4">
                        <Button 
                          type="submit" 
                          variant="hero" 
                          size="lg" 
                          className="w-full hover:scale-[1.02] transition-transform"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-8 opacity-0 animate-slide-up stagger-2">
                {/* Benefits */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit.title} 
                      className={`flex gap-4 group opacity-0 animate-fade-in`}
                      style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alternative Contact */}
                <div className="bg-secondary/50 rounded-2xl p-6 opacity-0 animate-fade-in stagger-4">
                  <h3 className="font-semibold text-navy mb-4">
                    Prefer to Talk Directly?
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleWhatsApp}
                      className="flex items-center gap-3 w-full p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-300 text-left hover:scale-[1.02] hover:shadow-md"
                    >
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      <span className="text-sm font-medium text-navy">
                        Chat on WhatsApp
                      </span>
                    </button>
                    <a
                      href="https://united_kmh.t.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full p-3 rounded-lg bg-[#0088cc]/10 hover:bg-[#0088cc]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                    >
                      <Send className="w-5 h-5 text-[#0088cc]" />
                      <span className="text-sm font-medium text-navy">
                        Message on Telegram
                      </span>
                    </a>
                    <a
                      href="mailto:unitedtechnologieseth@gmail.com"
                      className="flex items-center gap-3 w-full p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-navy">
                        unitedtechnologieseth@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

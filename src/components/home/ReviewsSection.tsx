import { Star, Quote } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import afroTattooLogo from "@/assets/clients/afro-tattoo-logo.png";
import honeyBadgerLogo from "@/assets/clients/honey-badger-logo-new.png";
import kmgLogo from "@/assets/clients/kmg-logo.png";

const MAPS_URL = "https://maps.app.goo.gl/aChkWngdQGw49bRq9";

const reviews = [
  { name: "Kaleab Solomon", role: "Owner, Afro Tattoo Studio", logo: afroTattooLogo, text: "As the owner of Afro Tattoo Studio in Addis Ababa, I cannot highly recommend Kibreab and the United Tech team enough. They built a top-notch, visually stunning website for us with incredible SEO performance." },
  { name: "HoneyBadger Ethiopia", role: "HoneyBadger Courses", logo: honeyBadgerLogo, text: "United Tech built our course selling platform. They are very professional and skilled. I definitely recommend them. They are the best software company in Ethiopia!" },
  { name: "KMG Smart Maintenance", role: "Owner, KMG Electrical & Sanitary Group", logo: kmgLogo, text: "United Tech built a quality website for us — definitely recommend it. One of the best software companies in Addis Ababa, Ethiopia." },
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionEyebrow>Client Reviews</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-3 mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
            <span className="font-semibold text-heading">5.0</span>
            <span>· 14 Google reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/15" />
              <div className="flex mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-foreground/80 mb-6 leading-relaxed">“{r.text}”</p>
              <div className="flex items-center gap-3">
                <img src={r.logo} alt={r.name} loading="lazy" className="w-12 h-12 rounded-full object-contain bg-card border border-border p-1" />
                <div>
                  <p className="font-semibold text-heading">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">See all reviews on Google →</a>
        </div>
      </div>
    </section>
  );
}

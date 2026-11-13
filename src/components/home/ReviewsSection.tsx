import { Star, Quote } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const MAPS_URL = "https://maps.app.goo.gl/aChkWngdQGw49bRq9";

const reviews = [
  { name: "KMG Smart Maintenance", role: "Owner, KMG Electrical & Sanitary Group", text: "United Tech built a quality website for us — definitely recommend it. One of the best software companies in Addis Ababa, Ethiopia." },
  { name: "Amanuel Tadesse", role: "Google review", text: "Best talented man and best software developer I have met." },
  { name: "Fresh Prince", role: "Google review", text: "Truly astonishing. I definitely recommend it." },
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
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">{r.name[0]}</div>
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

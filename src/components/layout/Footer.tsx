import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/united-tech-logo.jpg";
import worldMap from "@/assets/illustrations/world-map-golden.webp";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "ERP Systems", href: "/services#erp" },
    { name: "Website Development", href: "/services#websites" },
    { name: "App Development", href: "/services#apps" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-primary-foreground">
      {/* Golden world map background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <img
          src={worldMap}
          alt=""
          loading="lazy"
          width={1920}
          height={1024}
          className="w-full max-w-5xl object-contain opacity-25"
        />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="United Tech" className="w-10 h-10 rounded-lg object-contain bg-white" />
              <span className="font-semibold text-lg">United Tech</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Building reliable ERP systems, websites, and apps for growing businesses.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:unitedtechnologieseth@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  unitedtechnologieseth@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/251911517680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  +251 911 517 680
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} United Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-primary-foreground/70 font-medium">
                7 Completed Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

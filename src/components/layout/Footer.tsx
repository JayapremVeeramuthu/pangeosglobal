import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    brands: [
      { label: "PANGEOS - Men's", path: "/brands/pangeos" },
      { label: "GO SMILEY - Women's", path: "/brands/go-smiley" },
      { label: "KIDS VIBE - Children's", path: "/brands/kids-vibe" },
      { label: "SOFTOUCH COZY - Winter", path: "/brands/softouch-cozy" },
    ],
    company: [
      { label: "About Us", path: "/about/intent" },
      { label: "Quality Policy", path: "/about/quality-policy" },
      { label: "Social Responsibility", path: "/about/social-responsibility" },
      { label: "Careers", path: "/careers" },
    ],
    services: [
      { label: "Corporate Wear", path: "/customized-wear/corporate" },
      { label: "School Uniforms", path: "/customized-wear/school" },
      { label: "Promotional Wear", path: "/customized-wear/promotion" },
      { label: "Medical Apparel", path: "/customized-wear/medical" },
    ],
  };

  return (
    <footer className="footer-corporate">
      {/* Brand Philosophy Bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-corporate py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg md:text-xl font-heading font-light tracking-wide text-primary-foreground/90">
              Scrap Polyester | Choose Cotton | Stay Natural
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-corporate py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                PANGEOS
              </h3>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Design, produce, and deliver high-quality apparel that combines style, comfort, and durability while maintaining ethical practices and sustainability.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@pangeos.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 XXXX XXXX XX</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-foreground mb-4">
              Our Brands
            </h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-foreground mb-4">
              Customized Wear
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-corporate py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
            <p>© {currentYear} PANGEOS Clothing Industries. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

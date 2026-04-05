import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Building2, GraduationCap, Megaphone, Stethoscope, ArrowRight } from "lucide-react";

const customCategories = [
  {
    slug: "corporate",
    title: "Corporate",
    icon: Building2,
    tagline: "Professional Uniforms & Branded Apparel",
    description: "Professional uniforms and branded apparel that represent your organization with distinction. Our corporate wear solutions combine comfort, durability, and professional aesthetics.",
    features: [
      "Custom branding and logo placement",
      "Wide range of professional styles",
      "High-quality, durable fabrics",
      "Bulk ordering with consistent quality",
      "Size-inclusive options",
      "Quick turnaround times",
    ],
  },
  {
    slug: "school",
    title: "School",
    icon: GraduationCap,
    tagline: "Durable School Uniforms",
    description: "Durable, comfortable school uniforms designed to withstand active learning environments. We understand that school wear needs to be practical, comfortable, and easy to maintain.",
    features: [
      "Reinforced construction for durability",
      "Easy-care, machine washable fabrics",
      "Comfortable fit for all-day wear",
      "Customizable with school colors and logos",
      "Size options for all age groups",
      "Affordable bulk pricing",
    ],
  },
  {
    slug: "promotion",
    title: "Promotion",
    icon: Megaphone,
    tagline: "Eye-Catching Promotional Wear",
    description: "Eye-catching promotional wear that amplifies your brand visibility and marketing impact. Perfect for events, campaigns, and team building activities.",
    features: [
      "High-impact branding options",
      "Quick production turnaround",
      "Event-specific customization",
      "Wide range of styles and colors",
      "Cost-effective for large quantities",
      "Creative design support",
    ],
  },
  {
    slug: "medical",
    title: "Medical",
    icon: Stethoscope,
    tagline: "Functional Medical Apparel",
    description: "Functional, hygienic medical apparel engineered for healthcare professionals. Our medical wear combines practicality with comfort for demanding healthcare environments.",
    features: [
      "Antimicrobial fabric options",
      "Easy-clean, stain-resistant materials",
      "Comfortable fit for long shifts",
      "Professional appearance",
      "Functional pocket designs",
      "Compliance with healthcare standards",
    ],
  },
];

const CustomizedWear = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">B2B Solutions</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Customized Wear
            </h1>
            <p className="text-xl text-muted-foreground">
              Tailored clothing solutions for organizations, institutions, and businesses. 
              Quality, consistency, and professional excellence in every order.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container-corporate">
          <div className="space-y-16">
            {customCategories.map((category, index) => (
              <div
                key={category.slug}
                id={category.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] bg-stone flex items-center justify-center">
                    <category.icon className="w-24 h-24 text-accent/40" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="section-label">{category.tagline}</span>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-secondary group">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-primary-foreground">
        <div className="container-corporate text-center">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Ready to Order?
          </h3>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Contact us today to discuss your customized wear requirements. 
            Our team will work with you to create the perfect solution for your organization.
          </p>
          <Link to="/contact" className="btn-primary bg-cream text-charcoal hover:bg-cream/90">
            Get Custom Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CustomizedWear;

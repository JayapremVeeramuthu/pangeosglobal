import { Link } from "react-router-dom";
import { Building2, GraduationCap, Megaphone, Stethoscope, ArrowRight } from "lucide-react";

const customCategories = [
  {
    title: "Corporate",
    description: "Professional uniforms and branded apparel that represent your organization with distinction.",
    icon: Building2,
    path: "/customized-wear/corporate",
  },
  {
    title: "School",
    description: "Durable, comfortable school uniforms designed to withstand active learning environments.",
    icon: GraduationCap,
    path: "/customized-wear/school",
  },
  {
    title: "Promotion",
    description: "Eye-catching promotional wear that amplifies your brand visibility and marketing impact.",
    icon: Megaphone,
    path: "/customized-wear/promotion",
  },
  {
    title: "Medical",
    description: "Functional, hygienic medical apparel engineered for healthcare professionals.",
    icon: Stethoscope,
    path: "/customized-wear/medical",
  },
];

const CustomizedWearSection = () => {
  return (
    <section className="py-24 bg-stone">
      <div className="container-corporate">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">B2B Solutions</span>
          <h2 className="section-title">Customized Wear</h2>
          <p className="section-subtitle mx-auto">
            Tailored clothing solutions for organizations, institutions, and businesses. 
            Quality, consistency, and professional excellence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, index) => (
            <Link
              key={category.title}
              to={category.path}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <category.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                {category.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomizedWearSection;

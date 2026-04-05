import { Leaf, Shield, Recycle, Heart, Award } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every production stage ensures consistent excellence.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Eco-friendly fabrics and responsible sourcing for minimal environmental impact.",
  },
  {
    icon: Recycle,
    title: "Ethical Production",
    description: "Fair labor practices and transparent supply chain from fiber to finish.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "Supporting local communities through initiatives that empower and uplift.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    description: "Industry-leading quality benchmarks that set us apart in the market.",
  },
];

const QualityHighlights = () => {
  return (
    <section className="py-24 bg-charcoal text-primary-foreground">
      <div className="container-corporate">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Quality, Sustainability & Ethics
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            At Pangeos, fashion and responsibility go hand in hand. We are committed to 
            creating products that look good, feel good, and do good.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Policy Link */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-primary-foreground/20 p-8 max-w-2xl">
            <p className="text-primary-foreground/80 italic mb-4">
              "Our commitment to quality is the responsibility of every employee, and we strive 
              to create a culture where excellence is a shared value."
            </p>
            <span className="text-xs font-medium tracking-wider uppercase text-accent">
              — Pangeos Quality Policy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityHighlights;

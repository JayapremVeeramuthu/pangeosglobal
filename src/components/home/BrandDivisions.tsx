import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import mensImage from "@/assets/mens-collection.jpg";
import womensImage from "@/assets/womens-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";
import winterImage from "@/assets/winter-collection.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const brands = [
  {
    name: "PANGEOS",
    category: "Men's Collection",
    description: "Premium casual wear designed for the modern man. Quality fabrics, timeless style.",
    image: mensImage,
    path: "/brands/pangeos",
  },
  {
    name: "GO SMILEY",
    category: "Women's Collection",
    description: "Elegant and comfortable fashion that celebrates feminine style and confidence.",
    image: womensImage,
    path: "/brands/go-smiley",
  },
  {
    name: "KIDS VIBE",
    category: "Children's Collection",
    description: "Playful, durable, and comfortable clothing for active children.",
    image: kidsImage,
    path: "/brands/kids-vibe",
  },
  {
    name: "SOFTOUCH COZY",
    category: "Winter Collection",
    description: "Warm, cozy winter wear that doesn't compromise on style or comfort.",
    image: winterImage,
    path: "/brands/softouch-cozy",
  },
];

const BrandDivisions = () => {
  // 🔥 IMPORTANT
  useScrollReveal();

  return (
    <section className="py-24 bg-cream">
      <div className="container-corporate">
        {/* Header */}
        <div className="text-center mb-16 brand-fade">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Brand Divisions</h2>
          <p className="section-subtitle mx-auto">
            Four distinctive brands, each crafted to serve unique lifestyle needs with unwavering quality.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              to={brand.path}
              className="group relative overflow-hidden bg-card border border-border aspect-[4/3] md:aspect-[3/2] brand-fade"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-xs tracking-widest uppercase text-primary-foreground/70 block mb-2">
                  {brand.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2 flex items-center gap-3">
                  {brand.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </h3>
                <p className="text-sm text-primary-foreground/80 max-w-sm line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDivisions;

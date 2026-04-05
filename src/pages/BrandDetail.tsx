import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import mensImage from "@/assets/mens-collection.jpg";
import womensImage from "@/assets/womens-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";
import winterImage from "@/assets/winter-collection.jpg";

const brandData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  philosophy: string;
  image: string;
  features: { title: string; description: string }[];
}> = {
  pangeos: {
    name: "PANGEOS",
    tagline: "Premium Men's Collection",
    description:
      "Premium casual wear designed for the modern man. Our flagship brand combines timeless style with superior comfort, using only the finest natural cotton fabrics.",
    philosophy:
      "At PANGEOS, we believe that great clothing should be effortless. Our designs focus on clean lines, quality materials, and versatile pieces that transition seamlessly from casual to smart-casual occasions.",
    image: mensImage,
    features: [
      { title: "Premium Cotton", description: "100% natural cotton fabrics sourced responsibly" },
      { title: "Timeless Design", description: "Classic styles that never go out of fashion" },
      { title: "Superior Comfort", description: "Engineered for all-day wearability" },
      { title: "Durable Quality", description: "Built to last through years of wear" },
    ],
  },
  "go-smiley": {
    name: "GO SMILEY",
    tagline: "Women's Fashion Collection",
    description:
      "Elegant and comfortable fashion that celebrates feminine style and confidence. Go Smiley offers a curated collection of contemporary designs.",
    philosophy:
      "Go Smiley empowers women to express their unique personality through fashion. Our designs celebrate femininity while prioritizing comfort and practicality.",
    image: womensImage,
    features: [
      { title: "Elegant Designs", description: "Sophisticated styles for the modern woman" },
      { title: "Comfortable Fit", description: "Designed for movement and ease" },
      { title: "Contemporary Style", description: "On-trend designs with lasting appeal" },
      { title: "Quality Fabrics", description: "Premium materials that feel luxurious" },
    ],
  },
  "kids-vibe": {
    name: "KIDS VIBE",
    tagline: "Children's Collection",
    description:
      "Playful, durable, and comfortable clothing for active children. Kids Vibe understands that children need clothes that can keep up with their adventures.",
    philosophy:
      "Kids Vibe creates clothing that lets children be children. Our designs are playful, our materials are durable, and our construction stands up to the rigors of active play.",
    image: kidsImage,
    features: [
      { title: "Child-Safe Materials", description: "Gentle on sensitive skin, rigorously tested" },
      { title: "Playful Designs", description: "Fun styles that kids love to wear" },
      { title: "Extra Durable", description: "Built tough for active adventures" },
      { title: "Easy Care", description: "Machine washable and low maintenance" },
    ],
  },
  "softouch-cozy": {
    name: "SOFTOUCH COZY",
    tagline: "Winter Wear Collection",
    description:
      "Warm, cozy winter wear that doesn't compromise on style or comfort. Our winter collection features premium insulation and soft textures.",
    philosophy:
      "Softouch Cozy brings warmth and style together. We believe winter clothing should keep you comfortable without sacrificing aesthetics or quality.",
    image: winterImage,
    features: [
      { title: "Premium Warmth", description: "Superior insulation for cold weather" },
      { title: "Soft Textures", description: "Luxuriously soft materials inside and out" },
      { title: "Stylish Designs", description: "Winter fashion that stands out" },
      { title: "Quality Insulation", description: "Engineered for optimal heat retention" },
    ],
  },
};

const BrandDetail = () => {
  const { brandSlug } = useParams();
  const brand = brandSlug ? brandData[brandSlug] : null;

  if (!brand) {
    return (
      <Layout>
        <div className="py-32 text-center fade-in">
          <h1 className="text-2xl font-heading font-semibold text-primary mb-4">
            Brand Not Found
          </h1>
          <Link to="/brands" className="text-accent hover:underline">
            Return to Brands
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center fade-in">
        <div className="absolute inset-0 z-0">
          <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        <div className="container-corporate relative z-10">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Brands
          </Link>

          <span className="section-label">{brand.tagline}</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
            {brand.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {brand.description}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-cream fade-in">
        <div className="container-corporate max-w-3xl mx-auto text-center">
          <span className="section-label">Brand Philosophy</span>
          <p className="text-2xl font-heading font-light text-foreground leading-relaxed">
            {brand.philosophy}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background fade-in">
        <div className="container-corporate">
          <div className="text-center mb-12">
            <span className="section-label">What Sets Us Apart</span>
            <h2 className="text-3xl font-heading font-semibold text-primary">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.features.map((feature) => (
              <div key={feature.title} className="feature-card text-center">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone fade-in">
        <div className="container-corporate text-center">
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
            Interested in {brand.name}?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us for more information about our collections, wholesale inquiries,
            or partnership opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BrandDetail;

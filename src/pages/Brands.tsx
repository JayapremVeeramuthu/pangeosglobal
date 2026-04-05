import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import mensImage from "@/assets/mens-collection.jpg";
import womensImage from "@/assets/womens-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";
import winterImage from "@/assets/winter-collection.jpg";

const brands = [
  {
    name: "PANGEOS",
    category: "Men's Collection",
    description: "Premium casual wear designed for the modern man. Our flagship brand combines timeless style with superior comfort, using only the finest natural cotton fabrics. Each piece is crafted with attention to detail, ensuring durability and sophistication.",
    image: mensImage,
    path: "/brands/pangeos",
    features: ["Premium Cotton", "Timeless Design", "Superior Comfort", "Durable Quality"],
  },
  {
    name: "GO SMILEY",
    category: "Women's Collection",
    description: "Elegant and comfortable fashion that celebrates feminine style and confidence. Go Smiley offers a curated collection of contemporary designs that empower women to express their unique personality through fashion.",
    image: womensImage,
    path: "/brands/go-smiley",
    features: ["Elegant Designs", "Comfortable Fit", "Contemporary Style", "Quality Fabrics"],
  },
  {
    name: "KIDS VIBE",
    category: "Children's Collection",
    description: "Playful, durable, and comfortable clothing for active children. Kids Vibe understands that children need clothes that can keep up with their adventures while being gentle on their skin.",
    image: kidsImage,
    path: "/brands/kids-vibe",
    features: ["Child-Safe Materials", "Playful Designs", "Extra Durable", "Easy Care"],
  },
  {
    name: "SOFTOUCH COZY",
    category: "Winter Collection",
    description: "Warm, cozy winter wear that doesn't compromise on style or comfort. Our winter collection features premium insulation and soft textures to keep you comfortable during the colder months.",
    image: winterImage,
    path: "/brands/softouch-cozy",
    features: ["Premium Warmth", "Soft Textures", "Stylish Designs", "Quality Insulation"],
  },
];

const BrandsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Brand Divisions
            </h1>
            <p className="text-xl text-muted-foreground">
              Four distinctive brands, each crafted to serve unique lifestyle needs with 
              unwavering quality and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Brands List */}
      <section className="py-16 bg-background">
        <div className="container-corporate">
          <div className="space-y-24">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="section-label">{brand.category}</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    {brand.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {brand.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={brand.path} className="btn-secondary group">
                    Explore {brand.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandsPage;

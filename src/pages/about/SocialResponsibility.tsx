import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Heart, Users, Shield, Leaf, Smile, Handshake } from "lucide-react";

const SocialResponsibility = () => {
  const sections = [
    {
      icon: Heart,
      title: "Our Commitment to Society",
      content: "At Pangeos Clothing Industries, we believe that fashion should not only look good but also do good. Our mission extends beyond creating stylish, high-quality apparel—we are committed to making a positive impact on our communities, our employees, and the environment.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      content: "We actively support local communities through initiatives that empower and uplift. From educational programs and skill-development workshops to charitable partnerships, Pangeos is dedicated to creating meaningful opportunities and giving back to society.",
    },
    {
      icon: Shield,
      title: "Ethical Practices",
      content: "Integrity is at the heart of everything we do. We maintain the highest ethical standards across our supply chain, from responsibly sourcing materials to ensuring fair labor practices. Every Pangeos product reflects our commitment to honesty, fairness, and accountability.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      content: "Sustainability guides our production processes. We strive to minimize waste, use eco-friendly materials, and continuously improve our operations to reduce our environmental impact. At Pangeos, fashion and sustainability go hand in hand.",
    },
    {
      icon: Smile,
      title: "Employee Well-being",
      content: "Our employees are our greatest asset. We provide safe working conditions, continuous training, and opportunities for professional growth. By fostering a respectful and supportive workplace, we ensure that every team member thrives.",
    },
    {
      icon: Handshake,
      title: "Partnerships & Collaborations",
      content: "We collaborate with organizations that share our values in sustainability, education, and community development. Together, we aim to make a larger positive impact, proving that meaningful partnerships can create real change.",
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Social Responsibility
            </h1>
            <div className="divider-line" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container-corporate">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-28 space-y-2">
                <Link to="/about/intent" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Intent
                </Link>
                <Link to="/about/vision" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Vision
                </Link>
                <Link to="/about/mission" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Mission
                </Link>
                <Link to="/about/objectives" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Objectives
                </Link>
                <Link to="/about/leadership" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Leadership
                </Link>
                <Link to="/about/quality-policy" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Quality Policy
                </Link>
                <Link to="/about/social-responsibility" className="block px-4 py-3 bg-secondary font-medium text-foreground">
                  Social Responsibility
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.title} className="group">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <section.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="policy-block mt-16">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Join Us in Making a Difference
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Pangeos, we are committed to a future where fashion and social responsibility 
                  coexist. Explore our initiatives, support our efforts, and be part of a movement 
                  that values people, the planet, and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialResponsibility;

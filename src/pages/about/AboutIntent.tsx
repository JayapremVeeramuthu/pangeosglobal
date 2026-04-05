import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutIntent = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Intent
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
                <Link to="/about/intent" className="block px-4 py-3 bg-secondary font-medium text-foreground">
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
                <Link to="/about/social-responsibility" className="block px-4 py-3 text-muted-foreground hover:bg-secondary transition-colors">
                  Social Responsibility
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  At Pangeos Clothing Industries, our intent is to design, produce, and deliver 
                  high-quality apparel that combines style, comfort, and durability. We aim to meet 
                  and exceed customer expectations while maintaining ethical practices, sustainability, 
                  and innovation at every step of our production.
                </p>

                <h3 className="text-2xl font-heading font-semibold text-primary mt-12 mb-6">
                  Our Purpose
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Empower individuals</strong> through 
                      clothing that reflects their personality and lifestyle.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Promote sustainable fashion</strong> by 
                      adopting eco-friendly materials and responsible manufacturing processes.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Uphold ethical standards</strong> in 
                      every part of our supply chain.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Foster community impact</strong> by 
                      supporting social initiatives and employee well-being.
                    </span>
                  </li>
                </ul>

                <div className="policy-block mt-12">
                  <p className="text-lg font-medium text-foreground italic">
                    In short, our intent is to create fashion that looks good, feels good, 
                    and does good—for our customers, our communities, and our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutIntent;

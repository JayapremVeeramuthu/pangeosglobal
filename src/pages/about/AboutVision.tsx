import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const AboutVision = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Vision
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
                <Link to="/about/vision" className="block px-4 py-3 bg-secondary font-medium text-foreground">
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
              <div className="policy-block mb-12">
                <p className="text-2xl font-heading font-medium text-foreground leading-relaxed">
                  "To become a leading clothing brand in India with an annual turnover of $50 million, 
                  known for quality, affordability, and social responsibility."
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Our vision drives everything we do at Pangeos Clothing Industries. We are 
                  committed to building a brand that stands for excellence, accessibility, and 
                  positive social impact.
                </p>
                <p>
                  We envision a future where sustainable fashion is the norm, not the exception, 
                  and where quality clothing is accessible to all. Through innovation, ethical 
                  practices, and unwavering commitment to our values, we are working towards 
                  making this vision a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutVision;

import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const AboutMission = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Mission
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
                <Link to="/about/mission" className="block px-4 py-3 bg-secondary font-medium text-foreground">
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
                  "Our mission is to deliver high-quality clothing products while operating as a 
                  service-driven organization that contributes positively to humanity."
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  At Pangeos, our mission goes beyond creating great products. We are driven by 
                  a deeper purpose—to serve our customers, our employees, and our communities 
                  with integrity and care.
                </p>
                <p>
                  Every piece of clothing we produce is a testament to our commitment to quality 
                  and service. We believe that fashion should not only look good but should also 
                  contribute to a better world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMission;

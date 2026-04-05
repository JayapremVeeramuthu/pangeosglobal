import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const QualityPolicy = () => {
  const commitments = [
    {
      title: "Customer Focus",
      description: "Understanding and fulfilling our customers' needs through superior products and services.",
    },
    {
      title: "Continuous Improvement",
      description: "Constantly enhancing our processes, technologies, and skills to maintain the highest standards of quality.",
    },
    {
      title: "Compliance",
      description: "Adhering to all applicable industry standards, regulations, and safety requirements.",
    },
    {
      title: "Employee Involvement",
      description: "Empowering our team through training, awareness, and active participation in quality management.",
    },
    {
      title: "Sustainable Practices",
      description: "Promoting environmentally responsible production and sourcing practices.",
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
              Quality Policy
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
                <Link to="/about/quality-policy" className="block px-4 py-3 bg-secondary font-medium text-foreground">
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
                  At Pangeos Clothing Industries, we are committed to delivering high-quality 
                  apparel that meets or exceeds our customers' expectations. Our goal is to 
                  consistently provide products that are durable, stylish, and produced with 
                  precision and care.
                </p>

                <h3 className="text-2xl font-heading font-semibold text-primary mt-12 mb-8">
                  To achieve this, we commit to:
                </h3>

                <div className="space-y-6">
                  {commitments.map((item, index) => (
                    <div key={item.title} className="flex items-start gap-4 p-6 bg-cream">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="policy-block mt-12">
                  <p className="text-lg text-foreground leading-relaxed">
                    Our commitment to quality is the responsibility of every employee, and we 
                    strive to create a culture where excellence is a shared value. We continuously 
                    monitor, review, and improve our Quality Management System to ensure sustained 
                    customer satisfaction and business success.
                  </p>
                </div>

                {/* Signature Block */}
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Signed:</p>
                  <p className="font-heading font-semibold text-foreground">
                    [Name of CEO/Managing Director]
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Date: [Insert Date]
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

export default QualityPolicy;

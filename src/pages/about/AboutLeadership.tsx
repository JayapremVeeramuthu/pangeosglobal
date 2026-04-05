import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const leadershipTeam = [
  {
    title: "Founder",
    name: "[Founder Name]",
    description: "Visionary leader driving the company's mission and strategic direction.",
  },
  {
    title: "Co-Founder",
    name: "[Co-Founder Name]",
    description: "Partner in building the foundation and culture of Pangeos.",
  },
  {
    title: "Vice President",
    name: "[Vice President Name]",
    description: "Overseeing operations and ensuring organizational excellence.",
  },
  {
    title: "Investors",
    name: "[Investor Names]",
    description: "Strategic partners supporting our growth and vision.",
  },
];

const AboutLeadership = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Leadership
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
                <Link to="/about/leadership" className="block px-4 py-3 bg-secondary font-medium text-foreground">
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
              <p className="text-lg text-muted-foreground mb-12">
                Our leadership team brings together diverse expertise and a shared 
                commitment to building a sustainable, quality-driven apparel company.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {leadershipTeam.map((member) => (
                  <div key={member.title} className="card-corporate p-6">
                    <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-4">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-medium tracking-wider uppercase text-accent mb-2 block">
                      {member.title}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutLeadership;

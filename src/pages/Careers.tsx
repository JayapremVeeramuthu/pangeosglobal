import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Briefcase, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const benefits = [
    {
      icon: Heart,
      title: "Employee Well-being",
      description: "Safe working conditions and continuous support for your physical and mental health.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous training and opportunities for career advancement.",
    },
    {
      icon: Users,
      title: "Supportive Culture",
      description: "A respectful and inclusive workplace where every team member thrives.",
    },
    {
      icon: Briefcase,
      title: "Meaningful Work",
      description: "Be part of a mission-driven organization making a positive impact.",
    },
  ];

  const openPositions = [
    { title: "Production Manager", department: "Manufacturing", location: "India" },
    { title: "Quality Control Specialist", department: "Quality Assurance", location: "India" },
    { title: "Fashion Designer", department: "Design", location: "India" },
    { title: "Supply Chain Coordinator", department: "Operations", location: "India" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-cream">
        <div className="container-corporate">
          <div className="max-w-3xl">
            <span className="section-label">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Careers at Pangeos
            </h1>
            <p className="text-xl text-muted-foreground">
              Build your career with a company that values people, quality, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-background">
        <div className="container-corporate">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Our Culture</span>
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our employees are our greatest asset. At Pangeos, we provide safe working 
                conditions, continuous training, and opportunities for professional growth. 
                By fostering a respectful and supportive workplace, we ensure that every 
                team member thrives.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-cream p-8">
              <h3 className="text-xl font-heading font-semibold text-primary mb-6">
                Open Positions
              </h3>
              <div className="space-y-4">
                {openPositions.map((position) => (
                  <div
                    key={position.title}
                    className="p-4 bg-background border border-border hover:border-accent/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                          {position.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {position.department} • {position.location}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-stone">
        <div className="container-corporate">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Apply Now</span>
              <h2 className="text-3xl font-heading font-semibold text-primary">
                Submit Your Application
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Position Applying For *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos) => (
                      <option key={pos.title} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Resume/CV Upload
                </label>
                <div className="border-2 border-dashed border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your resume here or click to browse
                  </p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-corporate">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-label">About PANGEOS</span>
            <h2 className="section-title">Creating Fashion That Does Good</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Pangeos Clothing Industries, our intent is to design, produce, and deliver 
                high-quality apparel that combines style, comfort, and durability.
              </p>
              <p>
                We aim to meet and exceed customer expectations while maintaining ethical practices, 
                sustainability, and innovation at every step of our production.
              </p>
              <p>
                Our purpose is to empower individuals through clothing that reflects their 
                personality and lifestyle, promote sustainable fashion by adopting eco-friendly 
                materials and responsible manufacturing processes.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/about/intent" className="btn-secondary group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="policy-block">
              <span className="section-label mb-3 block">Our Vision</span>
              <p className="text-lg font-medium text-foreground">
                "To become a leading clothing brand in India with an annual turnover of $50 million, 
                known for quality, affordability, and social responsibility."
              </p>
            </div>

            <div className="policy-block">
              <span className="section-label mb-3 block">Our Mission</span>
              <p className="text-lg font-medium text-foreground">
                "Our mission is to deliver high-quality clothing products while operating as a 
                service-driven organization that contributes positively to humanity."
              </p>
            </div>

            <div className="policy-block">
              <span className="section-label mb-3 block">Our Objectives</span>
              <p className="text-lg font-medium text-foreground">
                "To focus on mid-level premium casual clothing collections at affordable prices 
                while maintaining consistent quality standards."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cotton.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium natural cotton fabric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-corporate relative z-10">
        <div className="max-w-2xl">
          {/* Brand Tag */}
          <div className="mb-8 animate-fade-up">
            <span className="brand-badge">Pangeos Clothing Industries</span>
          </div>

          {/* Headline */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-up stagger-1">
            Pangeos <span className="font-"> Lifestyle  </span> 
            <span className="text-accent block">Beyond the ordinary</span>
            <span className="text-accent block text-4xl">Choose Cotton |  Stay Natural</span>
           
          </h1>
          


          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up stagger-2 max-w-xl">
            Premium quality apparel that combines style, comfort, and durability. 
            Committed to sustainable fashion through ethical practices and eco-friendly materials.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Link to="/brands" className="btn-primary group">
              Explore Collections
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/customized-wear" className="btn-secondary">
              Customized Wear
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

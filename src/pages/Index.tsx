import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BrandDivisions from "@/components/home/BrandDivisions";
import AboutPreview from "@/components/home/AboutPreview";
import CustomizedWearSection from "@/components/home/CustomizedWearSection";
import QualityHighlights from "@/components/home/QualityHighlights";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandDivisions />
      <AboutPreview />
      <CustomizedWearSection />
      <QualityHighlights />
    </Layout>
  );
};

export default Index;

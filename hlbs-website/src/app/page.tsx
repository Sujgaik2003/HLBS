import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsCounter from "@/components/StatsCounter";
import ProductCategories from "@/components/ProductCategories";
import WhyHLBS from "@/components/WhyHLBS";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsCounter />
      <ProductCategories />
      <WhyHLBS />
      <Industries />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

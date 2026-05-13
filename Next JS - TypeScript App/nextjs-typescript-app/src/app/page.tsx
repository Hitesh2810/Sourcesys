import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <section className="cards">
        <FeatureCard
          title="Dashboard"
          description="Manage inventory and monitor application data efficiently."
        />

        <FeatureCard
          title="Analytics"
          description="Generate reports and track performance metrics."
        />

        <FeatureCard
          title="Security"
          description="Secure frontend architecture using TypeScript."
        />
      </section>

      <Footer />
    </div>
  );
}
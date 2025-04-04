import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import MapSection from "@/components/MapSection";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import CommunityImpact from "@/components/CommunityImpact";
import BusinessForm from "@/components/BusinessForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Manifesto />
      <MapSection />
      <FeaturedBusinesses />
      <CommunityImpact />
      <BusinessForm />
      <Newsletter />
      <Footer />
    </main>
  );
}

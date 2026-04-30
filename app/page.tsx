import Nav from "@/components/nav";
import Hero from "@/components/hero";
import MenuSection from "@/components/menu-section";
import SignatureItems from "@/components/signature-items";
import BrandStory from "@/components/brand-story";
import LocationsSection from "@/components/locations-section";
import OrderSection from "@/components/order-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MenuSection />
      <SignatureItems />
      <BrandStory />
      <LocationsSection />
      <OrderSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

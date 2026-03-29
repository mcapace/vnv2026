import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PhotoGallery from "@/components/PhotoGallery";
import ArticleCards from "@/components/ArticleCards";
import VideoSection from "@/components/VideoSection";
import ItinerarySection from "@/components/ItinerarySection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-0 flex-1 overflow-x-hidden">
      <Navigation />
      <Hero />
      <IntroSection />
      <PhotoGallery />
      <ArticleCards />
      <VideoSection />
      <ItinerarySection />
      <PartnersSection />
      <Footer />
    </main>
  );
}

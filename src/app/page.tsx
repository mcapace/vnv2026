import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PhotoGallery from "@/components/PhotoGallery";
import ArticleCards from "@/components/ArticleCards";
import VideoSection from "@/components/VideoSection";
import ItinerarySection from "@/components/ItinerarySection";
import RouteMapSection from "@/components/RouteMapSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      id="main-content"
      className="hub-page relative w-full min-h-0 flex-1 overflow-x-hidden text-[var(--hub-ink)]"
    >
      <Navigation />
      <Hero />
      <IntroSection />
      <PhotoGallery />
      <ArticleCards />
      <VideoSection />
      <ItinerarySection />
      <RouteMapSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}

import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import HorizontalGallery from "@/components/sections/HorizontalGallery";
import Courts from "@/components/sections/Courts";
import VenueGallery from "@/components/sections/VenueGallery";
import About from "@/components/sections/About";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <HorizontalGallery />
      <Courts />
      <VenueGallery />
      <About />
      <BookingCTA />
      <Footer />
    </main>
  );
}

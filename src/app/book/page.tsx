import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Book a Court | Poncol Padel House",
  description:
    "Reserve your padel court at Poncol Padel House through the Courtside app.",
};

export default function BookPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-black overflow-hidden">
        <Image
          src="/images/landscape/ST307723.jpg"
          alt="Book a padel court"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pb-16">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream/50 mb-4">
            Reserve
          </p>
          <h1
            className="font-display font-[300] text-cream uppercase tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Book a Court
          </h1>
        </div>
      </section>

      <BookingCTA showHeading={false} />

      {/* How it works */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-[300] text-cream mb-16 uppercase tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            How to Book
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "Download",
                description:
                  "Get the Courtside app from the App Store or Google Play.",
              },
              {
                step: "Search",
                description:
                  "Find Poncol Padel House and browse available time slots.",
              },
              {
                step: "Play",
                description:
                  "Confirm your booking and arrive ready to play.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-cream/10 pt-8">
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-turf block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-display font-[400] text-cream text-2xl mb-3">
                  {item.step}
                </h3>
                <p className="font-sans font-[300] text-cream/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

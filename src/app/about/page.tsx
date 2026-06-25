import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Poncol Padel House",
  description:
    "The story behind Jakarta's premier indoor padel venue - built for the community, by people who love the game.",
};

const teamImages = [
  { src: "/images/landscape/ST308500.jpg", alt: "Venue cafe area" },
  { src: "/images/landscape/ST308512.jpg", alt: "Venue details" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-black overflow-hidden">
        <Image
          src="/images/landscape/ST307638.jpg"
          alt="Poncol Padel House interior"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,26,10,0.95) 0%, rgba(15,26,10,0.2) 60%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pb-20">
          <h1
            className="font-display font-[300] text-cream italic leading-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Our Story
          </h1>
        </div>
      </section>

      <About />

      {/* Additional images */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

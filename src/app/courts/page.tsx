import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Courts from "@/components/sections/Courts";
import CourtLineDivider from "@/components/ui/CourtLineDivider";

export const metadata: Metadata = {
  title: "Courts | Poncol Padel House",
  description:
    "Two full-size indoor padel courts in Jakarta - climate-controlled, glass-walled, and competition-ready.",
};

const courtImages = [
  { src: "/images/landscape/ST307839.jpg", alt: "Court 1 panoramic view" },
  { src: "/images/landscape/ST307854.jpg", alt: "Court interior detail" },
  { src: "/images/landscape/ST307862.jpg", alt: "Court view from above" },
  { src: "/images/landscape/ST308179.jpg", alt: "Players on court" },
  { src: "/images/landscape/ST308228.jpg", alt: "Court action shot" },
  { src: "/images/landscape/ST308240.jpg", alt: "Court environment" },
];

export default function CourtsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black overflow-hidden">
        <Image
          src="/images/landscape/ST307631.jpg"
          alt="Poncol Padel House courts"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pb-20">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream/50 mb-4">
            Facilities
          </p>
          <h1
            className="font-display font-[300] text-cream uppercase tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            The Courts
          </h1>
        </div>
      </section>

      {/* Court specs */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              { stat: "2", label: "Full-size courts" },
              { stat: "10 x 20m", label: "Per court" },
              { stat: "100%", label: "Indoor, climate-controlled" },
            ].map((item, i) => (
              <div key={i} className="bg-black px-8 py-10">
                <p
                  className="font-display font-[300] text-cream mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {item.stat}
                </p>
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Courts />

      {/* Gallery */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-[300] text-cream mb-16 uppercase tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Court Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {courtImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-forest">
        <CourtLineDivider color="light" className="opacity-20" />
      </div>

      <Footer />
    </main>
  );
}

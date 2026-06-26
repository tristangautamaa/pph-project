import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Socials — Poncol Padel House",
  description:
    "Follow Poncol Padel House across Instagram, WhatsApp, and TikTok.",
};

const channels = [
  { label: "Instagram" },
  { label: "WhatsApp" },
  { label: "TikTok" },
];

export default function SocialsPage() {
  return (
    <main>
      <section className="min-h-[100dvh] bg-forest flex flex-col justify-center py-32 md:py-40">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sand mb-6">
            Connect
          </p>
          <h1
            className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-16 md:mb-20"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            Socials
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="border border-sand/30 rounded-none px-8 py-12 flex flex-col justify-between min-h-[260px]"
              >
                <h2 className="font-sans text-sm tracking-[0.25em] uppercase text-cream">
                  {channel.label}
                </h2>
                <p className="font-sans font-[300] text-cream/40 text-sm tracking-wide uppercase mt-8">
                  Content coming soon
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

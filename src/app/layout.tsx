import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Poncol Padel House | Jakarta's Premier Indoor Padel Venue",
  description:
    "Two indoor padel courts in the heart of Jakarta. Competition-ready, glass-walled courts for casual play, coaching, and tournaments.",
  openGraph: {
    title: "Poncol Padel House",
    description: "Jakarta's premier indoor padel destination.",
    siteName: "Poncol Padel House",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className="bg-forest text-cream font-sans antialiased"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

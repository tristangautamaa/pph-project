import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import CafeButton from "@/components/ui/CafeButton";
import PageLoader from "@/components/ui/PageLoader";
import PageTransition from "@/components/ui/PageTransition";
import { TransitionProvider } from "@/components/ui/TransitionContext";
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
  icons: {
    icon: "/images/ui/logo.ico",
    shortcut: "/images/ui/logo.ico",
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
        <TransitionProvider>
          <PageLoader />
          <PageTransition />
          <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            {children}
            <CafeButton />
          </SmoothScrollProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}

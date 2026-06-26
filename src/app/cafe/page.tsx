import type { Metadata } from "next";
import CafeContent from "@/components/sections/CafeContent";

export const metadata: Metadata = {
  title: "The Café — Poncol Padel House",
  description:
    "LU'S at Poncol Padel House — coffee, drinks, and bites alongside the courts. Fuel your game.",
};

export default function CafePage() {
  return <CafeContent />;
}

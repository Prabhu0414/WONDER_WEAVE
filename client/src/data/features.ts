import { Compass, Map, Hotel } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Personalized Itineraries",
    description: "Tailored trips that match your interests and pace.",
    icon: Compass,
  },
  {
    title: "Seamless Planning",
    description: "All your destinations and bookings in one place.",
    icon: Map,
  },
  {
    title: "Curated Stays",
    description: "Handpicked hotels and stays for every traveler.",
    icon: Hotel,
  },
];

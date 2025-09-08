import { Plane, Hotel, UtensilsCrossed, MapPin, Coffee } from "lucide-react";

export function TypeIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  switch (type) {
    case "flight":
      return <Plane className={className} />;
    case "hotel":
      return <Hotel className={className} />;
    case "restaurant":
      return <UtensilsCrossed className={className} />;
    case "attraction":
      return <MapPin className={className} />;
    case "rest":
      return <Coffee className={className} />;
    default:
      return <MapPin className={className} />;
  }
}

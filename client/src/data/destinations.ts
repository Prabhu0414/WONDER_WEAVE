
import jaipur from "../assets/jaipur.jpg";
import agra from "../assets/agra-taj.jpg";
import goa from "../assets/goa.jpg";
import kerala from "../assets/kerala.jpg";
import ladakh from "../assets/ladakh.jpg";
import varanasi from "../assets/varanasi.jpg";

export interface Destination {
  title: string;
  location: string;
  description: string;
  image: string;
}

export const destinations: Destination[] = [
    {
      title: "Pink City of Jaipur",
    location: "Rajasthan",
    description: "Explore majestic forts, palaces, and vibrant bazaars of the historic Pink City.",
    image: `${jaipur}`,
  },
    {
      title: "Backwaters of Kerala",
    location: "Kerala",
    description: "Cruise serene backwaters on a houseboat and unwind amidst lush greenery.",
    image: `${kerala}`,
  },
    {
      title: "Beaches of Goa",
    location: "Goa",
    description: "Golden sands, palm-lined shores, and a lively culture meet by the sea.",
    image: `${goa}`,
  },
    {
      title: "Majestic Ladakh",
    location: "Ladakh",
    description: "Breathtaking high-altitude landscapes, monasteries, and starlit skies.",
    image: `${ladakh}`,
  },
    {
      title: "Spiritual Varanasi",
    location: "Uttar Pradesh",
    description: "Witness the sacred Ganga Aarti and the timeless ghats of Kashi.",
    image: `${varanasi}`,
  },
    {
      title: "Taj Mahal, Agra",
    location: "Uttar Pradesh",
    description: "Marvel at the iconic symbol of love bathed in sunrise hues.",
    image: `${agra}`,
  },
];


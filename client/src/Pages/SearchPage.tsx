"use client"

import { SearchNavbar } from "../Components/Serach-Navbar"
import { SearchSection } from "../Components/SearchSection"
import { SearchDestinationCard } from "../Components/Destination-Card"

import bali from "../assets/bali.jpg";
import patagonia from "../assets/Patagonia.jpg";
import japan from "../assets/japan.png";
import Morocco from "../assets/Morocco.jpg";
import iceland from "../assets/iceland.jpg";
import santorini from "../assets/Santorini.png";

const popularDestinations = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    image: `${santorini}`,
    rating: 4.8,
    duration: "5-7 days",
    price: "From $1,200",
    highlights: ["Sunset Views", "Wine Tasting", "Historic Sites", "Beach Relaxation"],
  },
  {
    id: "2",
    name: "Kyoto",
    country: "Japan",
    image: `${japan}`,
    rating: 4.9,
    duration: "4-6 days",
    price: "From $980",
    highlights: ["Temples", "Cherry Blossoms", "Traditional Culture", "Gardens"],
  },
  {
    id: "3",
    name: "Bali",
    country: "Indonesia",
    image: `${bali}`,
    rating: 4.7,
    duration: "7-10 days",
    price: "From $850",
    highlights: ["Rice Terraces", "Beaches", "Temples", "Spa Retreats"],
  },
  {
    id: "4",
    name: "Patagonia",
    country: "Chile & Argentina",
    image: `${patagonia}`,
    rating: 4.6,
    duration: "10-14 days",
    price: "From $2,100",
    highlights: ["Glaciers", "Hiking", "Wildlife", "Adventure Sports"],
  },
  {
    id: "5",
    name: "Marrakech",
    country: "Morocco",
    image: `${Morocco}`,
    rating: 4.5,
    duration: "4-6 days",
    price: "From $650",
    highlights: ["Medina", "Markets", "Architecture", "Desert Tours"],
  },
  {
    id: "6",
    name: "Reykjavik",
    country: "Iceland",
    image: `${iceland}`,
    rating: 4.8,
    duration: "6-8 days",
    price: "From $1,400",
    highlights: ["Northern Lights", "Geysers", "Waterfalls", "Blue Lagoon"],
  },
]

export default function SearchPage() {
  const handleDestinationClick = (id: string) => {
    console.log("Navigate to destination:", id)
    // Handle navigation to itinerary page
  }

  return (
    <div className="min-h-screen bg-background">
      <SearchNavbar />

      <main>
        <SearchSection />

        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Popular Destinations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore our handpicked destinations that offer unforgettable experiences and breathtaking adventures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDestinations.map((destination) => (
                <SearchDestinationCard key={destination.id} {...destination} onClick={handleDestinationClick} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-orange-50/50 to-pink-50/50 border-t border-orange-200/30 py-12 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-orange-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">WW</span>
                </div>
                <span className="font-bold text-xl text-foreground">Wonder Weave</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Creating unforgettable travel experiences with personalized itineraries.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Destinations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Asia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Americas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Africa
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Cancellation
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange-200/30 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Wonder Weave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

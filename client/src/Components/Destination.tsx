import { HeaderBlock } from "./HeaderBlock";
import { DestinationCard } from "./DestinationCard";
import { destinations } from "../data/destinations";

export function Destination () {
    return (
        <section id="destinations" className="py-20 bg-slate-50 dark:bg-white">
                  <div className="container px-4">
                    <HeaderBlock
                      eyebrow="Top Picks"
                      title="Popular Destinations"
                      subtitle="Discover the most enchanting places across India, from serene backwaters to majestic mountains."
                    />
        
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                      {destinations.map((destination, i) => (
                        <DestinationCard key={i} destination={destination} />
                      ))}
                    </div>
                  </div>
                </section>
    )
}
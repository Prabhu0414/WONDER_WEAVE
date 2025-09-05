import { motion } from "framer-motion"
import kashmir from "../assets/kashmir-hero.jpg";
import { Sparkles, ChevronRight, Mountain, Calendar, Globe2 } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";
import { Button } from "./Button";
import HeroStat from "./HeroStat";

export function HeroBanner () {
    return (
                <section className="relative">
          <div className="absolute inset-0 -z-10">
            <img
              src={kashmir}
              alt="Kashmir Valley"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>

          <div className="relative container mx-auto flex flex-col items-center justify-center min-h-[72vh] px-4 py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm">
                Craft unforgettable journeys across India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Explore India with{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
                Wonder Weave
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 max-w-[720px] text-lg sm:text-xl text-white/90"
            >
              From the serene valleys of Kashmir to the vibrant streets of
              Jaipur, weave your perfect itinerary with ease.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <GradientButton>
                Plan Your Trip
                <ChevronRight className="ml-2 h-4 w-4" />
              </GradientButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/15"
              >
                Explore Destinations
              </Button>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 rounded-2xl bg-white/10 px-6 py-4 text-sm ring-1 ring-white/20 backdrop-blur">
              <HeroStat
                icon={<Mountain className="h-4 w-4" />}
                label="Destinations"
                value="150+"
              />
              <HeroStat
                icon={<Calendar className="h-4 w-4" />}
                label="Itineraries"
                value="3k+"
              />
              <HeroStat
                icon={<Globe2 className="h-4 w-4" />}
                label="Travelers"
                value="25k+"
              />
            </div>
          </div>
        </section>
    )
}
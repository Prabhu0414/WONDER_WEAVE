import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";

export interface Destination {
  title: string;
  description: string;
  location: string;
  image: string;
  queryPlace: string;
}

interface Props {
  destination: Destination;
  onClick?: () => void;
}

export function DestinationCard({ destination, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -4;
    const rotateY = ((x - midX) / midX) * 4;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="perspective-[1000px]"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        onClick={onClick}
        className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border bg-white dark:bg-white border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg will-change-transform"
      >
        {/* glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 opacity-0 blur-[6px] transition-opacity duration-300 group-hover:opacity-40" />

        <div className="relative">
          {/* image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* location badge */}
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-orange-300" />
              {destination.location}
            </div>
          </div>

          {/* card content */}
          <div className="relative p-5">
            <h3 className="text-lg font-bold">{destination.title}</h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-700">
              {destination.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                className="pointer-events-none bg-gradient-to-r from-orange-50 to-rose-50 text-gray-700 dark:text-slate-500 border-orange-200 dark:border-slate-700"
              >
                View Details
              </Button>

              {/* rating stars */}
              <div className="flex items-center gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "fill-yellow-400" : "opacity-40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

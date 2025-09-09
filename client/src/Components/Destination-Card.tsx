"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Star, Clock } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


interface DestinationCardProps {
  id: string
  name: string
  country: string
  image: string
  rating: number
  duration: string
  price: string
  highlights: string[]
  onClick: (id: string) => void
}

export function SearchDestinationCard({
  id,
  name,
  country,
  image,
  rating,
  duration,
  price,
  highlights,
  onClick,
}: DestinationCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -4
    const rotateY = ((x - midX) / midX) * 4
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  const resetTilt = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "rotateX(0deg) rotateY(0deg)"
  }

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
        onClick={() => onClick(id)}
        className="group relative h-full overflow-hidden rounded-2xl border bg-white dark:bg-white border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg will-change-transform cursor-pointer"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 opacity-0 blur-[6px] transition-opacity duration-300 group-hover:opacity-40" />

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* location badge */}
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-orange-300" />
              {country}
            </div>

            {/* price badge */}
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-orange-400 to-pink-400 text-white border-0">{price}</Badge>
            </div>
          </div>

          <div className="relative p-5">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>

            <div className="mt-2 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{duration}</span>
                </div>
              </div>

              {/* rating stars */}
              <div className="flex items-center gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400" : "opacity-40"}`} />
                ))}
              </div>
            </div>

            {/* highlights */}
            <div className="mt-3 flex flex-wrap gap-1">
              {highlights.slice(0, 2).map((highlight, index) => (
                <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-600 bg-orange-50">
                  {highlight}
                </Badge>
              ))}
              {highlights.length > 2 && (
                <Badge variant="outline" className="text-xs border-orange-200 text-orange-600 bg-orange-50">
                  +{highlights.length - 2} more
                </Badge>
              )}
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-gradient-to-r from-orange-50 to-rose-50 text-gray-700 border-orange-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-rose-100"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

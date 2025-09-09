"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { discoverPlaces, searchFlights, getErrorMessage } from "../api"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [fromCity, setFromCity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [guests, setGuests] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    try {
      setIsLoading(true)

      let discovery
      try {
        discovery = await discoverPlaces({
          place: searchQuery.trim(),
          radiusMeters: 5000,
          limit: 20,
          wantHotels: true,
          wantRestaurants: true,
          wantCategories: ["attraction", "museum", "temple", "park", "monument", "zoo"],
        })
      } catch (err) {
        console.error("Discovery failed", err)
        alert(`Search failed: ${getErrorMessage(err)}`)
        return
      }

      let flights: any = undefined
      if (fromCity.trim()) {
        try {
          flights = await searchFlights({
            fromCity: fromCity.trim(),
            toCity: searchQuery.trim(),
            date: startDate || undefined,
          })
        } catch (err) {
          console.warn("Flight search failed", err)
          flights = undefined
        }
      }

      navigate("/TravelItineraryPage", {
        state: {
          discovery,
          flights,
          query: searchQuery.trim(),
          fromCity: fromCity.trim() || undefined,
          startDate: startDate || undefined,
          endDate: endDate || undefined,
          guests,
        },
      })
    } catch (err) {
      console.error("Search failed", err)
      alert(`Could not fetch results. ${getErrorMessage(err)}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50" />

      <div className="relative container max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Discover Your Next
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Adventure
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Create unforgettable travel experiences with personalized itineraries crafted just for you
          </p>
        </div>

        <Card className="bg-white backdrop-blur-sm border-orange-200/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-stretch">
              {/* Destination */}
              <div className="flex-1 min-w-[200px] relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <Input
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base border-orange-200/50 focus:border-orange-400 focus:ring-orange-400/20"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              {/* From City */}
              <div className="flex-1 min-w-[200px] relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <Input
                  placeholder="Where are you departing from?"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="pl-10 h-12 text-base border-orange-200/50 focus:border-orange-400 focus:ring-orange-400/20"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              {/* Start Date */}
              <div className="relative flex-1 min-w-[150px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-2 h-12 border border-orange-200/50 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* End Date */}
              <div className="relative flex-1 min-w-[150px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-2 h-12 border border-orange-200/50 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Guests */}
              <div className="relative flex-1 min-w-[100px]">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <input
                  type="number"
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full pl-10 pr-2 h-12 border border-orange-200/50 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Search Button */}
              <Button
                onClick={handleSearch}
                size="lg"
                className="flex-1 min-w-[120px] bg-orange-600 hover:bg-orange-700 text-white border-0 shadow-md font-medium"
              >
                <Search className="h-4 w-4 mr-2" />
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

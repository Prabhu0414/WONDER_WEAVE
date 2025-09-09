"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
    // Handle search logic here
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-6 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                <Input
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base border-orange-200/50 focus:border-orange-400 focus:ring-orange-400/20"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <div className="flex gap-2 md:gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 md:flex-none border-orange-300 bg-white hover:bg-orange-50 text-orange-700 font-medium"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Dates</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 md:flex-none border-orange-300 bg-white hover:bg-orange-50 text-orange-700 font-medium"
                >
                  <Users className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Guests</span>
                </Button>

                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="flex-1 md:flex-none bg-orange-600 hover:bg-orange-700 text-white border-0 shadow-md font-medium"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

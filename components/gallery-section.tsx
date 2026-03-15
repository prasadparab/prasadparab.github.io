"use client"

import { useState } from "react"
import Image from "next/image"
import { getSportIcon } from "./sports-icons"
import { Calendar, MapPin, Trophy, ImageIcon, Medal } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface Team {
  id: string
  name: string
  color: string
}

interface GalleryImages {
  first: string
  second: string
  third: string
}

interface Game {
  id: string
  name: string
  icon: string
  description: string
  date: string
  time: string
  venue: string
  status: "completed" | "upcoming"
  results: {
    first: string
    second: string
    third: string
  } | null
  gallery?: GalleryImages
}

interface GallerySectionProps {
  games: Game[]
  teams: Team[]
}

type PlaceType = "first" | "second" | "third"

interface LightboxState {
  gameId: string
  place: PlaceType
}

const getPlaceColor = (place: PlaceType) => {
  switch (place) {
    case "first": return "text-[var(--gold)]"
    case "second": return "text-[var(--silver)]"
    case "third": return "text-[var(--bronze)]"
  }
}

const getPlaceBgColor = (place: PlaceType) => {
  switch (place) {
    case "first": return "bg-[var(--gold)]/10"
    case "second": return "bg-[var(--silver)]/10"
    case "third": return "bg-[var(--bronze)]/10"
  }
}

const getPlaceBorderColor = (place: PlaceType) => {
  switch (place) {
    case "first": return "border-[var(--gold)]/50"
    case "second": return "border-[var(--silver)]/50"
    case "third": return "border-[var(--bronze)]/50"
  }
}

const getPlaceLabel = (place: PlaceType) => {
  switch (place) {
    case "first": return "1st"
    case "second": return "2nd"
    case "third": return "3rd"
  }
}

export function GallerySection({ games, teams }: GallerySectionProps) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const getTeamById = (id: string) => teams.find(t => t.id === id)

  const completedGames = games
    .filter(game => game.status === "completed" && game.gallery && game.results)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const currentGame = lightbox ? completedGames.find(g => g.id === lightbox.gameId) : null
  const currentImage = currentGame?.gallery?.[lightbox?.place as PlaceType] || null
  const currentTeam = currentGame && lightbox ? getTeamById(currentGame.results?.[lightbox.place] || "") : null

  if (completedGames.length === 0) {
    return (
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
              Event <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Photos from completed events will appear here.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
            <p>No gallery images available yet.</p>
          </div>
        </div>
      </section>
    )
  }

  const places: PlaceType[] = ["first", "second", "third"]

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the best moments from our completed events. Click on images to view in full screen.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-0.5" />

          <div className="space-y-12">
            {completedGames.map((game, index) => {
              const Icon = getSportIcon(game.icon)
              const isEven = index % 2 === 0

              return (
                <div
                  key={game.id}
                  className={cn(
                    "relative flex flex-col sm:flex-row gap-4 sm:gap-8",
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  )}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full border-4 sm:-translate-x-1/2 z-10 bg-primary border-primary/30" />

                  {/* Card */}
                  <div className={cn(
                    "ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] rounded-2xl border border-border bg-card overflow-hidden",
                    isEven ? "sm:mr-auto" : "sm:ml-auto"
                  )}>
                    {/* Header */}
                    <div className="p-5 border-b border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-foreground truncate mb-1">{game.name}</h3>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{new Date(game.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{game.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Results - All 3 places */}
                      {game.results && (
                        <div className="mt-4 pt-4 border-t border-border space-y-2">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-[var(--gold)]" />
                            <span className="text-sm font-bold text-[var(--gold)]">1st:</span>
                            <span className="text-sm font-semibold text-foreground">
                              {getTeamById(game.results.first)?.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Medal className="w-4 h-4 text-[var(--silver)]" />
                            <span className="text-sm font-bold text-[var(--silver)]">2nd:</span>
                            <span className="text-sm font-semibold text-foreground">
                              {getTeamById(game.results.second)?.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Medal className="w-4 h-4 text-[var(--bronze)]" />
                            <span className="text-sm font-bold text-[var(--bronze)]">3rd:</span>
                            <span className="text-sm font-semibold text-foreground">
                              {getTeamById(game.results.third)?.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gallery Grid - 1 image per place */}
                    {game.gallery && game.results && (
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-3">
                          {places.map((place) => {
                            const teamId = game.results?.[place]
                            const team = teamId ? getTeamById(teamId) : null
                            const imageUrl = game.gallery?.[place]

                            if (!team || !imageUrl) return null

                            return (
                              <button
                                key={place}
                                onClick={() => setLightbox({ gameId: game.id, place })}
                                className={cn(
                                  "relative rounded-xl overflow-hidden group cursor-pointer border-2",
                                  getPlaceBorderColor(place)
                                )}
                              >
                                <div className="aspect-square relative">
                                  <Image
                                    src={imageUrl}
                                    alt={`${game.name} - ${team.name} (${getPlaceLabel(place)} place)`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                  
                                  {/* Place Badge */}
                                  <div className={cn(
                                    "absolute top-2 left-2 px-2.5 py-1 rounded-lg text-sm font-black tracking-wide shadow-lg",
                                    getPlaceBgColor(place),
                                    getPlaceColor(place),
                                    "backdrop-blur-sm border",
                                    getPlaceBorderColor(place)
                                  )}>
                                    {getPlaceLabel(place)}
                                  </div>

                                  {/* Team Name */}
                                  <div className="absolute bottom-0 left-0 right-0 p-2">
                                    <p className="text-white text-xs font-semibold truncate text-center">
                                      {team.name}
                                    </p>
                                  </div>

                                  {/* Hover Overlay */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <div className="relative w-full aspect-video">
            {currentImage && lightbox && currentTeam && (
              <>
                <Image
                  src={currentImage}
                  alt={`${currentGame?.name} - ${currentTeam.name}`}
                  fill
                  className="object-contain"
                />
                
                {/* Game Info */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 text-white text-sm font-medium">
                  {currentGame?.name}
                </div>

                {/* Team & Place Info */}
                <div className={cn(
                  "absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg flex items-center gap-3",
                  "bg-black/70"
                )}>
                  <div className={cn(
                    "flex items-center gap-1.5",
                    getPlaceColor(lightbox.place)
                  )}>
                    <Medal className="w-5 h-5" />
                    <span className="font-bold">{getPlaceLabel(lightbox.place)} Place</span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <span className="text-white font-semibold">{currentTeam.name}</span>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

"use client"

import { getSportIcon } from "./sports-icons"
import { Calendar, MapPin, CheckCircle2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface Game {
  id: string
  name: string
  icon: string
  description: string
  date: string
  endDate?: string
  time: string
  venue: string
  status: "completed" | "upcoming"
  results: {
    first: string
    second: string
    third: string
  } | null
}

interface GamesSectionProps {
  games: Game[]
}

export function GamesSection({ games }: GamesSectionProps) {
  return (
    <section id="games" className="py-24 px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-7xl mx-auto" style={{textAlign:"center",position:"relative",
        top:"-40px", fontSize:"24px", color:"#d34747", fontWeight:"bold"
      }}>
        Designed by Swapnil Parab (Pappu 35)
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Our <span className="text-primary">Games</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete across a diverse range of sports. From field games to mind sports, 
            there{"'"}s something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => {
            const Icon = getSportIcon(game.icon)
            const isCompleted = game.status === "completed"
            
            return (
              <div
                key={game.id}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
                  isCompleted && "bg-card/80"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Status Badge */}
                <div className={cn(
                  "absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                  isCompleted 
                    ? "bg-green-500/10 text-green-400" 
                    : "bg-primary/10 text-primary"
                )}>
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3" />
                      <span>Upcoming</span>
                    </>
                  )}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{game.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{game.description}</p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(game.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                    {game.endDate && (
                      <span> - {new Date(game.endDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    )}

                    <span className="text-border">•</span>
                    <span>{game.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{game.venue}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

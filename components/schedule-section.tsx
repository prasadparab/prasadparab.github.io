"use client"

import { getSportIcon, TrophyIcon } from "./sports-icons"
import { Calendar, MapPin, Clock, CheckCircle2, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface Team {
  id: string
  name: string
  color: string
}

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

interface ScheduleSectionProps {
  games: Game[]
  teams: Team[]
}

export function ScheduleSection({ games, teams }: ScheduleSectionProps) {
  const getTeamById = (id: string) => teams.find(t => t.id === id)

  const sortedGames = [...games].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Season <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track all games throughout the season. Completed events show the winning teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-0.5" />

          <div className="space-y-8">
            {sortedGames.map((game, index) => {
              const Icon = getSportIcon(game.icon)
              const isCompleted = game.status === "completed"
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
                  <div className={cn(
                    "absolute left-6 sm:left-1/2 w-4 h-4 rounded-full border-4 sm:-translate-x-1/2 z-10",
                    isCompleted 
                      ? "bg-green-500 border-green-500/30" 
                      : "bg-secondary border-primary"
                  )} />

                  {/* Card */}
                  <div className={cn(
                    "ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] rounded-2xl border border-border bg-card p-6",
                    isEven ? "sm:mr-auto" : "sm:ml-auto",
                    isCompleted && "border-green-500/20"
                  )}>
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        isCompleted ? "bg-green-500/10" : "bg-primary/10"
                      )}>
                        <Icon className={cn(
                          "w-6 h-6",
                          isCompleted ? "text-green-400" : "text-primary"
                        )} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground truncate">{game.name}</h3>
                          {isCompleted && (
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{new Date(game.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric'
                            })}</span>
                            {game.endDate && (
                              <span> - {new Date(game.endDate).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric'
                              })}</span>
                            )}

                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{game.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{game.venue}</span>
                          </div>
                        </div>

                        {/* Results */}
                        {isCompleted && game.results && (
                          <div className="space-y-2 pt-4 border-t border-border">
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              Results
                            </div>
                            
                            {/* 1st Place */}
                            {(() => {
                              const team = getTeamById(game.results.first)
                              return team && (
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--gold)]/10">
                                  <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center">
                                    <Trophy className="w-4 h-4 text-black" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-foreground">{team.name}</div>
                                    <div className="text-xs text-[var(--gold)]">1st Place • 100 pts</div>
                                  </div>
                                </div>
                              )
                            })()}

                            {/* 2nd Place */}
                            {(() => {
                              const team = getTeamById(game.results.second)
                              return team && (
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--silver)]/10">
                                  <div className="w-8 h-8 rounded-full bg-[var(--silver)] flex items-center justify-center">
                                    <span className="text-xs font-bold text-black">2</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-foreground">{team.name}</div>
                                    <div className="text-xs text-[var(--silver)]">2nd Place • 70 pts</div>
                                  </div>
                                </div>
                              )
                            })()}

                            {/* 3rd Place */}
                            {(() => {
                              const team = getTeamById(game.results.third)
                              return team && (
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bronze)]/10">
                                  <div className="w-8 h-8 rounded-full bg-[var(--bronze)] flex items-center justify-center">
                                    <span className="text-xs font-bold text-black">3</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-foreground">{team.name}</div>
                                    <div className="text-xs text-[var(--bronze)]">3rd Place • 50 pts</div>
                                  </div>
                                </div>
                              )
                            })()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Trophy, Medal, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Team {
  id: string
  name: string
  color: string
}

interface Game {
  id: string
  name: string
  status: "completed" | "upcoming"
  results: {
    first: string
    second: string
    third: string
  } | null
}

interface LeaderboardSectionProps {
  teams: Team[]
  games: Game[]
}

interface TeamScore {
  team: Team
  points: number
  firstPlaces: number
  secondPlaces: number
  thirdPlaces: number
  gamesPlayed: number
  firstGames: string[]
  secondGames: string[]
  thirdGames: string[]
  allGames: { name: string; place: PlaceType }[]
}

const POINTS = {
  first: 100,
  second: 50,
  third: 30,
}

type PlaceType = "first" | "second" | "third"

interface PlaceModalData {
  teamName: string
  place: PlaceType
  games: string[]
}

interface GamesModalData {
  teamName: string
  games: { name: string; place: PlaceType }[]
}

export function LeaderboardSection({ teams, games }: LeaderboardSectionProps) {
  const [placeModalData, setPlaceModalData] = useState<PlaceModalData | null>(null)
  const [gamesModalData, setGamesModalData] = useState<GamesModalData | null>(null)

  // Calculate scores
  const calculateScores = (): TeamScore[] => {
    const scores: Record<string, TeamScore> = {}

    // Initialize all teams with 0
    teams.forEach(team => {
      scores[team.id] = {
        team,
        points: 0,
        firstPlaces: 0,
        secondPlaces: 0,
        thirdPlaces: 0,
        gamesPlayed: 0,
        firstGames: [],
        secondGames: [],
        thirdGames: [],
        allGames: [],
      }
    })

    // Calculate points from completed games
    games.forEach(game => {
      if (game.status === "completed" && game.results) {
        const { first, second, third } = game.results

        if (scores[first]) {
          scores[first].points += POINTS.first
          scores[first].firstPlaces += 1
          scores[first].gamesPlayed += 1
          scores[first].firstGames.push(game.name)
          scores[first].allGames.push({ name: game.name, place: "first" })
        }
        if (scores[second]) {
          scores[second].points += POINTS.second
          scores[second].secondPlaces += 1
          scores[second].gamesPlayed += 1
          scores[second].secondGames.push(game.name)
          scores[second].allGames.push({ name: game.name, place: "second" })
        }
        if (scores[third]) {
          scores[third].points += POINTS.third
          scores[third].thirdPlaces += 1
          scores[third].gamesPlayed += 1
          scores[third].thirdGames.push(game.name)
          scores[third].allGames.push({ name: game.name, place: "third" })
        }
      }
    })

    // Sort by points (descending)
    return Object.values(scores).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.firstPlaces !== a.firstPlaces) return b.firstPlaces - a.firstPlaces
      if (b.secondPlaces !== a.secondPlaces) return b.secondPlaces - a.secondPlaces
      return b.thirdPlaces - a.thirdPlaces
    })
  }

  const leaderboard = calculateScores()
  const completedGames = games.filter(g => g.status === "completed").length

  const handlePlaceClick = (entry: TeamScore, place: PlaceType) => {
    const gamesList = place === "first" 
      ? entry.firstGames 
      : place === "second" 
        ? entry.secondGames 
        : entry.thirdGames

    if (gamesList.length > 0) {
      setPlaceModalData({
        teamName: entry.team.name,
        place,
        games: gamesList,
      })
    }
  }

  const handleGamesClick = (entry: TeamScore) => {
    if (entry.allGames.length > 0) {
      setGamesModalData({
        teamName: entry.team.name,
        games: entry.allGames,
      })
    }
  }

  const getPlaceLabel = (place: PlaceType) => {
    switch (place) {
      case "first": return "1st Place"
      case "second": return "2nd Place"
      case "third": return "3rd Place"
    }
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
      case "first": return "bg-[var(--gold)]/20"
      case "second": return "bg-[var(--silver)]/20"
      case "third": return "bg-[var(--bronze)]/20"
    }
  }

  return (
    <section id="leaderboard" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Live <span className="text-primary">Leaderboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time standings based on {completedGames} completed game{completedGames !== 1 ? "s" : ""}.
            Points: 1st = 100, 2nd = 70, 3rd = 50
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12">
          {/* 2nd Place */}
          {leaderboard[1] && (
            <div className="flex flex-col items-center">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white mb-3"
                style={{ backgroundColor: leaderboard[1].team.color }}
              >
                {leaderboard[1].team.name.split(" ")[1]?.[0] || leaderboard[1].team.name[0]}
              </div>
              <div className="w-24 sm:w-32 h-24 sm:h-28 rounded-t-xl bg-[var(--silver)]/20 border-t-4 border-[var(--silver)] flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-[var(--silver)]">2</span>
                <span className="text-xs text-muted-foreground mt-1">{leaderboard[1].points} pts</span>
              </div>
              <div className="text-sm font-semibold text-foreground mt-2 text-center">
                {leaderboard[1].team.name}
              </div>
            </div>
          )}

          {/* 1st Place */}
          {leaderboard[0] && (
            <div className="flex flex-col items-center">
              <Trophy className="w-8 h-8 text-[var(--gold)] mb-2 animate-pulse" />
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-3xl font-black text-white mb-3 ring-4 ring-[var(--gold)]/30"
                style={{ backgroundColor: leaderboard[0].team.color }}
              >
                {leaderboard[0].team.name.split(" ")[1]?.[0] || leaderboard[0].team.name[0]}
              </div>
              <div className="w-28 sm:w-36 h-32 sm:h-36 rounded-t-xl bg-[var(--gold)]/20 border-t-4 border-[var(--gold)] flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-[var(--gold)]">1</span>
                <span className="text-sm text-muted-foreground mt-1">{leaderboard[0].points} pts</span>
              </div>
              <div className="text-base font-bold text-foreground mt-2 text-center">
                {leaderboard[0].team.name}
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {leaderboard[2] && (
            <div className="flex flex-col items-center">
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white mb-3"
                style={{ backgroundColor: leaderboard[2].team.color }}
              >
                {leaderboard[2].team.name.split(" ")[1]?.[0] || leaderboard[2].team.name[0]}
              </div>
              <div className="w-20 sm:w-28 h-20 sm:h-24 rounded-t-xl bg-[var(--bronze)]/20 border-t-4 border-[var(--bronze)] flex flex-col items-center justify-center">
                <span className="text-xl font-black text-[var(--bronze)]">3</span>
                <span className="text-xs text-muted-foreground mt-1">{leaderboard[2].points} pts</span>
              </div>
              <div className="text-sm font-semibold text-foreground mt-2 text-center">
                {leaderboard[2].team.name}
              </div>
            </div>
          )}
        </div>

        {/* Full Leaderboard Table */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rank</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Team</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <span className="hidden sm:inline">Games</span>
                    <span className="sm:hidden">G</span>
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold text-[var(--gold)] uppercase tracking-wider">
                    <span className="hidden sm:inline">1st</span>
                    <Medal className="w-4 h-4 sm:hidden inline" />
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold text-[var(--silver)] uppercase tracking-wider">
                    <span className="hidden sm:inline">2nd</span>
                    <span className="sm:hidden">2</span>
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold text-[var(--bronze)] uppercase tracking-wider">
                    <span className="hidden sm:inline">3rd</span>
                    <span className="sm:hidden">3</span>
                  </th>
                  <th className="px-4 py-4 text-right text-xs font-semibold text-primary uppercase tracking-wider">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr 
                    key={entry.team.id}
                    className={cn(
                      "border-b border-border last:border-0 transition-colors hover:bg-secondary/30",
                      index < 3 && "bg-primary/5"
                    )}
                  >
                    <td className="px-4 py-4">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                        index === 0 && "bg-[var(--gold)]/20 text-[var(--gold)]",
                        index === 1 && "bg-[var(--silver)]/20 text-[var(--silver)]",
                        index === 2 && "bg-[var(--bronze)]/20 text-[var(--bronze)]",
                        index > 2 && "bg-secondary text-muted-foreground"
                      )}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: entry.team.color }}
                        >
                          {entry.team.name.split(" ")[1]?.[0] || entry.team.name[0]}
                        </div>
                        <span className="font-semibold text-foreground">{entry.team.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handleGamesClick(entry)}
                        disabled={entry.gamesPlayed === 0}
                        className={cn(
                          "font-semibold text-muted-foreground transition-all",
                          entry.gamesPlayed > 0 && "hover:bg-primary/20 hover:text-primary px-3 py-1 rounded-lg cursor-pointer hover:scale-110"
                        )}
                        aria-label={entry.gamesPlayed > 0 ? `View all ${entry.team.name}'s games` : undefined}
                      >
                        {entry.gamesPlayed}
                      </button>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handlePlaceClick(entry, "first")}
                        disabled={entry.firstPlaces === 0}
                        className={cn(
                          "font-semibold text-[var(--gold)] transition-all",
                          entry.firstPlaces > 0 && "hover:bg-[var(--gold)]/20 px-3 py-1 rounded-lg cursor-pointer hover:scale-110"
                        )}
                        aria-label={entry.firstPlaces > 0 ? `View ${entry.team.name}'s 1st place games` : undefined}
                      >
                        {entry.firstPlaces}
                      </button>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handlePlaceClick(entry, "second")}
                        disabled={entry.secondPlaces === 0}
                        className={cn(
                          "font-semibold text-[var(--silver)] transition-all",
                          entry.secondPlaces > 0 && "hover:bg-[var(--silver)]/20 px-3 py-1 rounded-lg cursor-pointer hover:scale-110"
                        )}
                        aria-label={entry.secondPlaces > 0 ? `View ${entry.team.name}'s 2nd place games` : undefined}
                      >
                        {entry.secondPlaces}
                      </button>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handlePlaceClick(entry, "third")}
                        disabled={entry.thirdPlaces === 0}
                        className={cn(
                          "font-semibold text-[var(--bronze)] transition-all",
                          entry.thirdPlaces > 0 && "hover:bg-[var(--bronze)]/20 px-3 py-1 rounded-lg cursor-pointer hover:scale-110"
                        )}
                        aria-label={entry.thirdPlaces > 0 ? `View ${entry.team.name}'s 3rd place games` : undefined}
                      >
                        {entry.thirdPlaces}
                      </button>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-lg font-bold text-foreground">{entry.points}</span>
                        {entry.points > 0 && (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Place Modal (1st, 2nd, 3rd) */}
      <Dialog open={placeModalData !== null} onOpenChange={(open) => !open && setPlaceModalData(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={cn("flex items-center gap-2", placeModalData && getPlaceColor(placeModalData.place))}>
              <Medal className="w-5 h-5" />
              {placeModalData?.teamName} - {placeModalData && getPlaceLabel(placeModalData.place)} Wins
            </DialogTitle>
            <DialogDescription>
              Games where {placeModalData?.teamName} achieved {placeModalData && getPlaceLabel(placeModalData.place).toLowerCase()}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2">
            {placeModalData?.games.map((gameName, index) => (
              <div 
                key={index}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg",
                  placeModalData && getPlaceBgColor(placeModalData.place)
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                  placeModalData && getPlaceBgColor(placeModalData.place),
                  placeModalData && getPlaceColor(placeModalData.place)
                )}>
                  {index + 1}
                </div>
                <span className="font-medium text-foreground">{gameName}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* All Games Modal */}
      <Dialog open={gamesModalData !== null} onOpenChange={(open) => !open && setGamesModalData(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <Trophy className="w-5 h-5" />
              {gamesModalData?.teamName} - All Games
            </DialogTitle>
            <DialogDescription>
              All games where {gamesModalData?.teamName} placed on the podium
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2">
            {gamesModalData?.games.map((game, index) => (
              <div 
                key={index}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg",
                  getPlaceBgColor(game.place)
                )}
              >
                <span className="font-medium text-foreground">{game.name}</span>
                <span className={cn(
                  "text-sm font-semibold px-2 py-1 rounded-md",
                  getPlaceColor(game.place),
                  getPlaceBgColor(game.place)
                )}>
                  {getPlaceLabel(game.place)}
                </span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

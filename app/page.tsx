"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GamesSection } from "@/components/games-section"
import { TeamsSection } from "@/components/teams-section"
import { ScheduleSection } from "@/components/schedule-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

interface Team {
  id: string
  name: string
  logo: string
  color: string
  members: string[]
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
  gallery?: {
    first: string
    second: string
    third: string
  }
}

interface SportsData {
  clubName: string
  season: string
  teams: Team[]
  games: Game[]
}

export default function SportsClubPage() {
  const [data, setData] = useState<SportsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading sports data...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Data</h1>
          <p className="text-muted-foreground">{error || "Unable to load sports data"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header clubName={data.clubName} />
      <main>
        <HeroSection clubName={data.clubName} season={data.season} />
        <GamesSection games={data.games} />
        <TeamsSection teams={data.teams} />
        <ScheduleSection games={data.games} teams={data.teams} />
        <LeaderboardSection teams={data.teams} games={data.games} />
        <GallerySection games={data.games} teams={data.teams} />
      </main>
      <Footer clubName={data.clubName} />
    </div>
  )
}

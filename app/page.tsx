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
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    const updateOrientation = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches
      setIsPortrait(portrait)
    }

    updateOrientation()
    window.addEventListener("resize", updateOrientation)
    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener("change", updateOrientation)
    }

    // Try the Screen Orientation API (best effort; may be blocked in browsers without user gesture)
    if (window.screen?.orientation?.lock) {
      window.screen.orientation.lock("landscape").catch(() => {
        /* ignore */
      })
    }

    return () => {
      window.removeEventListener("resize", updateOrientation)
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener("change", updateOrientation)
      }
    }
  }, [])

  useEffect(() => {
    if (isPortrait && window.screen?.orientation?.lock) {
      window.screen.orientation.lock("landscape").catch(() => {
        /* ignore */
      })
    }
  }, [isPortrait])

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
  }, []);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // 2. Set timer for 30 seconds (30,000 ms)
    const timer = setTimeout(() => {
      setIsVisible(false); // Change visibility
    }, 60000);

    // 3. Cleanup timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {isPortrait && (
        <div className="orientation-warning fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 text-center">
          <div className="max-w-sm rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold mb-2">Please rotate your device</h2>
            <p className="text-sm text-muted-foreground">
              This site works best in landscape mode. Rotate your phone or tablet to continue.
            </p>
          </div>
        </div>
      )}
      <div className="site-content min-h-screen bg-background">
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
         {isVisible && (
          <div id="broughttoyouby" style={{ display: 'block', position: 'fixed',
             bottom: '15px', right: '20px',
             padding: '2px 5px',
             fontSize: '18px',
      backgroundColor: '#202020',
      borderRadius: '10px'  }}>Brought to you by Swapnil Parab (Pappu 35)</div>
        )}
      </div>
    </>
  )
}

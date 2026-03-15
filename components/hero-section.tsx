"use client"

import Image from "next/image"
import { CricketIcon, FootballIcon, ChessIcon, VolleyballIcon, PickleballIcon, CarromIcon } from "./sports-icons"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  clubName: string
  season: string
}

export function HeroSection({ clubName, season }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-pulse">
          <CricketIcon className="w-32 h-32" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-100">
          <FootballIcon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse delay-200">
          <ChessIcon className="w-20 h-20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
          <VolleyballIcon className="w-28 h-28" />
        </div>
        <div className="absolute bottom-32 right-10 animate-pulse delay-500">
          <PickleballIcon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse delay-700">
          <CarromIcon className="w-20 h-20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Sports Meet Season {season}</span>
        </div>
        <Image
                                            src={"/images/logo.jpg"}
                                            alt="Club Logo"
                                            width={200}
                                            height={200}
                                            className="mx-auto mb-8 rounded-full border-4 border-primary/20"
                                          />
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-6 text-balance">
          <span className="block">{clubName.split(" ")[0]}</span>
          <span className="block text-primary">{clubName.split(" ").slice(1).join(" ")}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          Where champions are made. Compete across 11 thrilling sports, 
          track your team{"'"}s progress, and rise to the top of the leaderboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#games"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            View Games
          </a>
          <a
            href="#leaderboard"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-all border border-border"
          >
            Leaderboard
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-foreground">12</div>
            <div className="text-sm text-muted-foreground mt-1">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-primary">11</div>
            <div className="text-sm text-muted-foreground mt-1">Games</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-foreground">60+</div>
            <div className="text-sm text-muted-foreground mt-1">Athletes</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#games"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}

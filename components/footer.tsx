"use client"

import { TrophyIcon, CricketIcon, FootballIcon, ChessIcon, VolleyballIcon, CarromIcon, PickleballIcon } from "./sports-icons"

interface FooterProps {
  clubName: string
}

export function Footer({ clubName }: FooterProps) {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <TrophyIcon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black text-foreground tracking-tight">{clubName}</span>
          </div>

          {/* Sport Icons */}
          <div className="flex items-center gap-4 mb-8 text-muted-foreground">
            <CricketIcon className="w-5 h-5" />
            <FootballIcon className="w-5 h-5" />
            <CarromIcon className="w-5 h-5" />
            <ChessIcon className="w-5 h-5" />
            <VolleyballIcon className="w-5 h-5" />
            <PickleballIcon className="w-5 h-5" />
          </div>

          <p className="text-sm text-muted-foreground max-w-md mb-8">
            Building champions through competition, teamwork, and sportsmanship. 
            Join us for an unforgettable season of sports.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">Home</a>
            <a href="#games" className="hover:text-foreground transition-colors">Games</a>
            <a href="#teams" className="hover:text-foreground transition-colors">Teams</a>
            <a href="#schedule" className="hover:text-foreground transition-colors">Schedule</a>
            <a href="#leaderboard" className="hover:text-foreground transition-colors">Leaderboard</a>
          </div>

          <div className="mt-12 pt-8 border-t border-border w-full text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {clubName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

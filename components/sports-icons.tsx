"use client"

import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
}

export function CricketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20L20 4M4 20l4-1-3-3-1 4z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="8" r="3"/>
      <path d="M7 17l2-2M9 15l2-2" strokeLinecap="round"/>
    </svg>
  )
}

export function FootballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round"/>
      <path d="M12 7l3 2.5v5L12 17l-3-2.5v-5L12 7z"/>
      <path d="M9 9.5L6 8M15 9.5l3-1.5M9 14.5L6 16M15 14.5l3 1.5"/>
    </svg>
  )
}

export function CarromIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <circle cx="5" cy="5" r="1" fill="currentColor"/>
      <circle cx="19" cy="5" r="1" fill="currentColor"/>
      <circle cx="5" cy="19" r="1" fill="currentColor"/>
      <circle cx="19" cy="19" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  )
}

export function ChessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M9 22h6M12 2v3M8 5h8l-1 4H9L8 5zM9 9v4c0 2-1 3-1 5h8c0-2-1-3-1-5V9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 22v-4h10v4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function VolleyballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2c0 5.5 4.5 10 10 10M2 12c5.5 0 10 4.5 10 10M2 12c5.5 0 10-4.5 10-10" strokeLinecap="round"/>
    </svg>
  )
}

export function PickleballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="14" rx="8" ry="6"/>
      <path d="M12 2v6M10 4h4" strokeLinecap="round"/>
      <circle cx="9" cy="13" r="1" fill="currentColor"/>
      <circle cx="12" cy="15" r="1" fill="currentColor"/>
      <circle cx="15" cy="13" r="1" fill="currentColor"/>
    </svg>
  )
}

export function BadmintonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20l8-8M4 20l2 2 2-2-2-2-2 2z"/>
      <path d="M12 12l6-6c2-2 4 0 4 2s-2 4-4 4l-6 0"/>
      <path d="M16 6l-2 4M18 8l-4 2"/>
    </svg>
  )
}

export function TableTennisIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="10" cy="10" rx="8" ry="8"/>
      <path d="M15 15l5 5M18 18l2-2"/>
      <circle cx="18" cy="4" r="2" fill="currentColor"/>
    </svg>
  )
}

export function BasketballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2c-4 4-4 8 0 10s4 6 0 10"/>
      <path d="M12 2c4 4 4 8 0 10s-4 6 0 10"/>
    </svg>
  )
}

export function TennisIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M4 4c4 4 12 4 16 0M4 20c4-4 12-4 16 0"/>
      <path d="M12 2v20"/>
    </svg>
  )
}

export function SwimmingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2"/>
      <path d="M4 18c2 2 4-2 6 0s4-2 6 0 4-2 6 0M4 14c2 2 4-2 6 0s4-2 6 0 4-2 6 0"/>
      <path d="M8 6l4 4 4-2"/>
    </svg>
  )
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9H3a1 1 0 01-1-1V6a1 1 0 011-1h3M18 9h3a1 1 0 001-1V6a1 1 0 00-1-1h-3"/>
      <path d="M6 5h12v6a6 6 0 01-12 0V5z"/>
      <path d="M12 17v4M8 21h8"/>
    </svg>
  )
}

export function getSportIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<IconProps>> = {
    cricket: CricketIcon,
    football: FootballIcon,
    carrom: CarromIcon,
    chess: ChessIcon,
    volleyball: VolleyballIcon,
    pickleball: PickleballIcon,
    badminton: BadmintonIcon,
    "table-tennis": TableTennisIcon,
    basketball: BasketballIcon,
    tennis: TennisIcon,
    swimming: SwimmingIcon,
  }
  return icons[iconName] || CricketIcon
}

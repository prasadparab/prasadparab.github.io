"use client"

import { Users } from "lucide-react"

interface Team {
  id: string
  name: string
  logo: string
  color: string
  members: string[]
}

interface TeamsSectionProps {
  teams: Team[]
}

export function TeamsSection({ teams }: TeamsSectionProps) {
  return (
    <section id="teams" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Meet The <span className="text-primary">Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12 fierce competitors battling for glory. Get to know the teams and their members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Team Color Bar */}
              <div 
                className="h-2"
                style={{ backgroundColor: team.color }}
              />
              
              <div className="p-6">
                {/* Logo Placeholder */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-2xl font-black text-white"
                  style={{ backgroundColor: team.color }}
                >
                  {team.name.split(" ")[1]?.[0] || team.name[0]}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{team.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>{team.members.length} Members</span>
                </div>

                {/* Members List */}
                <div className="space-y-2">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                        style={{ backgroundColor: team.color, opacity: 0.8 }}
                      >
                        {member.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {member}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

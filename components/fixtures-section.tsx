"use client"

import Image from "next/image"
import { CricketIcon, FootballIcon, ChessIcon, VolleyballIcon, PickleballIcon, CarromIcon } from "./sports-icons"
import { ChevronDown } from "lucide-react"

interface Team {
  id: string
  name: string
  logo: string
  color: string
  members: string[]
}

interface FixturesSectionProps {
  clubName: string
  season: string
  teams: Team[]
}

export function FixturesSection({ clubName, season, teams }: FixturesSectionProps) {
  console.log("--",teams);
  return (
    <section id="fixtures" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Content */}
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl mb-10 font-black text-foreground tracking-tight mb-4">
            <span className="text-primary">Fixtures</span>
          </h2>
          <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-4">
            Pickleball
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">7:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">8:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">8:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">9:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">9:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">10:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">10:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4">11:00 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4">11:30 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4">12:00 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4">12:30 PM</td>
                
              </tr>
              
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Box Cricket
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">7:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">8:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">8:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">9:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">9:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">10:00 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">10:30 PM</td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4">11:00 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4">11:30 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4">12:00 PM</td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4">12:30 PM</td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Carrom
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Ring Football
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Cricket Season-Ball
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{"bye"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{"Semi-Final"}</td>
                <td className="border border-border p-4">{"1"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{"Semi-Final"}</td>
                <td className="border border-border p-4">{"2"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{"3rd place"}</td>
                <td className="border border-border p-4">{""}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               
               
              
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Table Tennis
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Overarm Tennis
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>


        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Chess
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{"bye"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{"Semi-Final"}</td>
                <td className="border border-border p-4">{"1"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{"Semi-Final"}</td>
                <td className="border border-border p-4">{"2"}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{"3rd place"}</td>
                <td className="border border-border p-4">{""}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               
               
              
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl font-black text-primary text-foreground tracking-tight mb-4">
            Badminton
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Volleyball
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>

        <div className="text-center mb-10">
          <span className="text-2xl sm:text-3xl text-primary font-black text-foreground tracking-tight mb-4">
            Underarm Cricket - Chakri
          </span>
        </div>
        <div className="text-center mb-16">
          <table className="w-full table-auto border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-4">Match no.</th>
                <th className="border border-border p-4">Team 1</th>
                <th className="border border-border p-4">Team 2</th>
                <th className="border border-border p-4">Time</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-4">1.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">2.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">3.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">4.</td>
                <td className="border border-border p-4">{teams[1].name}</td>
                <td className="border border-border p-4">{teams[0].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">5.</td>
                <td className="border border-border p-4">{teams[4].name}</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">6.</td>
                <td className="border border-border p-4">{teams[5].name}</td>
                <td className="border border-border p-4">{teams[6].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">7.</td>
                <td className="border border-border p-4">{teams[3].name}</td>
                <td className="border border-border p-4">{teams[2].name}</td>
                <td className="border border-border p-4"></td>
                
              </tr>
               <tr>
                <td className="border border-border p-4">8.</td>
                <td className="border border-border p-4">1st Topper</td>
                <td className="border border-border p-4">2nd Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Qualifier 1</td>
              </tr>
               <tr>
                <td className="border border-border p-4">9.</td>
                <td className="border border-border p-4">3rd Topper</td>
                <td className="border border-border p-4">4th Topper</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={5}>Eliminator</td>
              </tr>
               <tr>
                <td className="border border-border p-4">10.</td>
                <td className="border border-border p-4">Looser of Qualifier 1</td>
                <td className="border border-border p-4">Winner of eliminator</td>
                <td className="border border-border p-4"></td>
                
              </tr>
              <tr>
                <td colSpan={4}>Qualifier 2</td>
              </tr>
               <tr>
                <td className="border border-border p-4">11.</td>
                <td className="border border-border p-4 text-primary" colSpan={2}>
                  Qualifier 1 vs Qualifier 2 <br/>
                  FINAL
                </td>
                <td className="border border-border p-4"></td>
                
              </tr>
             
            </tbody>
          </table>

        </div>
      </div>
      
    </section>
  )
}

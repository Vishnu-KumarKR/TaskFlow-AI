"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BrainCircuit, AlertTriangle, Lightbulb, Zap } from "lucide-react"

const insights = [
  {
    type: "warning",
    icon: AlertTriangle,
    title: "Project Alpha may miss its deadline",
    description: "Based on the current velocity and remaining tasks, Project Alpha is projected to finish 3 days late. Consider reassigning resources.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    type: "recommendation",
    icon: Lightbulb,
    title: "Optimal Working Hours",
    description: "Your team completes 45% of tasks between 10:00 AM and 1:00 PM. We recommend scheduling complex pair-programming sessions during this window.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    type: "success",
    icon: Zap,
    title: "Productivity Spike",
    description: "Team productivity is up 12% this week compared to the 30-day average. The 'Marketing V2' project team is driving most of this increase.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  }
]

export default function AIInsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-indigo-500" />
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">AI Productivity Insights</h1>
          </div>
          <p className="text-muted-foreground">Intelligent recommendations powered by your team's workflow data.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {insights.map((insight, idx) => (
          <Card key={idx} className={`bg-card/50 backdrop-blur border ${insight.border} hover:shadow-md transition-shadow`}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={`p-3 rounded-xl ${insight.bg}`}>
                <insight.icon className={`h-6 w-6 ${insight.color}`} />
              </div>
              <div>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
                <CardDescription className="uppercase tracking-wider text-xs font-semibold mt-1">Generated 2 hours ago</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <p className="text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

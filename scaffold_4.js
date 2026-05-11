const fs = require('fs');
const path = require('path');

const files = {
  "app/dashboard/tasks/page.tsx": `"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Clock, MessageSquare, Paperclip } from "lucide-react"

const board = [
  {
    title: "To Do",
    tasks: [
      { id: 1, title: "Design login flow", priority: "High", labels: ["Design", "UI"], comments: 2, attachments: 1, due: "Tomorrow" },
      { id: 2, title: "Setup Prisma schema", priority: "Critical", labels: ["Backend", "Database"], comments: 5, attachments: 0, due: "Today" },
    ]
  },
  {
    title: "In Progress",
    tasks: [
      { id: 3, title: "Integrate NextAuth", priority: "Medium", labels: ["Auth", "Backend"], comments: 1, attachments: 0, due: "Oct 20" },
    ]
  },
  {
    title: "Review",
    tasks: [
      { id: 4, title: "Update dashboard layout", priority: "Medium", labels: ["Frontend"], comments: 4, attachments: 2, due: "Oct 18" },
    ]
  },
  {
    title: "Completed",
    tasks: [
      { id: 5, title: "Initialize project", priority: "High", labels: ["Setup"], comments: 0, attachments: 0, due: "Done" },
    ]
  }
]

export default function TasksPage() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage and track your tasks across all projects.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {board.map((column, idx) => (
          <div key={idx} className="flex flex-col w-80 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{column.title} <span className="ml-2 text-muted-foreground font-normal bg-muted px-2 py-0.5 rounded-full text-xs">{column.tasks.length}</span></h3>
              <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
            </div>
            
            <div className="flex flex-col gap-3">
              {column.tasks.map((task) => (
                <Card key={task.id} className="hover:shadow-md transition-all cursor-grab active:cursor-grabbing bg-card/50 backdrop-blur">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant={task.priority === 'Critical' ? 'destructive' : task.priority === 'High' ? 'default' : 'secondary'} className="text-[10px] px-1 py-0 h-4">
                        {task.priority}
                      </Badge>
                      {task.labels.map(label => (
                        <Badge key={label} variant="outline" className="text-[10px] px-1 py-0 h-4 bg-muted/50 text-muted-foreground border-none">
                          {label}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-sm font-medium leading-tight">{task.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2 border-t pt-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {task.comments}</span>
                        {task.attachments > 0 && <span className="flex items-center gap-1"><Paperclip className="h-3 w-3" /> {task.attachments}</span>}
                      </div>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {task.due}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
`,
  "app/dashboard/analytics/page.tsx": `"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const barData = [
  { name: "Jan", completed: 40, pending: 24 },
  { name: "Feb", completed: 30, pending: 13 },
  { name: "Mar", completed: 20, pending: 38 },
  { name: "Apr", completed: 27, pending: 39 },
  { name: "May", completed: 18, pending: 48 },
  { name: "Jun", completed: 23, pending: 38 },
  { name: "Jul", completed: 34, pending: 43 },
]

const pieData = [
  { name: "Development", value: 400, color: "#6366f1" },
  { name: "Design", value: 300, color: "#a855f7" },
  { name: "Marketing", value: 300, color: "#ec4899" },
  { name: "Management", value: 200, color: "#14b8a6" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your team's performance.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Task Completion Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888888" opacity={0.2} />
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Bar dataKey="completed" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#a855f7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Time Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={\`cell-\${index}\`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "none" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
`,
  "app/dashboard/ai-insights/page.tsx": `"use client"

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
          <Card key={idx} className={\`bg-card/50 backdrop-blur border \${insight.border} hover:shadow-md transition-shadow\`}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={\`p-3 rounded-xl \${insight.bg}\`}>
                <insight.icon className={\`h-6 w-6 \${insight.color}\`} />
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
`
};

for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filepath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
}

console.log("Scaffold 4 complete.");

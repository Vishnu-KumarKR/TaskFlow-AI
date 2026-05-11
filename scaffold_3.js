const fs = require('fs');
const path = require('path');

const files = {
  "app/dashboard/page.tsx": `"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, FolderKanban, TrendingUp, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", tasks: 4 },
  { name: "Tue", tasks: 7 },
  { name: "Wed", tasks: 5 },
  { name: "Thu", tasks: 12 },
  { name: "Fri", tasks: 8 },
  { name: "Sat", tasks: 2 },
  { name: "Sun", tasks: 1 },
]

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Demo User!</h1>
        <p className="text-muted-foreground">Here is what's happening with your projects today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FolderKanban className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">284</div>
              <p className="text-xs text-muted-foreground">+14% from last week</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">-5% from yesterday</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Productivity Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-violet-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <Progress value={92} className="h-2 mt-2 bg-violet-500/20 indicator-violet-500" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => \`\${value}\`} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Area type="monotone" dataKey="tasks" stroke="#6366f1" fillOpacity={1} fill="url(#colorTasks)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <p className="text-sm text-muted-foreground">Smart recommendations based on your activity</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg bg-indigo-500/10 p-4 border border-indigo-500/20">
                <Clock className="mt-0.5 h-5 w-5 text-indigo-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-indigo-500">3 tasks are overdue</p>
                  <p className="text-sm text-muted-foreground">Consider rescheduling or delegating these tasks to maintain momentum.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-amber-500/10 p-4 border border-amber-500/20">
                <TrendingUp className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-amber-500">Productivity dip detected</p>
                  <p className="text-sm text-muted-foreground">You perform best between 9AM-12PM. Try moving complex tasks to this window.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/20">
                <FolderKanban className="mt-0.5 h-5 w-5 text-emerald-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-emerald-500">Project Alpha on track</p>
                  <p className="text-sm text-muted-foreground">Estimated completion in 4 days. Team velocity is optimal.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
`,
  "app/dashboard/projects/page.tsx": `"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, MoreVertical, Calendar } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Revamping the corporate landing page with new branding.",
    progress: 75,
    status: "Active",
    priority: "High",
    deadline: "Oct 24, 2026",
    team: ["/avatars/01.png", "/avatars/02.png", "/avatars/03.png"]
  },
  {
    id: 2,
    name: "Mobile App V2",
    description: "Implementing dark mode and offline support.",
    progress: 30,
    status: "Planning",
    priority: "Medium",
    deadline: "Nov 12, 2026",
    team: ["/avatars/04.png", "/avatars/05.png"]
  },
  {
    id: 3,
    name: "Database Migration",
    description: "Moving from MongoDB to PostgreSQL.",
    progress: 90,
    status: "Review",
    priority: "Urgent",
    deadline: "Oct 15, 2026",
    team: ["/avatars/01.png", "/avatars/04.png", "/avatars/02.png"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your team's projects and track progress.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-all duration-300 group cursor-pointer bg-card/50 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant={project.priority === 'Urgent' ? 'destructive' : project.priority === 'High' ? 'default' : 'secondary'} className="mb-2">
                    {project.priority}
                  </Badge>
                  <CardTitle>{project.name}</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex justify-between items-center">
              <div className="flex -space-x-2">
                {project.team.map((avatar, i) => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {project.deadline}
              </div>
            </CardFooter>
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

console.log("Scaffold 3 complete.");

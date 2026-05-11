"use client"

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

import { NewProjectModal } from "@/components/NewProjectModal"
import { useState } from "react"

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState(projects)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your team's projects and track progress.</p>
        </div>
        <NewProjectModal onCreated={(p) => setProjectList([p, ...projectList])}>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </NewProjectModal>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
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

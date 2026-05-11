"use client"

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

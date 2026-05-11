"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Calendar as CalendarIcon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const upcomingEvents = [
    { id: 1, title: "Product Launch Meeting", time: "10:00 AM", type: "Meeting", priority: "High" },
    { id: 2, title: "Design Review: V2", time: "1:30 PM", type: "Review", priority: "Medium" },
    { id: 3, title: "Deadline: Alpha Release", time: "5:00 PM", type: "Deadline", priority: "Critical" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and upcoming deadlines.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">New Event</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <Card className="h-[600px] flex flex-col bg-card/50 backdrop-blur">
            <CardHeader className="border-b px-6 py-4">
              <CardTitle className="text-lg">Monthly View</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted/10">
                <Calendar 
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md scale-125"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-4 space-y-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="flex flex-col gap-2 p-3 rounded-lg border bg-background/50 hover:bg-accent transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-sm">{event.title}</span>
                      <Badge variant={event.priority === "Critical" ? "destructive" : event.priority === "High" ? "default" : "secondary"} className="text-[10px]">
                        {event.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center"><Clock className="mr-1 h-3 w-3" /> {event.time}</span>
                      <span className="flex items-center"><CalendarIcon className="mr-1 h-3 w-3" /> {event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Team Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 text-xs font-bold">JD</div>
                  <div className="flex flex-col text-sm">
                    <span className="font-medium">John Doe</span>
                    <span className="text-xs text-muted-foreground">OOO till Friday</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs font-bold">SJ</div>
                  <div className="flex flex-col text-sm">
                    <span className="font-medium">Sarah Jenkins</span>
                    <span className="text-xs text-muted-foreground">Available</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

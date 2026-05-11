const fs = require('fs');
const path = require('path');

const files = {
  "components/CommandMenu.tsx": `"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  LineChart,
  BrainCircuit
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <div 
        onClick={() => setOpen(true)}
        className="hidden md:flex relative w-96 items-center text-sm text-muted-foreground bg-muted/50 rounded-md px-3 py-2 cursor-text hover:bg-muted/80 transition-colors"
      >
        <span className="flex-1">Search tasks, projects, or use...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/calendar"))}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/ai-insights"))}>
              <BrainCircuit className="mr-2 h-4 w-4" />
              <span>AI Insights</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/projects"))}>
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/tasks"))}>
              <CheckSquare className="mr-2 h-4 w-4" />
              <span>Tasks</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/team"))}>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/analytics"))}>
              <LineChart className="mr-2 h-4 w-4" />
              <span>Analytics</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/settings"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/settings"))}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/settings"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
`,
  "components/NotificationsDropdown.tsx": `"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Notifications</p>
            <p className="text-xs leading-none text-muted-foreground">
              You have 3 unread messages.
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          <DropdownMenuItem className="flex flex-col items-start p-4">
            <span className="text-sm font-medium">New AI Insight</span>
            <span className="text-xs text-muted-foreground mt-1">Project Alpha may miss its deadline.</span>
            <span className="text-[10px] text-muted-foreground mt-2">2 min ago</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start p-4">
            <span className="text-sm font-medium">Task Assigned</span>
            <span className="text-xs text-muted-foreground mt-1">Sarah assigned you to "Design login flow".</span>
            <span className="text-[10px] text-muted-foreground mt-2">1 hr ago</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start p-4">
            <span className="text-sm font-medium">Project Completed</span>
            <span className="text-xs text-muted-foreground mt-1">The Website Redesign project was marked as completed.</span>
            <span className="text-[10px] text-muted-foreground mt-2">Yesterday</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
`,
  "components/UserDropdown.tsx": `"use client"

import { User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export function UserDropdown() {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Demo User</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@taskflowai.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/login")}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
`,
  "app/dashboard/calendar/page.tsx": `"use client"

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
`,
  "app/dashboard/team/page.tsx": `"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, MoreHorizontal, ShieldAlert, Star } from "lucide-react"

const teamMembers = [
  { id: 1, name: "Alice Freeman", role: "Admin", email: "alice@taskflowai.com", status: "Online", tasks: 12 },
  { id: 2, name: "Bob Smith", role: "Manager", email: "bob@taskflowai.com", status: "Offline", tasks: 8 },
  { id: 3, name: "Charlie Davis", role: "Developer", email: "charlie@taskflowai.com", status: "Online", tasks: 24 },
  { id: 4, name: "Diana Prince", role: "Developer", email: "diana@taskflowai.com", status: "Busy", tasks: 15 },
  { id: 5, name: "Evan Wright", role: "Viewer", email: "evan@taskflowai.com", status: "Offline", tasks: 0 },
]

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Collaboration</h1>
          <p className="text-muted-foreground">Manage your team members, roles, and view performance.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Invite Member</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <Card key={member.id} className="bg-card/50 backdrop-blur hover:shadow-lg transition-all group relative">
            <CardHeader className="pb-4 relative">
              <div className="absolute right-4 top-4">
                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="h-20 w-20 mb-4 border-4 border-background shadow-sm">
                    <AvatarFallback className="text-lg bg-indigo-500/10 text-indigo-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className={\`absolute bottom-4 right-0 block h-4 w-4 rounded-full border-2 border-background \${member.status === 'Online' ? 'bg-emerald-500' : member.status === 'Busy' ? 'bg-amber-500' : 'bg-muted-foreground'}\`} />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription>{member.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pb-6 text-center space-y-4">
              <div className="flex justify-center gap-2">
                <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>
                  {member.role === 'Admin' && <ShieldAlert className="w-3 h-3 mr-1" />}
                  {member.role === 'Manager' && <Star className="w-3 h-3 mr-1" />}
                  {member.role}
                </Badge>
              </div>
              <div className="flex justify-around items-center pt-4 border-t text-sm">
                <div className="flex flex-col">
                  <span className="font-bold">{member.tasks}</span>
                  <span className="text-muted-foreground text-xs">Active Tasks</span>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Mail className="h-4 w-4 mr-2" /> Message
                </Button>
              </div>
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

console.log("Scaffold 6 complete.");

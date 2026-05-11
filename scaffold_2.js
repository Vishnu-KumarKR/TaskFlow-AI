const fs = require('fs');
const path = require('path');

const files = {
  "components/theme-provider.tsx": `"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
`,
  "components/Sidebar.tsx": `"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CheckSquare, Users, LineChart, Settings, BrainCircuit, Calendar as CalendarIcon, FolderKanban } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStore } from "@/store/useStore"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: LineChart },
  { name: "AI Insights", href: "/dashboard/ai-insights", icon: BrainCircuit },
  { name: "Calendar", href: "/dashboard/calendar", icon: CalendarIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen } = useStore()

  if (!sidebarOpen) return null

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background/50 backdrop-blur-xl">
      <div className="flex h-16 items-center px-6 border-b">
        <BrainCircuit className="h-6 w-6 text-indigo-500" />
        <span className="ml-3 text-lg font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
          TaskFlow AI
        </span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                  isActive ? "text-indigo-600 dark:text-indigo-400" : "text-muted-foreground group-hover:text-foreground"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Demo User</span>
            <span className="text-xs text-muted-foreground">Pro Plan</span>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
  "components/Navbar.tsx": `"use client"

import { Menu, Search, Bell } from "lucide-react"
import { useStore } from "@/store/useStore"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Navbar() {
  const { toggleSidebar } = useStore()

  return (
    <header className="flex h-16 items-center justify-between border-b px-6 bg-background/50 backdrop-blur-xl sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative w-96 hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks, projects, or use ⌘K..."
            className="w-full bg-muted/50 pl-9 border-none focus-visible:ring-1 focus-visible:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500" />
        </Button>
      </div>
    </header>
  )
}
`,
  "app/dashboard/layout.tsx": `import { Sidebar } from "@/components/Sidebar"
import { Navbar } from "@/components/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-muted/20 dark:bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  )
}
`,
  "app/page.tsx": `import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCircuit, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="relative z-10 space-y-6 max-w-3xl">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-indigo-500/10 text-indigo-500 mb-6">
          <BrainCircuit className="mr-2 h-4 w-4" /> Introducing TaskFlow AI 2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          The future of <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">productivity</span> is here.
        </h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          AI-powered project management, team collaboration, and automated insights all in one premium workspace.
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <Link href="/dashboard">
            <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 h-12 px-8">
              Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 backdrop-blur-md">
              Sign In
            </Button>
          </Link>
        </div>
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

console.log("Scaffold 2 complete.");

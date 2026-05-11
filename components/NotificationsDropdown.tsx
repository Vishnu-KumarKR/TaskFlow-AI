"use client"

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
      <DropdownMenuTrigger className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9">
        <Bell className="h-5 w-5" />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
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

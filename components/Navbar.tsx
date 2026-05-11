"use client"

import { Menu } from "lucide-react"
import { useStore } from "@/store/useStore"
import { Button } from "./ui/button"
import { CommandMenu } from "./CommandMenu"
import { NotificationsDropdown } from "./NotificationsDropdown"
import { UserDropdown } from "./UserDropdown"

export function Navbar() {
  const { toggleSidebar } = useStore()

  return (
    <header className="flex h-16 items-center justify-between border-b px-6 bg-background/50 backdrop-blur-xl sticky top-0 z-10">
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <CommandMenu />
      </div>
      <div className="flex items-center gap-4">
        <NotificationsDropdown />
        <UserDropdown />
      </div>
    </header>
  )
}

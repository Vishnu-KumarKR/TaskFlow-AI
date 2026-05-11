"use client"

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

import { InviteMemberModal } from "@/components/InviteMemberModal"
import { useState } from "react"

export default function TeamPage() {
  const [teamList, setTeamList] = useState(teamMembers)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Collaboration</h1>
          <p className="text-muted-foreground">Manage your team members, roles, and view performance.</p>
        </div>
        <InviteMemberModal onInvite={() => {}}>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Invite Member</Button>
        </InviteMemberModal>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamList.map((member) => (
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
                  <span className={`absolute bottom-4 right-0 block h-4 w-4 rounded-full border-2 border-background ${member.status === 'Online' ? 'bg-emerald-500' : member.status === 'Busy' ? 'bg-amber-500' : 'bg-muted-foreground'}`} />
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

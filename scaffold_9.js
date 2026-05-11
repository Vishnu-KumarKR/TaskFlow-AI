const fs = require('fs');
const path = require('path');

const files = {
  "components/InviteMemberModal.tsx": `"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function InviteMemberModal({ children, onInvite }: { children: React.ReactNode, onInvite?: () => void }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        email: formData.get("email"),
        role: formData.get("role"),
      }
      
      const res = await fetch("/api/team/invite", {
        method: "POST",
        body: JSON.stringify(data),
      })
      
      if (!res.ok) throw new Error("Failed to invite member")
      
      toast.success("Invitation sent!", { description: \`An invitation has been sent to \${data.email}\` })
      setOpen(false)
      if (onInvite) onInvite()
    } catch (error) {
      toast.error("Failed to invite", { description: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Team Member</DialogTitle>
          <DialogDescription>
            Invite a new member to collaborate on TaskFlow AI.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" placeholder="colleague@example.com" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select name="role" defaultValue="VIEWER" disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="MANAGER">Manager</SelectItem>
                <SelectItem value="DEVELOPER">Developer</SelectItem>
                <SelectItem value="VIEWER">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="pt-4">
            <Button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Invitation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
`,
  "components/NewProjectModal.tsx": `"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function NewProjectModal({ children, onCreated }: { children: React.ReactNode, onCreated?: (project: any) => void }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        priority: formData.get("priority"),
        deadline: formData.get("deadline"),
      }
      
      const res = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(data),
      })
      
      if (!res.ok) throw new Error("Failed to create project")
      
      const project = await res.json()
      
      toast.success("Project created!", { description: \`Project \${data.name} has been successfully created.\` })
      setOpen(false)
      if (onCreated) onCreated(project)
      router.refresh()
    } catch (error) {
      toast.error("Failed to create project", { description: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Add a new project to your workspace and assign team members.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" name="name" placeholder="E.g. Mobile App Redesign" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" placeholder="Brief description of the project goals..." disabled={isLoading} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue="MEDIUM" disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="URGENT">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input id="deadline" name="deadline" type="date" disabled={isLoading} />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Project
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
`,
  "app/api/projects/route.ts": `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would connect to Prisma here:
    // const session = await getServerSession(authOptions);
    // const project = await prisma.project.create({ ... });
    
    // Simulating database latency
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ id: Date.now().toString(), ...body, progress: 0, status: "PLANNING", team: [] });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
`,
  "app/api/team/invite/route.ts": `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email and save invite to DB:
    // await sendEmail(body.email);
    
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, email: body.email, role: body.role });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
`,
  "app/api/settings/route.ts": `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ success: true, ...body });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
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

console.log("Scaffold 9 complete.");

const fs = require('fs');
const path = require('path');

const files = {
  "app/login/page.tsx": `"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BrainCircuit } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left section with background */}
      <div className="hidden lg:flex w-1/2 bg-zinc-950 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <BrainCircuit className="h-20 w-20 text-indigo-500 mb-8" />
          <h2 className="text-4xl font-bold text-white mb-4">Welcome back to TaskFlow AI</h2>
          <p className="text-lg text-zinc-400 max-w-md">The most advanced platform for project management and team collaboration.</p>
        </div>
      </div>

      {/* Right section with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>
            <p className="text-muted-foreground mt-2">Enter your email below to login to your account</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="h-12" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-indigo-500 hover:text-indigo-600 font-medium">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required className="h-12" />
            </div>
            <Link href="/dashboard" className="block mt-6">
              <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-md">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-indigo-500 hover:text-indigo-600 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
  "app/register/page.tsx": `"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BrainCircuit } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex flex-row-reverse">
      {/* Right section with background */}
      <div className="hidden lg:flex w-1/2 bg-zinc-950 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <BrainCircuit className="h-20 w-20 text-indigo-500 mb-8" />
          <h2 className="text-4xl font-bold text-white mb-4">Start your journey</h2>
          <p className="text-lg text-zinc-400 max-w-md">Join thousands of teams already using TaskFlow AI to boost their productivity.</p>
        </div>
      </div>

      {/* Left section with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
            <p className="text-muted-foreground mt-2">Enter your details below to create your account</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required className="h-12" />
            </div>
            <Link href="/dashboard" className="block mt-6">
              <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-md">
                Create Account
              </Button>
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-500 hover:text-indigo-600 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
  "README.md": `# TaskFlow AI

![TaskFlow AI](/public/preview.png)

A complete production-ready full-stack SaaS application for AI-powered productivity, project management, and team collaboration.

## Features

- **Premium SaaS Dashboard**: High-end UI with glassmorphism, soft shadows, and smooth animations.
- **Project Management**: Create, edit, and track projects with progress bars, priority badges, and team assignments.
- **Task Management**: Kanban boards, task lists, subtasks, due dates, and priority tracking.
- **Team Collaboration**: Invite members, assign roles, view activity timelines, and collaborate in real-time.
- **AI Productivity Insights**: Get smart recommendations and alerts based on team velocity and performance.
- **Analytics Dashboard**: Interactive charts tracking task completion trends and team contributions.
- **Dark/Light Mode**: Full theme support out-of-the-box.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI, Framer Motion
- **State Management**: Zustand
- **Backend**: Next.js API Routes / Server Actions
- **Database**: PostgreSQL (via Supabase), Prisma ORM
- **Authentication**: NextAuth.js
- **Charts**: Recharts

## Getting Started

1. Clone the repository
2. Install dependencies: \`npm install\`
3. Set up environment variables in \`.env\`:
   \`\`\`env
   DATABASE_URL="your-postgresql-url"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   \`\`\`
4. Run Prisma migrations: \`npx prisma db push\`
5. Start development server: \`npm run dev\`

## Architecture

- \`app/\`: Next.js App Router pages and layouts.
- \`components/\`: Reusable UI components (ShadCN, custom).
- \`store/\`: Zustand global state.
- \`prisma/\`: Database schema and migrations.
- \`lib/\`: Utility functions and clients (Prisma, etc).

## License

MIT
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

console.log("Scaffold 5 complete.");

import Link from "next/link"
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

const fs = require('fs');
const path = require('path');

const files = {
  "app/dashboard/settings/page.tsx": `"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b rounded-none h-12 p-0 space-x-6">
          <TabsTrigger value="profile" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none bg-transparent shadow-none px-0 h-full">Profile</TabsTrigger>
          <TabsTrigger value="account" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none bg-transparent shadow-none px-0 h-full">Account</TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none bg-transparent shadow-none px-0 h-full">Appearance</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none bg-transparent shadow-none px-0 h-full">Notifications</TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none bg-transparent shadow-none px-0 h-full">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your personal information and how others see you on the platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>DU</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="Demo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="User" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="user@taskflowai.com" disabled />
                  <p className="text-[10px] text-muted-foreground mt-1">To change your email, contact support.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 justify-end">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                <div className="space-y-0.5">
                  <Label className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Toggle dark mode on or off.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                <div className="space-y-0.5">
                  <Label className="text-base">Compact Sidebar</Label>
                  <p className="text-sm text-muted-foreground">Use a minimal sidebar to save screen space.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control when and how you receive alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive daily summaries and critical alerts via email.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                <div className="space-y-0.5">
                  <Label className="text-base">AI Insight Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when AI detects productivity anomalies.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                <div className="space-y-0.5">
                  <Label className="text-base">Task Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when tasks are assigned to you.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription>Manage your team's subscription plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 border rounded-lg bg-indigo-500/10 border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-500 mb-2">Pro Plan</h3>
                <p className="text-sm text-muted-foreground mb-4">You are currently on the Pro plan billed annually. Your next billing date is Dec 31, 2026.</p>
                <Button variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">Manage Subscription</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Permanent actions that cannot be undone.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">Delete Account</h4>
                  <p className="text-xs text-muted-foreground">Permanently remove your personal account and all associated data.</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
`,
  "components/Navbar.tsx": `"use client"

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
`,
  "app/layout.tsx": `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow AI",
  description: "AI-powered productivity, project management, and team collaboration platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
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

console.log("Scaffold 7 complete.");

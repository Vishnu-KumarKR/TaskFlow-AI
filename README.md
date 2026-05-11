
<img src="/public/preview.jpg" width="50" />    # TaskFlow AI


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
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`:
   ```env
   DATABASE_URL="your-postgresql-url"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```
4. Run Prisma migrations: `npx prisma db push`
5. Start development server: `npm run dev`

## Architecture

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (ShadCN, custom).
- `store/`: Zustand global state.
- `prisma/`: Database schema and migrations.
- `lib/`: Utility functions and clients (Prisma, etc).

## License

MIT

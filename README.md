# RepoXray

> **X-Ray repositories. Understand the codebase, not just the files.**

RepoXray is an AI-assisted developer tool for exploring GitHub repositories, understanding code snippets, and generating structured developer insights.

## Features

- **Repository Analysis** — Paste a GitHub repository and receive a structured overview, important-file explanations, technology summary, and guided reading path.
- **Snippet Explain** — Paste code and get a plain-English explanation.
- **Developer Mode** — Analyze a GitHub profile or repository, generate improvement suggestions, README ideas, and discoverability recommendations.
- **Interactive UI** — React, TypeScript, Tailwind CSS, Radix UI, and theme support.

## Architecture

```text
Browser (React + Vite)
        |
        v
Supabase Edge Functions
        |
        +--> GitHub API
        |
        +--> AI Gateway
```

## Project Structure

```text
RepoXray/
├── src/
│   ├── components/       # UI and reusable components
│   ├── integrations/     # Supabase client
│   ├── pages/            # Application routes
│   ├── store/            # Client-side analysis state
│   └── types/            # TypeScript types
├── supabase/functions/   # Edge-function back end
├── .env.example
├── package.json
└── vite.config.ts
```

## Getting Started

Clone your copy of the repository:

```bash
git clone https://github.com/Sujith-2193/RepoXray.git
cd RepoXray
npm install
```

Copy the environment template:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Then add your Supabase project values to `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-or-publishable-key
```

Start the development server:

```bash
npm run dev
```

The UI can load without Supabase credentials, but repository analysis, snippet explanation, and developer-mode AI requests require a configured Supabase project and deployed Edge Functions.

## Quality Checks

```bash
npm run build
npm run lint
npm test
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS 3
- Radix UI
- Zustand
- TanStack Query
- Supabase Edge Functions
- GitHub API

## Use Cases

- Students learning unfamiliar repositories
- Developers onboarding to a new codebase
- Portfolio and repository review
- Understanding isolated code snippets

## RepoXray

> **X-Ray. Refine. Repeat.**

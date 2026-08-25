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
        +--> Lovable AI Gateway
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

## Backend Setup

RepoXray's AI features are implemented as Supabase Edge Functions. The frontend alone can render the interface, but the following functions must be deployed to the same Supabase project used in `.env`:

- `analyze-repo`
- `chat-repo`
- `explain-snippet`
- `developer-mode`

From the repository root, authenticate and link the project:

```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
```

Set the server-side secrets. These must **not** be added to the Vite `.env` file:

```bash
npx supabase secrets set LOVABLE_API_KEY=YOUR_LOVABLE_API_KEY
npx supabase secrets set GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

`GITHUB_TOKEN` is optional but recommended because repository analysis can make multiple GitHub API requests and unauthenticated requests are rate-limited.

Deploy the functions:

```bash
npx supabase functions deploy analyze-repo --no-verify-jwt
npx supabase functions deploy chat-repo --no-verify-jwt
npx supabase functions deploy explain-snippet --no-verify-jwt
npx supabase functions deploy developer-mode --no-verify-jwt
```

After deployment, restart Vite:

```bash
npm run dev
```

### Important: why the UI can load while Explain fails

The React application and the AI backend are separate systems. A successful `npm run dev` only proves that the frontend builds. Clicking **Explain** sends a request to the `analyze-repo` Edge Function, which in turn calls GitHub and the Lovable AI Gateway. If the Supabase project, Edge Function deployment, or `LOVABLE_API_KEY` is missing, the frontend cannot complete the analysis.

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
- Lovable AI Gateway

## Use Cases

- Students learning unfamiliar repositories
- Developers onboarding to a new codebase
- Portfolio and repository review
- Understanding isolated code snippets

## RepoXray

> **X-Ray. Refine. Repeat.**

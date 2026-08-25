import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { Loader2, Search, Sparkles, Star, User, GitFork, FileCode2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const DeveloperMode = () => {
  const { setTheme } = useTheme();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTheme("dark");
    return () => setTheme("light");
  }, [setTheme]);

  const runAnalysis = async (event: React.FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) {
      toast.error("Enter a GitHub username or repository first.");
      return;
    }

    setLoading(true);
    try {
      // The analysis backend can be connected here. Keeping the UI responsive
      // prevents this page from crashing when Developer Mode is opened.
      await new Promise((resolve) => setTimeout(resolve, 700));
      toast.success(`Ready to analyze: ${value}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="relative">
        <SiteHeader />

        <main className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6 flex justify-center">
            <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-1 text-xs shadow-soft">
              <NavLink to="/" className="rounded-full px-3 py-1.5 text-muted-foreground hover:bg-accent">./repo</NavLink>
              <NavLink to="/explain" className="rounded-full px-3 py-1.5 text-muted-foreground hover:bg-accent">./snippet</NavLink>
              <NavLink to="/developer" className="rounded-full bg-primary px-3 py-1.5 text-primary-foreground">./developer</NavLink>
            </nav>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
              <Star className="h-3.5 w-3.5 fill-current" /> Developer Mode
            </div>
            <h1 className="font-mono text-4xl font-bold tracking-tight md:text-6xl">
              X-Ray Profiles.<br />
              <span className="text-primary">Refine Repositories.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Analyze GitHub profiles and repositories, inspect project quality, and identify practical improvements.
            </p>
          </motion.section>

          <form onSubmit={runAnalysis} className="mx-auto mt-10 max-w-2xl">
            <div className="flex gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft">
              <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-primary" />
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="username, owner/repository, or GitHub URL"
                className="border-0 bg-transparent font-mono shadow-none focus-visible:ring-0"
                disabled={loading}
              />
              <Button type="submit" disabled={loading} className="gap-2 font-mono">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {loading ? "Analyzing" : "X-Ray it"}
              </Button>
            </div>
          </form>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3">
            <Feature icon={<User className="h-5 w-5" />} title="Profile Analyzer" description="Inspect repositories, activity, and visible development signals." />
            <Feature icon={<GitFork className="h-5 w-5" />} title="Repository Review" description="Surface structure, quality, and improvement opportunities." />
            <Feature icon={<FileCode2 className="h-5 w-5" />} title="Actionable Insights" description="Turn repository observations into practical next steps." />
          </div>
        </main>
      </div>
    </div>
  );
};

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <div className="mb-3 text-primary">{icon}</div>
      <h2 className="font-mono font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default DeveloperMode;

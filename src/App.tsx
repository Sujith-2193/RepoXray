import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";
import SplashCursor from "@/components/SplashCursor";
import ClickSpark from "@/components/ClickSpark";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import SnippetExplain from "./pages/SnippetExplain";
import DeveloperMode from "./pages/DeveloperMode";
import NotFound from "./pages/NotFound";
import { useTheme } from "next-themes";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const ThemeAwareSplashCursor = () => {
  const { resolvedTheme } = useTheme();
  const splashColor = resolvedTheme === "dark" ? "#7aff85" : "#009900";
  return <SplashCursor DENSITY_DISSIPATION={3} VELOCITY_DISSIPATION={3.5} PRESSURE={0.25} CURL={3} SPLAT_RADIUS={0.2} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={14} SHADING RAINBOW_MODE={false} COLOR={splashColor} />;
};

const App = () => (
  <AppErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <ThemeAwareSplashCursor />
              <ClickSpark sparkSize={15} sparkRadius={30} sparkCount={12} duration={600} extraScale={2}>
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/explain" element={<SnippetExplain />} />
                    <Route path="/developer" element={<DeveloperMode />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </ClickSpark>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </AppErrorBoundary>
);

export default App;

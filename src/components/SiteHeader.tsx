import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "@/assets/repoxray-logo.png";
import developerIcon from "@/assets/developer.png";

export function SiteHeader() {
  const location = useLocation();
  const isDeveloperMode = location.pathname === "/developer";

  return (
    <header className="relative z-30 border-b border-[#1da828] bg-[#9deda3] backdrop-blur-md">
      <div className="absolute right-4 top-9">
        {isDeveloperMode ? (
          <a
            href="https://github.com/Sujith-2193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label="Arun Sujith on GitHub"
          >
            <img
              src={developerIcon}
              alt="Arun Sujith"
              className="h-16 w-16"
            />
          </a>
        ) : (
          <ThemeToggle />
        )}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-4 pt-0 text-center">
        <Link to="/" aria-label="RepoXray home" className="group flex items-center gap-3">
          <img src={logo} alt="RepoXray logo" className="h-24 w-auto object-contain" />
          <span className="font-mono text-2xl font-bold tracking-tight text-black md:text-3xl">
            Repo<span className="text-[#1da828]">Xray</span>
          </span>
        </Link>

        <p className="mt-2 max-w-md text-sm font-medium text-black">
          X-Ray Repositories, Don&apos;t Just Read Them.
        </p>
      </div>
    </header>
  );
}

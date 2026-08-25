export function Footer() {
  return (
    <footer className="border-t border-[#1da828] bg-[#9deda3] backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 text-sm text-black">
            <span>Built and developed by</span>
            <a
              href="https://github.com/Sujith-2193"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black transition-colors hover:text-[#1da828]"
            >
              Arun Sujith
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://github.com/Sujith-2193"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#2E8B57] bg-[#2E8B57] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#9deda3] hover:text-[#2E8B57] hover:shadow-md"
            >
              <span className="text-base" aria-hidden="true">⌘</span>
              github.com/Sujith-2193
            </a>

            <a
              href="https://github.com/Sujith-2193/RepoXray"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#2E8B57] bg-[#2E8B57] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#9deda3] hover:text-[#2E8B57] hover:shadow-md"
            >
              <span className="text-base" aria-hidden="true">⌘</span>
              RepoXray
            </a>
          </div>

          <p className="text-xs text-black">© 2026 RepoXray.</p>
        </div>
      </div>
    </footer>
  );
}

import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-light/5 bg-surface-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <div className="text-center md:text-left">
          <div className="text-lg md:text-2xl font-bold tracking-tighter flex items-center gap-2 text-light justify-center md:justify-start">
            <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-background font-black text-xs">
              D
            </span>
            Dhaval Panchal
          </div>
        </div>

        <div className="flex gap-5 md:gap-8 text-xs md:text-sm font-medium text-light/40">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.stackoverflow}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Stack Overflow
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Résumé
          </a>
        </div>
      </div>
    </footer>
  );
}

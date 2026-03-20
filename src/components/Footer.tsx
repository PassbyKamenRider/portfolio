import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}.
        </p>
      </div>
    </footer>
  );
}

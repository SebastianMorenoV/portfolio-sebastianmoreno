import { Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    console.log("Language toggle triggered!");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-medium font tracking-tight text-slate-900 dark:text-white">
          Sebastian Moreno<span className="text-blue-500">.</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Toggle language"
            title="Switch Language">
            <Languages size={20} strokeWidth={2.5} />
            <span className="hidden sm:block text-sm font-bold">EN / ES</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Toggle dark mode"
            title="Switch Theme">
            {theme === "dark" ? (
              <Sun size={20} strokeWidth={2.5} className="text-amber-400" />
            ) : (
              <Moon size={20} strokeWidth={2.5} className="text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

import { Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next"; // 1. Import the hook

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation(); // 2. Initialize translation

  // 3. Logic to switch the global language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.posts"), href: "#" },
    { label: t("nav.projects"), href: "#" },
    { label: t("nav.about"), href: "#" },
  ];

  const isDark = theme === "dark";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${isDark ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Title */}
        <div className={`font-medium tracking-tight ${isDark ? "text-white" : "text-black"}`}>🌴 Sebastian Moreno</div>

        {/* Right Container */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm transition-colors ${isDark ? "text-white hover:text-blue-400" : "text-black hover:text-blue-500"}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className={`hidden md:block w-px h-6 ${isDark ? "bg-slate-700" : "bg-slate-300"}`}></div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 p-1 transition-transform active:scale-95 cursor-pointer
                ${isDark ? "text-white" : "text-black"}`}
              aria-label="Toggle language"
              title="Switch Language">
              <Languages size={20} strokeWidth={2.5} className="hover:animate-spin" />
              {/* Display the opposite language to show what clicking will do */}
              <span className="hidden sm:block text-sm font-bold uppercase">
                {i18n.language === "en" ? "ES" : "EN"}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className={`group flex items-center gap-2 p-1 transition-transform active:scale-95 cursor-pointer 
                ${isDark ? "text-white" : "text-slate-800"}`}
              aria-label="Toggle dark mode"
              title="Switch Theme">
              {isDark ? (
                <>
                  <Sun
                    size={20}
                    strokeWidth={2.5}
                    className="text-amber-400 transition-transform duration-300 group-hover:translate-y-1"
                  />
                  <span className="hidden sm:block text-sm font-bold">{t("nav.dayMode")}</span>
                </>
              ) : (
                <>
                  <Moon
                    size={20}
                    strokeWidth={2.5}
                    className="text-indigo-600 transition-transform duration-300 group-hover:translate-y-1"
                  />
                  <span className="hidden sm:block text-sm font-bold">{t("nav.nightMode")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

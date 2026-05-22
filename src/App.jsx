import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import MainLayout from "./components/layout/MainLayout";
import ParticleNetwork from "./components/common/ParticleNetwork";
import profilePic from "./assets/profilePicture.jpg";
import GraphicSkills from "./components/common/GraphicSkills";
import Projects from "./components/common/Projects";
import Experience from "./components/common/Experience";
import Posts from "./components/common/Posts";
import About from "./components/common/About";
import Services from "./components/common/Services";
import { useProfile, useLocalized } from "./hooks/useSanity";

// We extract the Home page content into a separate component
function Home() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const textRef = useRef(null);

  const { t, i18n } = useTranslation();
  const { profile } = useProfile();
  const localize = useLocalized();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getRelativePos = () => {
    if (!textRef.current) return { x: 0, y: 0 };
    const rect = textRef.current.getBoundingClientRect();
    return {
      x: mousePos.x - rect.left,
      y: mousePos.y - rect.top,
    };
  };

  const relPos = getRelativePos();

  return (
    <>
      {/* 1. El Cursor Personalizado */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-200 ease-out flex items-center justify-center hidden lg:flex"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
          width: isHoveringText ? "180px" : "12px",
          height: isHoveringText ? "180px" : "12px",
          backgroundColor: isHoveringText ? "rgba(100, 116, 139, 0.1)" : "var(--color-content)",
          border: isHoveringText ? "1px solid rgba(148, 163, 184, 0.3)" : "none",
          opacity: isHoveringSection ? 1 : 0,
        }}
      />

      {/* --- INICIO DE LA ZONA MAGICA --- */}
      <section
        className="relative top-0 w-full overflow-hidden cursor-none rounded-b-3xl py-20 px-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 shadow-sm"
        onMouseEnter={() => setIsHoveringSection(true)}
        onMouseLeave={() => setIsHoveringSection(false)}>
        <ParticleNetwork />

        {/* Imagen de Perfil */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 z-10">
          <img
            src={profilePic}
            alt="Foto de Sebastian Moreno"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-surface"
          />
          {/* Badge de disponibilidad */}
          <div className="absolute -bottom-4 -right-4 bg-background px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-20 transition-transform hover:scale-105 cursor-default border border-content/10">
            <span className={`w-2 h-2 rounded-full ${profile?.statusColor || 'bg-green-500'} animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]`}></span>
            {profile?.workStatus || t("hero.badge")}
          </div>
        </div>

        {/* Contenedor Principal de Información */}
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl">
          {/* El Texto que reacciona a la lupa */}
          <div
            ref={textRef}
            className="relative py-4"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}>
            {/* Capa Inferior: Texto Apagado */}
            <div className="text-content transition-opacity duration-300">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-primary font-semibold tracking-wide uppercase text-sm">
                <MapPinIcon />
                <span>{t("hero.location")}</span> {/* <-- TEXTO TRADUCIDO */}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">Sebastian Moreno</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-content to-content-muted">{t("hero.role")}</h2>
              <p className="text-lg mb-6 leading-relaxed">
                {localize(profile?.bioStart) || t("hero.bioStart")} {localize(profile?.bioHighlight) || "Spring Boot"} {localize(profile?.bioEnd) || t("hero.bioEnd")}
              </p>
            </div>

            {/* Capa Superior: Texto Iluminado */}
            <div
              className="absolute top-0 left-0 w-full h-full py-4 pointer-events-none"
              style={{
                WebkitMaskImage: isHoveringText
                  ? `radial-gradient(circle 90px at ${relPos.x}px ${relPos.y}px, black 70%, transparent 100%)`
                  : "none",
                opacity: isHoveringText ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-primary font-semibold tracking-wide uppercase text-sm">
                <MapPinIcon />
                <span>{t("hero.location")}</span> {/* <-- TEXTO TRADUCIDO */}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-primary">Sebastian Moreno</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-content bg-clip-text text-transparent bg-gradient-to-r from-content to-content-muted">{t("hero.role")}</h2>
              <p className="text-lg mb-6 leading-relaxed text-blue-500 drop-shadow-md transition-colors duration-300">
                {localize(profile?.bioStart) || t("hero.bioStart")} {localize(profile?.bioHighlight) || "Spring Boot"} {localize(profile?.bioEnd) || t("hero.bioEnd")}
              </p>
            </div>
          </div>

          {/* Elementos Interactivos */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 relative z-20 cursor-auto">
            <div className="flex items-center gap-4 text-content-muted">
              <a
                href="https://github.com/SebastianMorenoV"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 hover:bg-surface rounded-full">
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-sebasti%C3%A1n-moreno-vargas-67a780259/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 hover:bg-surface rounded-full">
                <LinkedinIcon />
              </a>
              <a
                href={profile?.whatsapp 
                  ? `https://wa.me/${profile.whatsapp}` 
                  : `https://wa.me/526441901249?text=${encodeURIComponent(
                      i18n.language.startsWith('es') ? 'Hola Sebastian, ¿Cómo estás?' : 'Hi Sebastian, How are you doing?'
                    )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-surface text-content hover:bg-green-500/10 hover:text-green-500 transition-colors px-6 py-2.5 rounded-full font-bold border border-content/20 hover:border-green-500/50">
                <MessageCircle size={20} />
                <span>{t('hero.contactBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN DE LA ZONA MAGICA --- */}
      <Services />
      <Projects />
      <Experience />
      <GraphicSkills />
    </>
  );
}

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    // Solo enviamos la notificación una vez por sesión para no saturar tu correo
    if (!sessionStorage.getItem("portfolio_visited")) {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "865afbef-c6fb-4f95-adb4-dc0ebe7115a9", 
          subject: "👀 ¡Alguien está viendo tu portafolio!",
          from_name: "Notificación Portafolio",
          message: "Un nuevo usuario ha entrado a ver tu portafolio en este momento.",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            sessionStorage.setItem("portfolio_visited", "true");
          }
        })
        .catch((error) => console.error("Error al enviar notificación:", error));
    }
  }, []);

  return (
    <Router basename="/portfolio-sebastianmoreno">
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

// --- ICONOS NATIVOS SVG (Mismo código que ya tenías) ---
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export default App;

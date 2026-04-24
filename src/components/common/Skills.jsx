import { Server, Database, Layout, Shield, Cpu, Cloud, Code2, Zap, Eye, Box } from "lucide-react";

export default function GraphicSkills() {
  // Lista de tecnologías con sus colores oficiales para el efecto "Glow"
  const techStack = [
    {
      name: "Java",
      role: "Core Backend",
      icon: <CoffeeIcon />,
      glow: "hover:shadow-[0_0_30px_-5px_#ED8B00] hover:border-[#ED8B00]",
      textColor: "group-hover:text-[#ED8B00]",
    },
    {
      name: "Spring Boot",
      role: "Framework",
      icon: <LeafIcon />,
      glow: "hover:shadow-[0_0_30px_-5px_#6DB33F] hover:border-[#6DB33F]",
      textColor: "group-hover:text-[#6DB33F]",
    },
    {
      name: "React",
      role: "Frontend UI",
      icon: <AtomIcon />,
      glow: "hover:shadow-[0_0_30px_-5px_#61DAFB] hover:border-[#61DAFB]",
      textColor: "group-hover:text-[#61DAFB]",
    },
    {
      name: "Python",
      role: "Backend & Scripts",
      icon: <PythonIcon />,
      glow: "hover:shadow-[0_0_30px_-5px_#3776AB] hover:border-[#3776AB]",
      textColor: "group-hover:text-[#3776AB]",
    },
    {
      name: "AWS Cloud",
      role: "EC2 & S3",
      icon: <Cloud size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#FF9900] hover:border-[#FF9900]",
      textColor: "group-hover:text-[#FF9900]",
    },
    {
      name: "Amazon RDS",
      role: "Managed Database",
      icon: <Database size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#527FFF] hover:border-[#527FFF]",
      textColor: "group-hover:text-[#527FFF]",
    },
    {
      name: "MySQL",
      role: "Relational DB",
      icon: <Database size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#4479A1] hover:border-[#4479A1]",
      textColor: "group-hover:text-[#4479A1]",
    },
    {
      name: "MongoDB",
      role: "NoSQL DB",
      icon: <Database size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#47A248] hover:border-[#47A248]",
      textColor: "group-hover:text-[#47A248]",
    },
    {
      name: "RabbitMQ",
      role: "Message Broker",
      icon: <Box size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#FF6600] hover:border-[#FF6600]",
      textColor: "group-hover:text-[#FF6600]",
    },
    {
      name: "JWT",
      role: "Authentication",
      icon: <Shield size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#FF0054] hover:border-[#FF0054]",
      textColor: "group-hover:text-[#FF0054]",
    },
    {
      name: "OpenCV",
      role: "Computer Vision",
      icon: <Eye size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#5C3EE8] hover:border-[#5C3EE8]",
      textColor: "group-hover:text-[#5C3EE8]",
    },
    {
      name: "Vite",
      role: "Build Tool",
      icon: <Zap size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#646CFF] hover:border-[#646CFF]",
      textColor: "group-hover:text-[#646CFF]",
    },
    {
      name: "Kotlin",
      role: "Mobile / Backend",
      icon: <Code2 size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#7F52FF] hover:border-[#7F52FF]",
      textColor: "group-hover:text-[#7F52FF]",
    },
    {
      name: "JavaScript",
      role: "Core Web",
      icon: <Layout size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#F7DF1E] hover:border-[#F7DF1E]",
      textColor: "group-hover:text-[#F7DF1E]",
    },
    {
      name: "Java FX / Swing",
      role: "Desktop GUI",
      icon: <Layout size={32} strokeWidth={1.5} />,
      glow: "hover:shadow-[0_0_30px_-5px_#5382A1] hover:border-[#5382A1]",
      textColor: "group-hover:text-[#5382A1]",
    },
  ];

  return (
    <section className="mt-32 max-w-7xl mx-auto px-6 relative z-10">
      {/* Título de la Sección */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Arsenal Tecnológico</h2>
        <p className="text-content-muted max-w-2xl text-lg">
          No solo escribo código, construyo ecosistemas. Desde la persistencia de datos en AWS hasta interfaces
          dinámicas con React.
        </p>
      </div>

      {/* Cuadrícula Gráfica (Auto-Fit para que se adapte al tamaño de la pantalla) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`group relative bg-surface/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer ${tech.glow}`}>
            {/* Contenedor del Icono */}
            <div className={`mb-4 text-content-muted transition-colors duration-300 ${tech.textColor}`}>
              {tech.icon}
            </div>

            {/* Textos */}
            <h3 className="font-bold text-sm md:text-base tracking-tight mb-1 transition-colors duration-300">
              {tech.name}
            </h3>
            <p className="text-[10px] md:text-xs text-content-muted uppercase tracking-widest font-bold opacity-70">
              {tech.role}
            </p>

            {/* Brillo de fondo sutil al hacer hover */}
            <div className="absolute inset-0 bg-white dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- ICONOS CUSTOM PARA LAS TECNOLOGÍAS MÁS EMBLEMÁTICAS ---
// Si no quieres instalar devicons, estos SVGs nativos se ven brutales.

function CoffeeIcon() {
  // Para Java
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
      <line x1="9" x2="9" y1="2" y2="4"></line>
      <line x1="13" x2="13" y1="2" y2="4"></line>
    </svg>
  );
}

function LeafIcon() {
  // Para Spring Boot
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
  );
}

function AtomIcon() {
  // Para React
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"></circle>
      <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(45 12 12)"></ellipse>
      <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-45 12 12)"></ellipse>
    </svg>
  );
}

function PythonIcon() {
  // Para Python
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2H8a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5h-4z"></path>
      <path d="M12 22h4a5 5 0 0 0 5-5v-3a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h4z"></path>
      <circle cx="9" cy="6" r="1"></circle>
      <circle cx="15" cy="18" r="1"></circle>
    </svg>
  );
}

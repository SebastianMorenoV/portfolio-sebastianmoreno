// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        posts: "Posts",
        projects: "Projects",
        about: "About",
        dayMode: "Day Mode",
        nightMode: "Night Mode",
      },
      hero: {
        badge: "Looking for Internships",
        location: "Sonora, Mexico",
        role: "Full-Stack Software Engineer",
        bioStart:
          "Specialized in designing and building scalable web platforms, microservice architectures, and intelligent systems. Transforming complex requirements into clean and efficient code using React, ",
        bioEnd: " and Python.",
        contactBtn: "Contact me"
      },
      skills: {
        title: "Skills & Technologies",
      },
      projects: {
        title: "Featured Projects",
        modal: {
          code: "Code",
          demo: "Live Demo",
          gallery: "Project Gallery",
          technologies: "Technologies Used"
        }
      },
      posts: {
        title: "Thoughts & Articles",
        empty: {
          title: "Nothing's here yet",
          desc: "I'm currently cooking up some new content or working on exciting projects. Check back later!"
        },
        readMore: "Read Article"
      },
      experience: {
        title: "Work Experience"
      },
      services: {
        title: "What I Do",
        subtitle: "My core technical specialties and how I bring value to your engineering team.",
        items: {
          frontend: {
            title: "Frontend Development",
            description: "I build responsive, accessible, and highly interactive user interfaces using modern frameworks like React, Vue, and Tailwind CSS. My focus is on creating smooth, pixel-perfect experiences."
          },
          backend: {
            title: "Backend Architecture",
            description: "I design robust and scalable server-side applications. From RESTful APIs in Spring Boot to microservices architectures, I ensure systems are secure, efficient, and easy to maintain."
          },
          fullstack: {
            title: "Full Stack Integration",
            description: "I bridge the gap between frontend and backend, managing everything from database design to CI/CD pipelines and deployment. I deliver complete, end-to-end software solutions."
          }
        }
      },
      about: {
        title: "About Me",
        box1: {
          title: "Building software that makes a difference.",
          desc: "I'm a passionate software engineer focused on crafting clean, scalable, and intuitive digital experiences. I believe in writing code that is not just functional, but maintainable and elegant."
        },
        location: {
          title: "Location",
          remote: "Available for remote work worldwide."
        },
        connect: {
          title: "Let's Connect",
          desc: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
        }
      },
      footer: {
        tagline: "Let's build something great together.",
        availability: "Available for freelance opportunities and full-time roles.",
        emailBtn: "Send me an email",
        navTitle: "Navigation",
        socialsTitle: "Socials",
        rights: "All rights reserved."
      }
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        posts: "Artículos",
        projects: "Proyectos",
        about: "Sobre mí",
        dayMode: "Modo Día",
        nightMode: "Modo Noche",
      },
      hero: {
        badge: "En Busca de Prácticas",
        location: "Sonora, México",
        role: "Ingeniero de Software Full-Stack",
        bioStart:
          "Especializado en diseñar y construir plataformas web escalables, arquitecturas de microservicios y sistemas inteligentes. Transformando requerimientos complejos en código limpio y eficiente con React, ",
        bioEnd: " y Python.",
        contactBtn: "Contáctame"
      },
      skills: {
        title: "Skills & Tecnologías",
      },
      projects: {
        title: "Proyectos Destacados",
        modal: {
          code: "Código",
          demo: "Ver en vivo",
          gallery: "Galería del Proyecto",
          technologies: "Tecnologías Utilizadas"
        }
      },
      posts: {
        title: "Pensamientos y Artículos",
        empty: {
          title: "Aún no hay nada por aquí",
          desc: "Actualmente estoy cocinando nuevo contenido o trabajando en proyectos emocionantes. ¡Vuelve más tarde!"
        },
        readMore: "Leer Artículo"
      },
      experience: {
        title: "Experiencia Laboral"
      },
      services: {
        title: "Lo que hago",
        subtitle: "Mis especialidades técnicas y cómo aporto valor a tu equipo de ingeniería.",
        items: {
          frontend: {
            title: "Desarrollo Frontend",
            description: "Construyo interfaces de usuario responsivas, accesibles y altamente interactivas usando frameworks modernos como React, Vue y Tailwind CSS. Me enfoco en crear experiencias fluidas y con un diseño perfecto."
          },
          backend: {
            title: "Arquitectura Backend",
            description: "Diseño aplicaciones robustas y escalables del lado del servidor. Desde APIs RESTful en Spring Boot hasta arquitecturas de microservicios, asegurando que los sistemas sean seguros, eficientes y fáciles de mantener."
          },
          fullstack: {
            title: "Integración Full Stack",
            description: "Cierro la brecha entre el frontend y el backend, gestionando todo, desde el diseño de bases de datos hasta las integraciones CI/CD y el despliegue. Entrego soluciones de software completas."
          }
        }
      },
      about: {
        title: "Sobre Mí",
        box1: {
          title: "Construyendo software que marca la diferencia.",
          desc: "Soy un ingeniero de software apasionado enfocado en crear experiencias digitales limpias, escalables e intuitivas. Creo en escribir código que no solo sea funcional, sino mantenible y elegante."
        },
        location: {
          title: "Ubicación",
          remote: "Disponible para trabajo remoto en todo el mundo."
        },
        connect: {
          title: "Conectemos",
          desc: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para formar parte de tus visiones."
        }
      },
      footer: {
        tagline: "Construyamos algo genial juntos.",
        availability: "Disponible para oportunidades freelance y roles a tiempo completo.",
        emailBtn: "Envíame un correo",
        navTitle: "Navegación",
        socialsTitle: "Redes",
        rights: "Todos los derechos reservados."
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

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
      },
      skills: {
        title: "Skills & Technologies",
      },
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
      },
      skills: {
        title: "Skills & Tecnologías",
      },
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

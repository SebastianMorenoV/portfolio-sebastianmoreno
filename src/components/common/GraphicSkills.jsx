import { useTranslation } from "react-i18next";

export default function GraphicSkills() {
  const { t } = useTranslation();

  const lanes = [
    {
      id: "languages",
      title: "Lenguajes",
      direction: "normal",
      speed: "15s",
      skills: [
        { name: "C+", src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libs",
      direction: "reverse",
      speed: "15s",
      skills: [
        {
          name: "Spring Boot",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "OpenCV", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        {
          name: "JavaFX",
          src: "https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png",
        },
        { name: "JWT", src: "https://jwt.io/img/pic_logo.svg" },
      ],
    },
    {
      id: "databases",
      title: "Bases de Datos",
      direction: "normal",
      speed: "15s",
      skills: [
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "AWS RDS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
    },
    {
      id: "devops",
      title: "Tools & DevOps",
      direction: "reverse",
      speed: "15s",
      skills: [
        {
          name: "AWS S3",
          src: "https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg",
        },
        {
          name: "EC2",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "RabbitMQ",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        },
        { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Postman", src: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      ],
    },
  ];

  return (
    <section className="mt-12 max-w-6xl mx-auto px-6">
      {/* 1. SECCIÓN RESTRINGIDA A max-w-6xl PARA ALINEARSE CON APP.JSX */}

      {/* Título Principal */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{t("skills.title")}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-content-muted max-w-2xl mx-auto text-lg italic">Software ecosystem & tech stack.</p>
      </div>

      <div className="flex flex-col gap-10">
        {lanes.map((lane) => (
          <div key={lane.id} className="pause-on-hover group w-full">
            {/* 2. TÍTULO DE CATEGORÍA 100% CENTRADO */}
            <div className="w-full text-center mb-3">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300">
                {lane.title}
              </span>
            </div>

            {/* 3. CARRIL ENCAPSULADO TRANSPARENTE */}
            <div className="relative flex w-full overflow-hidden py-6">
              <div
                className={`animate-marquee flex gap-8 md:gap-16 items-center px-4 ${lane.direction === "reverse" ? "direction-reverse" : ""}`}
                style={{ animationDuration: lane.speed }}>
                
                {/* Bloque 1 */}
                <div className="flex gap-8 md:gap-16 items-center flex-shrink-0">
                  {lane.skills.map((skill, index) => (
                    <div
                      key={`b1-${index}`}
                      className="flex items-center gap-3 md:gap-4 flex-shrink-0 transition-all duration-500 hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 md:w-14 md:h-14 object-contain tech-logo"
                      />
                      <span className="text-sm font-bold tracking-tight opacity-40 group-hover:opacity-80 transition-opacity">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bloque 2 (Duplicado exacto para loop infinito) */}
                <div className="flex gap-8 md:gap-16 items-center flex-shrink-0">
                  {lane.skills.map((skill, index) => (
                    <div
                      key={`b2-${index}`}
                      className="flex items-center gap-3 md:gap-4 flex-shrink-0 transition-all duration-500 hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 md:w-14 md:h-14 object-contain tech-logo"
                      />
                      <span className="text-sm font-bold tracking-tight opacity-40 group-hover:opacity-80 transition-opacity">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Bloque 3 (Duplicado exacto para resoluciones extremas) */}
                <div className="flex gap-8 md:gap-16 items-center flex-shrink-0">
                  {lane.skills.map((skill, index) => (
                    <div
                      key={`b3-${index}`}
                      className="flex items-center gap-3 md:gap-4 flex-shrink-0 transition-all duration-500 hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 md:w-14 md:h-14 object-contain tech-logo"
                      />
                      <span className="text-sm font-bold tracking-tight opacity-40 group-hover:opacity-80 transition-opacity">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Bloque 4 (Duplicado exacto para resoluciones extremas) */}
                <div className="flex gap-8 md:gap-16 items-center flex-shrink-0">
                  {lane.skills.map((skill, index) => (
                    <div
                      key={`b4-${index}`}
                      className="flex items-center gap-3 md:gap-4 flex-shrink-0 transition-all duration-500 hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 md:w-14 md:h-14 object-contain tech-logo"
                      />
                      <span className="text-sm font-bold tracking-tight opacity-40 group-hover:opacity-80 transition-opacity">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* 4. DEGRADADOS ADAPTADOS AL NUEVO CONTENEDOR */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

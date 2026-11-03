import { useTranslation } from "react-i18next";

export default function GraphicSkills() {
  const { t } = useTranslation();

  const lanes = [
    {
      id: "languages",
      title: "Lenguajes",
      direction: "normal",
      speed: "25s",
      skills: [
        { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "C++",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
        { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libs",
      direction: "reverse",
      speed: "30s",
      skills: [
        {
          name: "Spring Boot",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        {
          name: "Node.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Django",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        },
        {
          name: "FastAPI",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Flutter",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
        },
        {
          name: "TailwindCSS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        { name: "OpenCV", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        { name: "JWT", src: "https://jwt.io/img/pic_logo.svg" },
      ],
    },
    {
      id: "databases",
      title: "Bases de Datos & Almacenamiento",
      direction: "normal",
      speed: "25s",
      skills: [
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        {
          name: "PostgreSQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        },
        {
          name: "Firebase",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        },
        {
          name: "AWS RDS",
          src: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/aws-rds-5qblz3nvfjmipvbykjpba.png/aws-rds-o6rtmustsgv3emnpozj4.png?_a=DATAiZAAZAA0",
        },
      ],
    },
    {
      id: "devops",
      title: "Tools & DevOps",
      direction: "reverse",
      speed: "40s",
      skills: [
        {
          name: "Linux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "Nginx",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
        },
        {
          name: "Google Cloud",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        },
        {
          name: "AWS EC2",
          src: "https://files.svgcdn.io/logos/aws-ec2.svg",
        },
        {
          name: "AWS Lambda",
          src: "https://files.svgcdn.io/logos/aws-lambda.svg",
        },
        {
          name: "AWS S3",
          src: "https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg",
        },
        {
          name: "Envoy Proxy",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/envoy/envoy-original.svg",
        },
        {
          name: "RabbitMQ",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        },
        {
          name: "SonarQube",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
        },
        {
          name: "Nexus",
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_of_Sonatype_Nexus_Repository.svg",
        },
        {
          name: "Stripe",
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/3840px-Stripe_Logo%2C_revised_2016.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        },
        {
          name: "Twilio",
          src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg",
        },
        {
          name: "Postman",
          src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        },
        {
          name: "Vite",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
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

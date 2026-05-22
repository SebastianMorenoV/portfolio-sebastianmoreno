import React from 'react';
import { motion } from 'framer-motion';
import { useProfile, useLocalized } from '../../hooks/useSanity';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import profilePic from '../../assets/profilePicture.jpg';

function GithubIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

const About = () => {
  const { profile, loading } = useProfile();
  const localize = useLocalized();
  const { t, i18n } = useTranslation();

  if (loading) return null;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-8 h-8" />,
      url: profile?.githubUrl || 'https://github.com/SebastianMorenoV',
      color: 'hover:text-content hover:bg-content/10',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-8 h-8" />,
      url: profile?.linkedinUrl || 'https://www.linkedin.com/in/erick-sebasti%C3%A1n-moreno-vargas-67a780259/',
      color: 'hover:text-blue-500 hover:bg-blue-500/10',
    },
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8" />,
      url: profile?.email ? `mailto:${profile.email}` : 'mailto:moreno.sebastian.cb37@gmail.com',
      color: 'hover:text-red-500 hover:bg-red-500/10',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-8 h-8" />,
      url: profile?.whatsapp 
        ? `https://wa.me/${profile.whatsapp}` 
        : `https://wa.me/526441901249?text=${encodeURIComponent(
            i18n.language.startsWith('es') ? 'Hola Sebastian, ¿Cómo estás?' : 'Hi Sebastian, How are you doing?'
          )}`,
      color: 'hover:text-green-500 hover:bg-green-500/10',
    }
  ].filter(link => link.url);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative z-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-content">
          {t('about.title')}
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      {/* BENTO BOX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">

        {/* Box 1: Large Intro (Span 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 row-span-1 md:row-span-2 bg-surface border border-content/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center shadow-lg hover:shadow-xl hover:border-content/20 transition-all"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-content mb-6">
            {t('about.box1.title')}
          </h3>
          <p className="text-lg text-content-muted leading-relaxed">
            {localize(profile?.bioStart)} <span className="text-primary font-semibold">{localize(profile?.bioHighlight)}</span> {localize(profile?.bioEnd)}
          </p>
          <p className="text-lg text-content-muted leading-relaxed mt-4">
            {t('about.box1.desc')}
          </p>
        </motion.div>

        {/* Box 2: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row-span-1 min-h-[300px] md:min-h-0 bg-surface border border-content/10 rounded-3xl overflow-hidden relative shadow-lg group"
        >
          <img
            src={profilePic}
            alt="Sebastian Moreno"
            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        </motion.div>

        {/* Box 3: Location / Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="row-span-1 min-h-[250px] md:min-h-0 bg-surface border border-content/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:border-primary/50 transition-all relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <MapPin size={48} className="text-primary mb-4" />
          <h4 className="text-xl font-bold text-content mb-2">{t('about.location.title')}</h4>
          <p className="text-content-muted font-medium">{t('hero.location')}</p>
          <p className="text-sm text-content-muted/70 mt-2">{t('about.location.remote')}</p>
        </motion.div>

        {/* Box 4: Connect / Socials (Span full width on mobile, 3 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-3 row-span-1 bg-surface border border-content/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg hover:shadow-xl hover:border-content/20 transition-all"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-content mb-2">{t('about.connect.title')}</h3>
            <p className="text-content-muted">{t('about.connect.desc')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className={`p-4 rounded-2xl bg-background border border-content/5 text-content-muted transition-all duration-300 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

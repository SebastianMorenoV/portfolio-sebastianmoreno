import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative mt-24 border-t border-content/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-surface pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-content mb-6 tracking-tight leading-tight"
            >
              {t('footer.tagline')}
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="mailto:moreno.sebastian.cb37@gmail.com"
              className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-4xl font-bold text-primary hover:text-blue-400 transition-colors group break-all"
            >
              moreno.sebastian.cb37@gmail.com
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-right text-content-muted">
            <p className="font-semibold text-content">{t('footer.navTitle')}</p>
            <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
            <Link to="/posts" className="hover:text-primary transition-colors">{t('nav.posts')}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-content/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-content-muted">
          <p>© {new Date().getFullYear()} Sebastian Moreno. {t('footer.rights')}</p>
          <p>
            Designed & Built with <span className="text-red-500">♥</span> using React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

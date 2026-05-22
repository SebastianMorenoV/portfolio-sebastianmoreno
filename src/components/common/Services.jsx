import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Database, Layout } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: t('services.items.frontend.title'),
      description: t('services.items.frontend.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: t('services.items.backend.title'),
      description: t('services.items.backend.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: t('services.items.fullstack.title'),
      description: t('services.items.fullstack.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative z-10" id="services">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-content"
        >
          {t('services.title')}
        </motion.h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-content-muted text-lg max-w-2xl mx-auto"
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface border border-content/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-content mb-4">{service.title}</h3>
            <p className="text-content-muted leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

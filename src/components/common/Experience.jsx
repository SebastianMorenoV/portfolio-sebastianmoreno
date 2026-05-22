import React from 'react';
import { motion } from 'framer-motion';
import { useExperience, useLocalized } from '../../hooks/useSanity';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ exp, index }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const isEven = index % 2 === 0;
  const localize = useLocalized();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12"></div>

      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-10 h-10 rounded-full bg-primary border-4 border-background shadow-lg">
        <Briefcase size={16} className="text-white" />
      </div>

      {/* Card Content */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div className={`bg-surface p-6 rounded-2xl shadow-lg border border-content/10 hover:border-primary/50 transition-colors ${
          isEven ? 'md:mr-8' : 'md:ml-8'
        }`}>
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-sm font-mono text-primary font-bold tracking-wider uppercase">
              {formatDate(exp.startDate)} — {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
            </span>
            <h3 className="text-2xl font-bold text-content">{localize(exp.role)}</h3>
            <h4 className="text-lg font-medium text-content-muted">{exp.company}</h4>
          </div>

          <p className="text-content-muted leading-relaxed mb-6 whitespace-pre-line">
            {localize(exp.description)}
          </p>

          {exp.technologies && exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-background text-content rounded-full border border-content/10 text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { experience, loading } = useExperience();
  const { t } = useTranslation();

  if (loading) return null;
  if (!experience || experience.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto relative z-10" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-content">
          {t('experience.title') || 'Work Experience'}
        </h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
      </div>

      <div className="relative py-8">
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-4 md:left-1/2 transform -translate-x-1/2 w-1 bg-content/20 rounded-full"></div>

        {/* Timeline Items */}
        {experience.map((exp, index) => (
          <ExperienceCard key={exp._id || index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects, useLocalized } from '../../hooks/useSanity';
import { urlFor } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink } from 'lucide-react';
import { PortableText } from '@portabletext/react';

function GithubIcon({ className }) {
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
      strokeLinejoin="round"
      className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

const Projects = () => {
  const { projects, loading } = useProjects();
  const localize = useLocalized();
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedId]);

  if (loading) return null;
  if (!projects || projects.length === 0) return null;

  const selectedProject = projects.find(p => p._id === selectedId);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-content">
          {t('projects.title') || 'Featured Projects'}
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`project-container-${project._id}`}
            key={project._id}
            onClick={() => setSelectedId(project._id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer flex flex-col bg-surface shadow-md hover:shadow-xl border border-content/10 rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden relative">
              {project.image ? (
                <motion.img 
                  layoutId={`project-image-${project._id}`}
                  src={urlFor(project.image).width(600).url()} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-background flex items-center justify-center">
                  <span className="text-content-muted font-mono">No Image</span>
                </div>
              )}
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-content mb-3 group-hover:text-primary transition-colors">
                {localize(project.title)}
              </h3>
              <p className="text-content-muted leading-relaxed line-clamp-3">
                {localize(project.description)}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-content/10">
                {project.tags?.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs font-semibold text-content-muted bg-background px-3 py-1 rounded-full border border-content/5">
                    {tag}
                  </span>
                ))}
                {project.tags?.length > 3 && (
                  <span className="text-xs font-semibold text-content-muted bg-background px-3 py-1 rounded-full border border-content/5">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Shared Layout Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedProject._id}`}
              className="bg-surface border border-content/10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-2 bg-background/80 hover:bg-primary text-content hover:text-white rounded-full transition-colors z-10 backdrop-blur-md"
                onClick={() => setSelectedId(null)}
              >
                <X size={24} />
              </button>

              {/* Modal Header Image */}
              {selectedProject.image && (
                <div className="w-full h-64 md:h-96 relative">
                  <motion.img 
                    layoutId={`project-image-${selectedProject._id}`}
                    src={urlFor(selectedProject.image).width(1200).url()} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                <motion.h3 
                  layoutId={`project-title-${selectedProject._id}`}
                  className="text-3xl md:text-5xl font-extrabold mb-4 text-content"
                >
                  {localize(selectedProject.title)}
                </motion.h3>

                {(localize(selectedProject.role) || localize(selectedProject.duration)) && (
                  <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-content-muted">
                    {localize(selectedProject.role) && (
                      <span className="flex items-center gap-1 bg-surface px-3 py-1 rounded-full border border-content/10">
                        👨‍💻 {localize(selectedProject.role)}
                      </span>
                    )}
                    {localize(selectedProject.duration) && (
                      <span className="flex items-center gap-1 bg-surface px-3 py-1 rounded-full border border-content/10">
                        ⏱️ {localize(selectedProject.duration)}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex gap-4 mb-8 text-content-muted font-mono text-sm border-b border-content/10 pb-8">
                  <div className="flex gap-4 ml-auto">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <GithubIcon className="w-5 h-5" /> {t('projects.modal.code')}
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" /> {t('projects.modal.demo')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Portable Text Content */}
                <div className="prose dark:prose-invert prose-lg max-w-none text-content-muted prose-headings:text-content prose-strong:text-content prose-a:text-primary hover:prose-a:text-blue-500">
                  {selectedProject.content && (
                    <div className="mb-8">
                      <PortableText value={localize(selectedProject.content) || selectedProject.content} />
                    </div>
                  )}
                  {!selectedProject.content && (
                    <p className="text-xl leading-relaxed">{localize(selectedProject.description)}</p>
                  )}
                </div>

                {/* Gallery Section */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mt-12 mb-8">
                    <h4 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">{t('projects.modal.gallery')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, idx) => (
                        <div key={idx} className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-content/10 shadow-md">
                          <img 
                            src={urlFor(img).width(800).url()} 
                            alt={`${localize(selectedProject.title)} gallery image ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                            onClick={() => setSelectedImage(urlFor(img).url())}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags Section */}
                <div className="mt-12 pt-8 border-t border-content/10">
                  <h4 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">{t('projects.modal.technologies')}</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags?.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-background text-content-muted rounded-full border border-content/10 text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox Overlay */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-[100000]"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;

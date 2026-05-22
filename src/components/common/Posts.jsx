import React from 'react';
import { motion } from 'framer-motion';
import { usePosts, useLocalized } from '../../hooks/useSanity';
import { urlFor } from '../../lib/sanity';
import { ExternalLink, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function LinkedinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

const Posts = () => {
  const { posts, loading } = usePosts();
  const localize = useLocalized();
  const { t } = useTranslation();

  if (loading) return null;

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'linkedin': return <LinkedinIcon className="w-5 h-5 text-blue-500" />;
      case 'twitter': return <TwitterIcon className="w-5 h-5 text-sky-400" />;
      default: return <FileText size={20} className="text-primary" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative z-10" id="posts">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-content">
          {t('posts.title')}
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <div className={!posts || posts.length === 0 ? "flex justify-center w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {!posts || posts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-12 md:p-16 bg-surface border border-content/10 rounded-3xl text-center shadow-lg w-full max-w-2xl"
          >
            <FileText size={64} className="text-content-muted mb-6 opacity-30" />
            <h3 className="text-2xl md:text-3xl font-bold text-content mb-3">{t('posts.empty.title')}</h3>
            <p className="text-lg text-content-muted">{t('posts.empty.desc')}</p>
          </motion.div>
        ) : (
          posts.map((post, index) => (
          <motion.a
            href={post.link || '#'}
            target={post.link ? "_blank" : "_self"}
            rel="noreferrer"
            key={post._id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group block relative bg-surface border border-content/10 rounded-3xl overflow-hidden hover:border-content/20 hover:shadow-2xl transition-all duration-300"
          >
            {/* Header / Platform */}
            <div className="flex items-center justify-between p-6 border-b border-content/5">
              <div className="flex items-center gap-3">
                {getPlatformIcon(post.platform)}
                <span className="text-sm font-semibold text-content uppercase tracking-wider">
                  {post.platform}
                </span>
              </div>
              <span className="text-xs text-content-muted font-mono">
                {formatDate(post.date)}
              </span>
            </div>

            {/* Image (if any) */}
            {post.image && (
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={urlFor(post.image).width(600).url()} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-content mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {localize(post.title)}
              </h3>
              <p className="text-content-muted text-sm leading-relaxed line-clamp-3 mb-6 whitespace-pre-line">
                {localize(post.content)}
              </p>
              
              {post.link && (
                <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  {t('posts.readMore')} <ExternalLink size={16} />
                </div>
              )}
            </div>
          </motion.a>
        )))}
      </div>
    </section>
  );
};

export default Posts;

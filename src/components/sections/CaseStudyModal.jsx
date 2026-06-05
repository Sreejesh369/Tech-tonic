import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../ui/Button';
import styles from './CaseStudyModal.module.css';

export function CaseStudyModal({ project, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Move focus into the panel for keyboard users.
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.article
            ref={panelRef}
            tabIndex={-1}
            className={styles.panel}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose} aria-label="Close case study">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className={styles.hero} style={{ background: project.accentImage }}>
              <div className={styles.heroGrid} aria-hidden="true" />
              <span className={styles.heroIndex}>{project.index}</span>
              <div className={styles.heroMeta}>
                <span className={styles.heroCategory}>{project.category}</span>
                <span className={styles.heroYear}>{project.year}</span>
              </div>
              <h2 className={styles.title}>{project.title}</h2>
            </div>

            <div className={styles.content}>
              <div className={styles.lead}>
                <p>{project.overview}</p>
              </div>

              <div className={styles.metaGrid}>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>Platforms</span>
                  <span className={styles.metaValue}>{project.platforms.join(', ')}</span>
                </div>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>Services</span>
                  <span className={styles.metaValue}>{project.services.join(', ')}</span>
                </div>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>Stack</span>
                  <span className={styles.metaValue}>{project.stack.join(', ')}</span>
                </div>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockTitle}>Scope</h3>
                <ul className={styles.scope}>
                  {project.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockTitle}>Results</h3>
                <div className={styles.results}>
                  {project.results.map((r) => (
                    <div key={r.label} className={styles.result}>
                      <span className={styles.resultMetric}>{r.metric}</span>
                      <span className={styles.resultLabel}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cta}>
                <p className={styles.ctaText}>Have a project with a similar shape?</p>
                <Button href="#contact" variant="primary" arrow onClick={onClose}>
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

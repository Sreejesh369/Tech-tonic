import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { CaseStudyModal } from './CaseStudyModal';
import { projects } from '../../data/projects';
import { stagger, fadeUp, viewport } from '../../lib/motion';
import styles from './Work.module.css';

export function Work() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader
          index="01 — Work"
          eyebrow="Selected Case Studies"
          titleLines={['Products built with', 'intent and precision.']}
          lead="A selection of recent work across web, mobile, and platform engineering. Every engagement is measured against outcomes, not output."
        />

        <motion.div
          className={styles.grid}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {projects.map((p) => (
            <motion.article key={p.id} className={styles.card} variants={fadeUp}>
              <button
                className={styles.cardBtn}
                aria-label={`Open case study: ${p.title}`}
                onClick={() => setActive(p)}
              />
              <div className={styles.visual} style={{ background: p.accentImage }}>
                <span className={styles.index}>{p.index}</span>
                <div className={styles.platforms}>
                  {p.platforms.map((pl) => (
                    <span key={pl} className={styles.platform}>
                      {pl}
                    </span>
                  ))}
                </div>
                <div className={styles.visualGrid} aria-hidden="true" />
                <div className={styles.outcome}>
                  <span className={styles.outcomeMetric}>{p.outcome.metric}</span>
                  <span className={styles.outcomeLabel}>{p.outcome.label}</span>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.category}>{p.category}</span>
                </div>
                <p className={styles.summary}>{p.summary}</p>
                <div className={styles.foot}>
                  <span className={styles.services}>{p.services.join(' · ')}</span>
                  <span className={styles.open} aria-hidden="true">
                    Case study
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                      <path
                        d="M3 8h9M8 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

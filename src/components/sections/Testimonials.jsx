import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonials } from '../../data/site';
import { stagger, fadeUp, viewport } from '../../lib/motion';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="grid-overlay" />
      <div className="container">
        <SectionHeader
          index="06 — Trust"
          eyebrow="What Clients Say"
          titleLines={['Trusted by teams', 'who ship seriously.']}
        />

        <motion.div
          className={styles.grid}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className={`${styles.card} ${i === 0 ? styles.featured : ''}`}
              variants={fadeUp}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                "
              </span>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.author
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <span className={styles.authorMeta}>
                  <span className={styles.authorName}>{t.author}</span>
                  <span className={styles.authorCompany}>{t.company}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

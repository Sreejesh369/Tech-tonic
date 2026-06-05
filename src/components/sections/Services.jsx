import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { services } from '../../data/site';
import { stagger, fadeUp, viewport } from '../../lib/motion';
import styles from './Services.module.css';

export function Services() {
  return (
    <section className="section" id="services">
      <div className="grid-overlay" />
      <div className="container">
        <SectionHeader
          index="02 — Services"
          eyebrow="What We Do"
          titleLines={['End-to-end engineering,', 'across every surface.']}
          lead="One team for strategy, design, and engineering — so the product that ships is the product that was designed."
        />

        <motion.div
          className={styles.bento}
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              className={`${styles.cell} ${styles[s.span]}`}
              variants={fadeUp}
            >
              <div className={styles.cellTop}>
                <span className={styles.no}>{s.no}</span>
                <span className={styles.plus} aria-hidden="true" />
              </div>
              <div className={styles.cellBody}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.blurb}>{s.blurb}</p>
              </div>
              <ul className={styles.points}>
                {s.points.map((p) => (
                  <li key={p} className={styles.point}>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

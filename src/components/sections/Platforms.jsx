import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { platforms } from '../../data/site';
import { stagger, fadeUp, viewport } from '../../lib/motion';
import styles from './Platforms.module.css';

function Frame({ type }) {
  if (type === 'phone') {
    return (
      <div className={`${styles.frame} ${styles.phone}`} aria-hidden="true">
        <span className={styles.notch} />
        <div className={styles.screen}>
          <span className={styles.bar} style={{ width: '60%' }} />
          <span className={styles.bar} style={{ width: '85%' }} />
          <span className={styles.block} />
          <span className={styles.bar} style={{ width: '45%' }} />
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.frame} ${styles.browser}`} aria-hidden="true">
      <span className={styles.dots}>
        <i /><i /><i />
      </span>
      <div className={styles.screen}>
        <span className={styles.bar} style={{ width: '40%' }} />
        <span className={styles.blockWide} />
        <span className={styles.bar} style={{ width: '70%' }} />
        <span className={styles.bar} style={{ width: '55%' }} />
      </div>
    </div>
  );
}

export function Platforms() {
  return (
    <section className="section" id="platforms">
      <div className="container">
        <SectionHeader
          index="05 — Platforms"
          eyebrow="Where We Ship"
          titleLines={['One studio.', 'Every surface.']}
          lead="From marketing sites to multi-tenant SaaS, we deliver coherent products across the platforms your customers actually use."
        />

        <motion.div
          className={styles.grid}
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {platforms.map((p) => (
            <motion.article key={p.id} className={styles.card} variants={fadeUp}>
              <div className={styles.frameWrap}>
                <Frame type={p.frame} />
              </div>
              <div className={styles.cardFoot}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

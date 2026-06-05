import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { process } from '../../data/site';
import { fadeUp, stagger, viewport } from '../../lib/motion';
import styles from './Process.module.css';

export function Process() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeader
          index="03 — Process"
          eyebrow="How We Work"
          titleLines={['A disciplined path', 'from idea to scale.']}
          lead="Five phases, run with rigor. Each one ends with something real — a decision, an artifact, or a release."
        />

        <div className={styles.track} ref={trackRef}>
          <div className={styles.lineBase} aria-hidden="true">
            <motion.div className={styles.lineFill} style={{ scaleX: lineScale }} />
          </div>

          <motion.ol
            className={styles.steps}
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {process.map((step) => (
              <motion.li key={step.no} className={styles.step} variants={fadeUp}>
                <div className={styles.node} aria-hidden="true">
                  <span className={styles.nodeDot} />
                </div>
                <span className={styles.stepNo}>{step.no}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                <ul className={styles.deliverables}>
                  {step.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

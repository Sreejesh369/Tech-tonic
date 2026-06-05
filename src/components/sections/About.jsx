import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { SplitText } from '../ui/SplitText';
import { Counter } from '../ui/Counter';
import { metrics, industries } from '../../data/site';
import { stagger, fadeUp, viewport } from '../../lib/motion';
import styles from './About.module.css';

const pillars = [
  { title: 'Engineering quality', desc: 'Typed, tested, reviewed. Architecture that holds up under load and over time.' },
  { title: 'UI polish', desc: 'Interfaces refined to the pixel and the millisecond — nothing left to chance.' },
  { title: 'Cross-platform', desc: 'One coherent product across web, iOS, and Android — designed and shipped together.' },
  { title: 'Client collaboration', desc: 'Tight loops, honest updates, and a team that operates as an extension of yours.' },
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <Reveal className={styles.meta}>
              <span className={styles.index}>04 — Studio</span>
              <span className="eyebrow">About Tectonics</span>
            </Reveal>
            <SplitText
              as="h2"
              lines={['A team of engineers', 'building products', 'designed to scale.']}
              className={styles.title}
              staggerAmount={0.05}
            />
            <Reveal as="p" delay={0.1} className={`lead ${styles.lead}`}>
              Tectonics is a software engineering studio. We design and build websites, iOS apps,
              Android apps, and the platforms behind them — with the engineering discipline of a
              product company and the craft of a design studio.
            </Reveal>
            <Reveal as="p" delay={0.16} className={styles.body}>
              We work in small, senior teams. No hand-offs to junior benches, no template factories —
              the people who scope your product are the people who ship it.
            </Reveal>
          </div>

          <motion.div
            className={styles.pillars}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {pillars.map((p) => (
              <motion.div key={p.title} className={styles.pillar} variants={fadeUp}>
                <span className={styles.pillarMark} aria-hidden="true" />
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal className={styles.metrics}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>
                <Counter value={m.value} suffix={m.suffix} />
              </span>
              <span className={styles.metricLabel}>{m.label}</span>
              {m.display && <span className={styles.metricSub}>{m.display}</span>}
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.industries} delay={0.1}>
          <span className={styles.industriesLabel}>Industries served</span>
          <div className={styles.industriesList}>
            {industries.map((i) => (
              <span key={i} className={styles.industry}>
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

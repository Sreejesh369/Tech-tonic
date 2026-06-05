import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { SplitText } from '../ui/SplitText';
import { stagger, fadeUp } from '../../lib/motion';
import styles from './Hero.module.css';

// Defer the WebGL layers so they never block first paint.
const TectonicScene = lazy(() =>
  import('../three/TectonicScene').then((m) => ({ default: m.TectonicScene })),
);
const SideRays = lazy(() => import('../ui/SideRays'));

const trust = ['Web', 'iOS', 'Android', 'UI/UX'];

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.scene}>
        <Suspense fallback={null}>
          <TectonicScene />
        </Suspense>
      </div>

      {/* Ambient side-rays light wash (React Bits — tuned to the brand palette) */}
      <div className={styles.rays}>
        <Suspense fallback={null}>
          <SideRays
            origin="top-right"
            rayColor1="#34E0D0"
            rayColor2="#b6c0c6"
            speed={1.6}
            intensity={1.7}
            spread={2.0}
            tilt={0}
            saturation={0.95}
            blend={0.38}
            falloff={1.5}
            opacity={0.85}
          />
        </Suspense>
      </div>

      <div className="grid-overlay" />
      <div className={styles.scrim} />
      <div className={styles.fade} />

      {/* Technical viewfinder frame */}
      <div className={styles.frame} aria-hidden="true">
        <span className={`${styles.corner} ${styles.tl}`} />
        <span className={`${styles.corner} ${styles.tr}`} />
        <span className={`${styles.corner} ${styles.bl}`} />
        <span className={`${styles.corner} ${styles.br}`} />
        <span className={`${styles.fLabel} ${styles.fTopLeft}`}>TECTONICS™ / STUDIO</span>
        <span className={`${styles.fLabel} ${styles.fTopRight}`}>EST. 2026</span>
        <span className={`${styles.fLabel} ${styles.fBotLeft}`}>47.0°N · 8.3°E</span>
        <span className={`${styles.fLabel} ${styles.fBotRight}`}>WEB · iOS · ANDROID</span>
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.eyebrowRow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <span className="eyebrow">Software Engineering Studio</span>
          <span className={styles.status}>
            <span className={styles.dot} />
            Available for Q3
          </span>
        </motion.div>

        <h1 className={styles.headline}>
          <SplitText
            as="span"
            lines={['We engineer digital', 'products that move', 'businesses forward.']}
            accentWords={['digital', 'products']}
            staggerAmount={0.08}
            delay={0.3}
          />
        </h1>

        <motion.p
          className={`lead ${styles.lead}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          Tectonics builds high-performance websites, iOS apps, and Android apps with sharp design,
          solid architecture, and production-grade execution.
        </motion.p>

        <motion.div
          className={styles.ctas}
          variants={stagger(0.12, 0.95)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <Magnetic strength={0.3}>
              <Button href="#contact" variant="primary" arrow>
                Start a Project
              </Button>
            </Magnetic>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button href="#work" variant="ghost">
              View Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul
          className={styles.trust}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          aria-label="Capabilities"
        >
          {trust.map((t, i) => (
            <li key={t} className={styles.trustItem}>
              {t}
              {i < trust.length - 1 && <span className={styles.sep} aria-hidden="true" />}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#work"
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-label="Scroll to work"
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollTrack}>
          <motion.span
            className={styles.scrollDot}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}

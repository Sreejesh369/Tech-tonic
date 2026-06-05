import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { nav } from '../../data/site';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Tectonics — home">
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button href="#contact" variant="primary" arrow className={styles.cta}>
            Start a Project
          </Button>
          <button
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`${styles.burgerLine} ${open ? styles.b1 : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.b2 : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className={styles.mobileNav} aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <span className={styles.mobileIndex}>0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <Button href="#contact" variant="primary" arrow onClick={() => setOpen(false)}>
              Start a Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

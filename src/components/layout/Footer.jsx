import { Logo } from '../ui/Logo';
import { nav, contact } from '../../data/site';
import styles from './Footer.module.css';

export function Footer() {
  const year = 2026;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo />
            <p className={styles.tagline}>
              Software engineering studio building high-performance websites, iOS, and Android apps.
            </p>
            <a className={styles.email} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colLabel}>Navigate</span>
            <ul className={styles.linkList}>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colLabel}>Social</span>
            <ul className={styles.linkList}>
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaCol}>
            <span className={styles.colLabel}>Ready when you are</span>
            <a href="#contact" className={styles.bigCta}>
              Start a Project
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M5 12h13M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Tectonics. All rights reserved.</span>
          <span className={styles.built}>Engineered with React · Three.js · Motion</span>
        </div>
      </div>
    </footer>
  );
}

import { SplitText } from './SplitText';
import { Reveal } from './Reveal';
import styles from './SectionHeader.module.css';

/**
 * Shared section header: index + eyebrow, large split title, optional lead.
 */
export function SectionHeader({ index, eyebrow, title, titleLines, lead, align = 'left', children }) {
  return (
    <header className={`${styles.head} ${align === 'center' ? styles.center : ''}`}>
      <Reveal className={styles.meta}>
        {index && <span className={styles.index}>{index}</span>}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      </Reveal>
      <SplitText
        as="h2"
        text={title}
        lines={titleLines}
        className={styles.title}
        staggerAmount={0.05}
      />
      {lead && (
        <Reveal as="p" delay={0.1} className={`lead ${styles.lead}`}>
          {lead}
        </Reveal>
      )}
      {children}
    </header>
  );
}

import { Marquee } from '../ui/Marquee';
import styles from './KineticBand.module.css';

const capabilities = [
  'Web Engineering',
  'iOS Apps',
  'Android Apps',
  'Product Design',
  'SaaS Platforms',
  'Maintenance & Scaling',
];

const stack = ['React', 'TypeScript', 'Swift', 'Kotlin', 'Node', 'GraphQL', 'Edge SSR', 'Rust'];

export function KineticBand() {
  return (
    <section className={styles.band} aria-label="Capabilities">
      <Marquee items={capabilities} speed={42} separator="✦" />
      <Marquee items={stack} speed={34} reverse outline separator="/" />
    </section>
  );
}

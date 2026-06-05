import { Fragment } from 'react';
import { motion } from 'motion/react';
import { stagger, lineReveal, viewport } from '../../lib/motion';
import styles from './SplitText.module.css';

/**
 * Reveals a heading word-by-word with a masked upward slide.
 * Pass an array for `lines` to control line breaks explicitly.
 * `accentWords` renders matching words in the accent color.
 */
export function SplitText({
  text,
  lines,
  as = 'h2',
  className,
  staggerAmount = 0.06,
  delay = 0,
  accentWords = [],
}) {
  const MotionTag = motion[as] || motion.h2;
  const source = lines ?? [text];

  return (
    <MotionTag
      className={className}
      variants={stagger(staggerAmount, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {source.map((line, li) => {
        const words = line.split(' ');
        return (
          <span className={styles.line} key={li}>
            {words.map((word, wi) => {
              const isAccent = accentWords.includes(word);
              return (
                <Fragment key={wi}>
                  <span className={styles.word}>
                    <motion.span
                      className={`${styles.inner} ${isAccent ? styles.accent : ''}`}
                      variants={lineReveal}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {/* space lives in the block-level line so it never collapses */}
                  {wi < words.length - 1 ? ' ' : ''}
                </Fragment>
              );
            })}
          </span>
        );
      })}
    </MotionTag>
  );
}

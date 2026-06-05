import { motion } from 'motion/react';
import { fadeUp, viewport } from '../../lib/motion';

/**
 * Scroll-triggered reveal wrapper. Animates once when it enters the viewport.
 * `as` lets it render any element; `delay` offsets the entrance.
 */
export function Reveal({ children, as = 'div', delay = 0, y, className, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  const variants = y == null
    ? fadeUp
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

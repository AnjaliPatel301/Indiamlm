import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Wraps any section content with a scroll-triggered fade/rise animation.
 * Uses react-intersection-observer so the animation fires once, near viewport,
 * instead of re-triggering on every scroll pass.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

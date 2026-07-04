import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

/**
 * Animated number that counts up from 0 once it scrolls into view.
 * Used for hero stats, "Why Choose Us" numbers, and global reach metrics.
 */
export default function StatCounter({ value, suffix = '', prefix = '', label, duration = 2 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="text-3xl font-semibold text-ink-100 md:text-4xl">
        {prefix}
        {inView ? (
          <CountUp end={value} duration={duration} separator="," />
        ) : (
          0
        )}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-ink-400">{label}</p>
    </div>
  );
}

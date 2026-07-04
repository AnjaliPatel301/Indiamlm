import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const panelVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0.04 * i, ease: 'easeOut' },
  }),
};

/**
 * Renders the dropdown panel for a single nav item that has a `mega` config.
 * Positioned absolutely by the parent <Navbar />; this component only
 * handles its own layout, animation, and content.
 */
export default function MegaMenu({ menu, onNavigate }) {
  if (!menu) return null;

  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="menu"
      aria-label={`${menu.label} menu`}
      className="absolute left-1/2 top-full z-40 w-screen max-w-3xl -translate-x-1/2 pt-4"
    >
      <div className="glass-panel-strong bg-white text-black rounded-2xl p-6 shadow-premium">
        <div className="grid grid-cols-1 gap-8  md:grid-cols-[1fr_1fr_auto]">
          {menu.columns.map((column, i) => (
            <motion.div
              key={column.heading}
              custom={i}
              variants={columnVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                {column.heading}
              </p>
              <ul className="space-y-1">
                {column.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={onNavigate}
                        role="menuitem"
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-200 hover:bg-white/[0.06]"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-500 transition-colors duration-200 group-hover:bg-primary-500 group-hover:text-white">
                          <Icon size={12} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-black transition-colors group-hover:text-primary-400">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-black">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

          {menu.highlight && (
            <motion.div
              custom={menu.columns.length}
              variants={columnVariants}
              initial="hidden"
              animate="visible"
              className="w-64"
            >
              <Link
                to={menu.highlight.path}
                onClick={onNavigate}
                className="group block h-full rounded-xl bg-orange-gradient p-5 shadow-glow transition-transform duration-300 hover:-translate-y-1"
              >
                <menu.highlight.icon size={22} className="mb-3 text-white" strokeWidth={1.75} />
                <p className="text-sm font-semibold text-white">{menu.highlight.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/85">
                  {menu.highlight.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

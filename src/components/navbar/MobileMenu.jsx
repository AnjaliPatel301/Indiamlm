import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { primaryNav } from '@data/menuData';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'tween', duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: '100%', transition: { type: 'tween', duration: 0.28, ease: 'easeIn' } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Full-screen mobile drawer rendered from <Navbar />.
 * Reads the same `primaryNav` data as the desktop MegaMenu so links never drift.
 */
export default function MobileMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useLockBodyScroll(isOpen);

  // Escape key closes drawer; focus moves to close button on open.
  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (label) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  const handleNavigate = () => {
    setOpenSection(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
            <motion.aside
              id="mobile-menu"
            ref={drawerRef}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-[61] flex h-full w-full max-w-none sm:max-w-sm flex-col bg-white shadow-premium lg:hidden"
          >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4">
              <span className="text-lg font-semibold text-black">
               <img src="/mlm_logo.png" className='w-11' alt="" />
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-full glass-panel text-black transition-colors hover:bg-white/[0.1]"
              >
                <X size={20} className='text-black'/>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {primaryNav.map((item) => (
                  <li key={item.path}>
                    {item.mega ? (
                      <div>
                        <button
                          onClick={() => toggleSection(item.label)}
                          aria-expanded={openSection === item.label}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-medium text-black transition-colors hover:bg-white/[0.05]"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={`text-ink-400 transition-transform duration-300 ${
                              openSection === item.label ? 'rotate-180 text-primary-500' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {openSection === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden pl-3"
                            >
                              {item.mega.columns.map((column) => (
                                <div key={column.heading} className="py-2">
                                  <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-ink-600">
                                    {column.heading}
                                  </p>
                                  {column.items.map((sub) => (
                                    <Link
                                      key={sub.path}
                                      to={sub.path}
                                      onClick={handleNavigate}
                                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-400 transition-colors hover:bg-white/[0.05] hover:text-primary-400"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleNavigate}
                        className="block rounded-xl px-3 py-3.5 text-base font-medium text-black transition-colors hover:bg-white/[0.05]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-white/[0.08] p-4">
              <Link
                to="/contact"
                onClick={handleNavigate}
                className="btn-secondary w-full mb-3"
              >
                Contact
              </Link>
              <Link
                to="/demo"
                onClick={handleNavigate}
                className="btn-primary w-full"
              >
                Book Free Demo
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

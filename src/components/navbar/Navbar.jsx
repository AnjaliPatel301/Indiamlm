import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { primaryNav } from '@data/menuData';
import { useScrolled } from '@hooks/useScrolled';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

/**
 * Sticky enterprise navbar.
 * - Transparent over the hero, switches to a glass panel after scrolling.
 * - Each item with a `mega` config opens its panel on hover or focus,
 *   and closes on mouse leave / blur / Escape — standard mega-menu a11y pattern.
 */
export default function Navbar() {
  const scrolled = useScrolled(24);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef(null);

  const openMenu = (label) => {
    clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setActiveMenu(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white text-black  transition-all duration-300 ${
        scrolled
          ? 'bg-surface-base/80 bg-white text-black backdrop-blur-xl border-b border-white/[0.06] shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-app flex h-16 md:h-20 items-center justify-between px-4 md:px-0"
        onKeyDown={handleKeyDown}
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-black">
         <img src="/mlm_logo.png" className="h-10 md:h-16" alt="Apex MLM logo" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <li
              key={item.path}
              className="relative"
              onMouseEnter={() => item.mega && openMenu(item.label)}
              onMouseLeave={() => item.mega && scheduleClose()}
            >
              <NavLink
                to={item.path}
                onFocus={() => item.mega && openMenu(item.label)}
                aria-haspopup={item.mega ? 'true' : undefined}
                aria-expanded={item.mega ? activeMenu === item.label : undefined}
                className={({ isActive }) =>
                  `group relative inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-400' : 'text-black hover:text-black'
                  }`
                }
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 bg-orange-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>

              <AnimatePresence>
                {item.mega && activeMenu === item.label && (
                  <MegaMenu  menu={item.mega} onNavigate={() => setActiveMenu(null)} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-secondary px-5 py-2.5 text-sm">
            Contact
          </Link>
          <Link to="/demo" className="btn-primary px-5 py-2.5 text-sm">
            Book Free Demo
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          title="Open menu"
          className="flex h-12 w-12 md:h-11 md:w-11 items-center justify-center rounded-full glass-panel text-ink-100 lg:hidden"
        >
          <Menu className='text-black' size={20} />
        </button>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

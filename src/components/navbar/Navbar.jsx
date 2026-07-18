import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Search } from 'lucide-react';
import { primaryNav } from '@data/menuData';
import { useScrolled } from '@hooks/useScrolled';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

/**
 * Sticky enterprise navbar.
 * - Top info bar: contact details + social links, always dark navy.
 * - Main bar: white, stays white on scroll (adds shadow once scrolled).
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
    <header className="fixed inset-x-0 top-0 z-50" onKeyDown={handleKeyDown}>
      {/* Top info bar */}
      <div className="hidden lg:flex h-9 items-center justify-between bg-[#0B1A3A] px-6 text-xs text-white/85">
        <div className="flex items-center gap-6">
          <a href="tel:+919719830462" className="flex items-center gap-2 hover:text-white">
            <Phone size={13} className="text-orange-400" />
            +91 97198 30462
          </a>
          <a href="mailto:info@indiamlm.com" className="flex items-center gap-2 hover:text-white">
            <Mail size={13} className="text-orange-400" />
            info@indiamlm.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-orange-400" />
            Indore, Madhya Pradesh, India
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/70">Follow Us:</span>
          <a href="#" aria-label="Facebook" className="hover:text-orange-400"><Facebook size={14} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-orange-400"><Instagram size={14} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-400"><Linkedin size={14} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-orange-400"><Youtube size={14} /></a>
        </div>
      </div>

      {/* Main nav */}
    <nav
  className={`flex h-16 md:h-20 items-center justify-between w-full bg-white px-4 md:px-6 transition-shadow duration-300 ${
    scrolled ? 'shadow-card border-b border-black/[0.06]' : 'border-b border-black/[0.04]'
  }`}
  aria-label="Primary"
>
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-black">
          <img src="/mlm_logo.png" className="h-10 md:h-14" alt="India MLM logo" />
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
                  `group relative inline-flex items-center px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'
                  }`
                }
              >
                {item.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-px scale-x-0 bg-orange-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>

              <AnimatePresence>
                {item.mega && activeMenu === item.label && (
                  <MegaMenu menu={item.mega} onNavigate={() => setActiveMenu(null)} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
         
          <Link
            to="/demo"
            className="flex items-center gap-2 rounded-full bg-orange-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Book Free Demo
            <span aria-hidden="true" className='bg-white  text-black p-2 h-6 w-6 rounded-full  items-center justify-center flex'><span>→</span></span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          title="Open menu"
          className="flex h-12 w-12 md:h-11 md:w-11 items-center justify-center rounded-full border border-black/10 text-black lg:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
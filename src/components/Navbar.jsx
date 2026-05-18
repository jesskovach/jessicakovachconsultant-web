import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@lib/siteConfig';
import Button from '@components/primitives/Button';
import logo from '@assets/KCG-logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link
          to="/"
          className={styles.brand}
          onClick={() => setMobileOpen(false)}
          aria-label={siteConfig.brand.full}
        >
          <img src={logo} alt={siteConfig.brand.full} className={styles.brandLogo} />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button to={siteConfig.cta.to} variant="primary" size="sm">
            {siteConfig.cta.label}
          </Button>
        </div>

        <button
          className={styles.menuToggle}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barBot : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobilePanel}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className={styles.mobileList}>
              {siteConfig.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.linkActive : ''}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              to={siteConfig.cta.to}
              variant="primary"
              size="md"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.cta.label}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

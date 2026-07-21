import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#about" className={styles.logo}>bp</a>

        <div className={styles.right}>
          {/* Desktop links */}
          <ul className={styles.links}>
            <li><a href="#projects">projects</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#oss">open source</a></li>
            <li><a href="#writing">writing</a></li>
          </ul>

          <button className={styles.toggle} onClick={toggleTheme}>
            {theme === 'dark' ? 'light' : 'dark'}
          </button>

          {/* Hamburger button — mobile only */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#projects"   onClick={closeMenu}>projects</a>
          <a href="#oss"        onClick={closeMenu}>open source</a>
          <a href="#experience" onClick={closeMenu}>experience</a>
          <a href="#writing"    onClick={closeMenu}>writing</a>
        </div>
      )}
    </nav>
  )
}

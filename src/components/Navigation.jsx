import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Briefcase, BookOpen, Mail } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: Mail }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hao Hu
            </motion.div>
          </Link>
          
          <ul className="nav-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMenu}
            />
            <motion.nav
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, duration: 0.3 }}
            >
              <div className="mobile-nav-header">
                <h2>Hao Hu</h2>
              </div>
              <ul className="mobile-nav-links">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <motion.li
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * navItems.indexOf(navItems.find(item => item.path === path)) }}
                  >
                    <Link
                      to={path}
                      className={`mobile-nav-link ${location.pathname === path ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      <Icon size={20} />
                      <span>{label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

import PropTypes from 'prop-types'
import { useState } from 'react'

function Navbar({ sections, activeId, isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-purple-medium/20 bg-black/60 backdrop-blur-md"
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-widest text-purple-light">
          SHALVI
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:gap-8 md:flex" role="menubar">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              role="menuitem"
              className={
                'text-sm font-semibold tracking-wide transition-colors hover:text-purple-light whitespace-nowrap ' +
                (activeId === s.id ? 'text-pink-pale' : 'text-purple-light/80')
              }
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="rounded-full border border-purple-medium/30 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-purple-light shadow-sm transition hover:bg-white/10"
          >
            {isDark ? 'Dark' : 'Light'}
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1 p-1 md:hidden"
          >
            <span className={`h-0.5 w-5 bg-purple-light transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-5 bg-purple-light transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-purple-light transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute inset-x-0 top-full border-b border-purple-medium/20 bg-black/95 backdrop-blur-md transition-all md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="menubar"
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                className={
                  'text-sm font-semibold tracking-wide transition-colors hover:text-purple-light ' +
                  (activeId === s.id ? 'text-pink-pale' : 'text-purple-light/80')
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  activeId: PropTypes.string,
  isDark: PropTypes.bool,
  onToggleTheme: PropTypes.func,
}

export default Navbar



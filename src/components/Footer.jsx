import PropTypes from 'prop-types'

function Footer({ isDark }) {
  return (
    <footer className="mt-24 border-t border-purple-medium/20 bg-black/60 py-10 text-purple-light/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide">© {new Date().getFullYear()} Shalvi Singh</p>
          <p className="mt-1 text-xs">Jamshedpur • India</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="mailto:shalvi.singh0718@gmail.com"
            className="transition hover:text-pink-pale"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="tel:+919341573671"
            className="transition hover:text-pink-pale"
            aria-label="Phone"
          >
            Call
          </a>
          <a
            href="https://linkedin.com/in/shalvi-singh-b17968357"
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-pink-pale"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = { isDark: PropTypes.bool }

export default Footer



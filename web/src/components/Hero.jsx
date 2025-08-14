import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

function Hero({ isDark }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about-hero" ref={containerRef} className="relative h-screen w-full">
      <div className="absolute inset-0">
        {isVisible && (
          <iframe
            title="3D Mini Room"
            src="https://my.spline.design/miniroomartcopy-wWEzEFn1RyVyDRI26XImKZVB/"
            frameBorder="0"
            width="100%"
            height="100%"
            loading="lazy"
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32">
        <div className="mx-auto mb-24 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-wide text-pink-pale sm:text-5xl md:text-6xl">
            Shalvi Singh
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-purple-light/90 md:text-base">
            SAP APO Consultant | Telecom & Insurance Operations | Process Optimization
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#professional-summary"
              className="rounded-md bg-purple-dark px-4 py-2 text-sm font-semibold tracking-wide text-white shadow transition hover:bg-purple-medium"
            >
              Explore
            </a>
            <a
              href="#professional-experience"
              className="rounded-md border border-purple-light/40 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-purple-light backdrop-blur-md transition hover:bg-white/20"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = { isDark: PropTypes.bool }

export default Hero



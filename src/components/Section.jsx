import PropTypes from 'prop-types'

function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-16 md:py-24">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-purple-medium" />
        <h2 id={`${id}-title`} className="text-2xl font-extrabold tracking-wider text-pink-pale md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="text-sm leading-relaxed text-purple-light/95 md:text-base">
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section



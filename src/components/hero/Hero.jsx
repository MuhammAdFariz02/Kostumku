import { PropTypes } from 'prop-types'

function Hero({
  className = '',
  image = '',
  imageAlt = '',
  children,
}) {
  return (
    <section className={className !== ''
        ? `container ${className}`
        : 'container'
      }>
      <section className='row'>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8">
          {children}
        </div>
      </section>
    </section>
  )
}

Hero.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default Hero

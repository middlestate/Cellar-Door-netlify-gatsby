import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }) => {
  return (
    <div className="gallery-row">
      {gridItems.map(({ image }, keys) => {
        return (
          <div key={keys} className="gallery-column">
            <img
              src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
              alt="artists"
              alt="artist image"
            />
          </div>
        )
      })}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object, PropTypes.string])),
  }),
}

export default Gallery

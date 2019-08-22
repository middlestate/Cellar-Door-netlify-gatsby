import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }) => {
  return (
    <div className="gallery-row">
      {gridItems.map(({ image }, keys) => {
        return (
          <div key={keys} className="gallery-column">
            <img
              src={image}
              alt="artist image"
            />
          </div>
        );
      })}
    </div>
  )
}

Gallery.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  ),
}

export default Gallery
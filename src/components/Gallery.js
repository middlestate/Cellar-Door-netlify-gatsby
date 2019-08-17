import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }) => {
  return (
    <div className="gallery-row">
      {gridItems.map((gridItem, keys) => {
        return (
          <div key={keys} className="gallery-column">
            <img
              src={
                !!gridItem.image.childImageSharp
                  ? gridItem.image.childImageSharp.fluid.src
                  : gridItem.image
              }
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
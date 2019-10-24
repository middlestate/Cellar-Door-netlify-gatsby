import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.background_image}
        logo={data.logo}
        title={data.title}
        description={data.description}
        artist={{
          name: data.artist.name,
          image: data.arist.image,
          description: data.artist.description,
          website: data.artist.website,
          spotify: data.artist.spotify,
          tickets: data.artist.tickets,
        }}
        food={{
          title: data.food.title,
          description: data.food.description,
        }}
      />
    )
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

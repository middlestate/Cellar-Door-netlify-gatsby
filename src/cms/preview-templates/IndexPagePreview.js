import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title_image={data.title_image}
        events_button_title={data.events_button_title}
        title={data.title}
        description={data.description}
        artist_spotlight={data.artist_spotlight}
        artist_name={data.artist_name}
        artist_description={data.artist_description}
        spotify_playlist={data.spotify_playlist}
        food_and_drinks_title={data.food_and_drinks_title}
        food_and_drinks_description={data.food_and_drinks_description}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

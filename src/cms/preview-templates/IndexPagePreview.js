import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.background_image}
        image={data.image}
        events_button_title={data.events_button_title}
        title={data.title}
        description={data.description}
        artist_spotlight={data.artist_spotlight}
        artist_name={data.artist_name}
        artist_image={data.artist_image}
        artist_description={data.artist_description}
        tickets_url={data.tickets_url}
        artist_website={data.artist_website}
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

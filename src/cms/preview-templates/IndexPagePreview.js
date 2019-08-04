import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title_image={entry.getIn(['data','title_image'])}
        events_button_title={entry.getIn(['data','events_button_title'])}
        title={entry.getIn(['data','title'])}
        description={entry.getIn(['data.','description'])}
        artist_spotlight={entry.getIn(['data','artist_spotlight'])}
        artist_name={entry.getIn(['data','artist_name'])}
        artist_image={entry.getIn(['data','artist_image'])}
        artist_description={entry.getIn(['data','artist_description'])}
        spotify_playlist={entry.getIn(['data','spotify_playlist'])}
        food_and_drinks_title={entry.getIn(['data','food_and_drinks_title'])}
        food_and_drinks_description={entry.getIn(['data','food_and_drinks_description'])}
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

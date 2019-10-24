import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        background_image={data.background_image}
        title={data.title}
        description={data.description}
        community={{
          title: data.title,
          blurbs: data.community.blurbs,
        }}
        culture={{
          title: data.culture.title,
          blurbs: data.community.blurbs,
        }}
        craft={{
          title: data.craft.title,
          blurbs: data.craft.blurbs,
        }}
      />
    )
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview

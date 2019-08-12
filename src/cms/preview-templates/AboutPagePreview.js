import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        background_image={data.background_image}
        about_title={data.about_title}
        title={data.title}
        description={data.description}
        community_title={data.community_title}
        community_description_p1={data.community_description_p1}
        community_description_p2={data.community_description_p2}
        community_description_p3={data.community_description_p3}
        culture_title={data.culture_title}
        culture_description_p1={data.culture_description_p1}
        culture_description_p2={data.culture_description_p2}
        craft_title={data.craft_title}
        craft_description_p1={data.craft_description_p1}
        craft_description_p2={data.craft_description_p2}
        craft_description_p3={data.craft_description_p3}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview

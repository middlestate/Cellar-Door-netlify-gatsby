import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
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

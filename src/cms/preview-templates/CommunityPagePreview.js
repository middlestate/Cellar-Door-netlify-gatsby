import React from 'react'
import PropTypes from 'prop-types'
import { CommunityPageTemplate } from '../../templates/community-page'

const CommunityPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryImages = entry.getIn(['data', 'gallery', 'images'])
  const images = entryImages ? entryImages.toJS() : []

  if (data) {
    return (
      <CommunityPageTemplate
        background_image={data.background_image}
        title={data.title}
        menu={data.menu}
        gallery={{ images }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CommunityPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CommunityPagePreview

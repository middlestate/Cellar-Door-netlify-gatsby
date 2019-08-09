import React from 'react'
import PropTypes from 'prop-types'
import { FoodPageTemplate } from '../../templates/foodpage'

const FoodPagePreview = ({ entry,getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if(data) {
    return (
      <FoodPageTemplate
        pdf={entry.getIn(['data','pdf'])}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FoodPagePreview.PropTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FoodPagePreview
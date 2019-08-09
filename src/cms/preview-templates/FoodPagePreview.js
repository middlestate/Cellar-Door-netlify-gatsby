import React from 'react'
import PropTypes from 'prop-types'
import { FoodPageTemplate } from '../../templates/foodpage'

const FoodPagePreview = ({ entry,getAsset }) => {
  const data = entry.getIn(['data','menu']).toJS() || []

  return (
    <FoodPageTemplate 
      menu={{data}}
    />    
  )
}

FoodPagePreview.PropTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FoodPagePreview
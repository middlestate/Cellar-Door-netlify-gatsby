import React from 'react'
import PropTypes from 'prop-types'
import { FoodPageTemplate } from '../../templates/foodpage'

const FoodPagePreview = ({ entry,getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if(data) {
    return (
      <FoodPageTemplate 
        title={data.title}
        pdf_title={data.pdf_title}
        pdf_filename={data.pdf_filename}
        menu={data.menu}
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
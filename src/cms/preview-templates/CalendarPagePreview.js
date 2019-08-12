import React from 'react'
import PropTypes from 'prop-types'
import { CalendarPageTemplate } from '../../templates/calendar-page'

const CalendarPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CalendarPageTemplate
        background_image={data.background_image}
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CalendarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CalendarPagePreview

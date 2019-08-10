import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import '../components/calendar.sass'

import EventCards from '../components/EventCards'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const CalendarPageTemplate = ({
  title
}) => (
  <main style={{backgroundImage: `url('/static/img/main_background.png') + no-repeat center center fixed`}}>
    <div className="calendar-title">
      <h1 className="title">Calendar</h1>
    </div>
    <div className="events-container" id="events-container">
      <EventCards maxEvents={12} />
    </div>
  </main>
)

CalendarPageTemplate.propTypes = {
  title: PropTypes.string
}

const CalendarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CalendarPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

CalendarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CalendarPage

export const pageQuery = graphql`
  query CalendarPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "calendar-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

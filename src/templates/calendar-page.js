import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import '../components/calendar.sass'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const CalendarPageTemplate = ({
  title
}) => (
  <main>
    <div className="calendar-title">
      <h1 className="title">Calendar</h1>
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

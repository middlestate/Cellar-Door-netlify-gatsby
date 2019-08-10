import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import EventCards from '../components/EventCards'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const CalendarPageTemplate = ({
  title
}) => (
  <main
    style={{
      backgroundImage: `url('../img/main_background.png') no-repeat center center fixed`
    }}>
    <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      zIndex: -10
    }}>
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundImage: `url("../img/main_background.png")`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        zIndex: -5
      }}
    />
    </div>
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

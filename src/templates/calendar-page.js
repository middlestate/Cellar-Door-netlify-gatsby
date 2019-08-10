import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import EventCards from '../components/EventCards'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const CalendarPageTemplate = ({
  background_image,
  title
}) => (
  <main
    style={{
      backgroundImage: `url(${!!background_image.childImageSharp ? background_image.childImageSharp.fluid.src : background_image}) no-repeat center center fixed`
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
        backgroundImage: `url(${!!background_image.childImageSharp ? background_image.childImageSharp.fluid.src : background_image})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        zIndex: -5
      }}
    />
    </div>
    <div className="calendar-title">
      <h1 className="title">{title}</h1>
    </div>
    <div className="events-container" id="events-container">
      <EventCards maxEvents={12} />
    </div>
  </main>
)

CalendarPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
}

const CalendarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CalendarPageTemplate
        background_image={frontmatter.background_image}
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
        background_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }    
        }
        title
      }
    }
  }
`

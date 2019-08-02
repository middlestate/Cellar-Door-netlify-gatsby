import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import '../components/about.sass'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const AboutPageTemplate = ({
  about_title,
  title,
  description,
  community_title,
  community_description_p1,
  community_description_p2,
  community_description_p3,
  culture_title,
  culture_description_p1,
  culture_description_p2,
  craft_title,
  craft_description_p1,
  craft_description_p2,
  craft_description_p3
}) => (
  <main>
    <h1 className="about-title">{about_title}</h1>
    <div className="about-intro">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>

    <div className="container">
      <div className="row">
        <div className="item">
          <div className="dot-square">
            <div className="row">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>              
            </div>
            <div className="row">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>              
            </div>
            <div className="row">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>              
            </div>
          </div>
        </div>
        <div className="item">
          <h2 className="title">{community_title}</h2>
          <div className="description">
            <p>{community_description_p1}</p>
            <p>{community_description_p2}</p>
            <p>{community_description_p3}</p>          
          </div>
        </div>
      </div>
      <div className="row middle-row">
        <div className="item">
          <h2 className="title">{culture_title}</h2>
          <div className="description">
            <p>{culture_description_p1}</p>
            <p>{culture_description_p2}</p>
          </div>
        </div>
        <div className="item">
          <div className="dot-square">
              <div className="row">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>              
              </div>
              <div className="row">
                <div className="dot invisible-dot"></div>
                <div className="dot"></div>
                <div className="dot invisible-dot"></div>              
              </div>
              <div className="row">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>              
              </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <div className="circle">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="item">
          <h2 className="title">{craft_title}</h2>
          <div className="description">
            <p>{craft_description_p1}</p>
            <p>{craft_description_p2}</p>
            <p>{craft_description_p3}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
)

AboutPageTemplate.propTypes = {
  about_title: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  community_title: PropTypes.string,
  community_description_p1: PropTypes.string,
  community_description_p2: PropTypes.string,
  community_description_p3: PropTypes.string,
  culture_title: PropTypes.string,
  culture_description_p1: PropTypes.string,
  culture_description_p2: PropTypes.string,
  craft_title: PropTypes.string,
  craft_description_p1: PropTypes.string,
  craft_description_p2: PropTypes.string,
  craft_description_p3: PropTypes.string
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        about_title={frontmatter.about_title}
        title={frontmatter.title}
        description={frontmatter.description}
        community_title={frontmatter.community_title}
        community_description_p1={frontmatter.community_description_p1}
        community_description_p2={frontmatter.community_description_p2}
        community_description_p3={frontmatter.community_description_p3}
        culture_title={frontmatter.culture_title}
        culture_description_p1={frontmatter.culture_description_p1}
        culture_description_p2={frontmatter.culture_description_p2}
        craft_title={frontmatter.craft_title}
        craft_description_p1={frontmatter.craft_description_p1}
        craft_description_p2={frontmatter.craft_description_p2}
        craft_description_p3={frontmatter.craft_description_p3}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        about_title
        title
        description
        community_title
        community_description_p1
        community_description_p2
        community_description_p3
        culture_title
        culture_description_p1
        culture_description_p2
        craft_title
        craft_description_p1
        craft_description_p2
        craft_description_p3
      }
    }
  }
`

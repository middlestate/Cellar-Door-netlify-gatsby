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
  community_description_p3
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
          <h2 className="title">Culture</h2>
          <div className="description">
            <p>By partnering with nonprofits like the Sound N Vision
              Foundation and The Source and other community groups
              we are trying to bring rich cultural experiences for
              all ages to our community.
            </p>
            <p>We believe live music and performance art of all kinds
              are transformative and essential to creating an identity
              for your city.
            </p>          
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
          <h2 className="title">Craft</h2>
          <div className="description">
            <p>Whether it's one of our signature cocktails, crazy food
              concoctions or a hard-to-find bottle of wine you can bet
              that what you get has been created with intention.
            </p>
            <p>We challenged ourself with our new menu to answer the 
              question ... "How do we make a menu that is as creative
              as we are?"
            </p>
            <p>The outcome is a vibrant, always changing roster of food
              and drink options designed to be iterated on and improved.
            </p>          
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
  community_description_p3: PropTypes.string
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
      }
    }
  }
`

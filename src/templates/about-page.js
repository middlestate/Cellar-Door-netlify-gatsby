import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import '../components/about.sass'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const AboutPageTemplate = ({ background_image, title, description, community, culture, craft }) => (
  <main
    style={{
      backgroundImage: `url(${
        !!background_image.childImageSharp ? background_image.childImageSharp.fluid.src : background_image
      }) no-repeat center center fixed`,
    }}>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        zIndex: -10,
      }}>
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${
            !!background_image.childImageSharp ? background_image.childImageSharp.fluid.src : background_image
          })`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          zIndex: -5,
        }}
      />
    </div>
    <h1 className="about-title">About</h1>
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
          <h2 className="title">{community.title}</h2>
          <div className="description">
            {community.blurbs.map(({ text }, i) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="row middle-row">
      <div className="item">
        <h2 className="title">{culture.title}</h2>
        <div className="description">
          {culture.blurbs.map(({ text }, i) => (
            <p>{text}</p>
          ))}
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
        <h2 className="title">{craft.title}</h2>
        <div className="description">
          {craft.blurbs.map(({ text }, i) => (
            <p>{text}</p>
          ))}
        </div>
      </div>
    </div>
  </main>
)

AboutPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  community: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
      })
    ),
  }),
  culture: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
      })
    ),
  }),
  craft: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
      })
    ),
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        background_image={frontmatter.background_image}
        title={frontmatter.title}
        description={frontmatter.description}
        community={frontmatter.community}
        culture={frontmatter.culture}
        craft={frontmatter.craft}
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
        background_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
        community {
          title
          blurbs {
            text
          }
        }
        culture {
          title
          blurbs {
            text
          }
        }
        craft {
          title
          blurbs {
            text
          }
        }
      }
    }
  }
`

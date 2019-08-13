import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


// Note: Link component is only used for internal links. External links use <a></a>

import '../components/community.sass'

import Layout from '../components/Layout'

export const CommunityPageTemplate = ({
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
    <h1 className="community-title">{title}</h1>
  </main>
)

CommunityPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
}

const CommunityPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CommunityPageTemplate
        background_image={frontmatter.background_image}
        title={frontmatter.title}
      />
    </Layout>
  )
}

CommunityPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CommunityPage

export const pageQuery = graphql`
  query CommunityPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "community-page" } }) {
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
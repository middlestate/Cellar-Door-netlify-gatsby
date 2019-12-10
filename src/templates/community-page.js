import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Note: Link component is only used for internal links. External links use <a></a>

import '../components/community.sass'
import Layout from '../components/Layout'
import PDFrender from '../components/PDFrender'

export const CommunityPageTemplate = ({ gallery, background_image, title, pdf_title, pdf_filename, menu, section_title }) => (
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
          backgroundPosition: 'center',
          zIndex: -5,
        }}
      />
    </div>
    <h1 className="community-title">{title}</h1>
    <h2 className="pdf-title">{pdf_title}</h2>
    <div className="pdf-container">
      <PDFrender pdf={menu} pdf_filename={pdf_filename} />    
    </div>
    <h2 className="gallery-title">{section_title}</h2>
    <div className="gallery-row">
      {gallery.map(({ image }, keys) => {
        return (
          <div key={keys} className="gallery-column">
            <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="artist" />
          </div>
        )
      })}
    </div>
  </main>
)

const CommunityPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <CommunityPageTemplate
        background_image={frontmatter.background_image}
        title={frontmatter.title}
        pdf_filename={frontmatter.pdf_filename}
        pdf_title={frontmatter.pdf_title}
        menu={frontmatter.menu.publicURL}
        section_title={frontmatter.section_title}
        gallery={frontmatter.gallery.images}
      />
    </Layout>
  )
}

CommunityPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  pdf_title: PropTypes.string,
  pdf_filename: PropTypes.string,
  menu: PropTypes.string,
  section_title: PropTypes.string,
  gallery: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object, PropTypes.string])),
  }),
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
        pdf_title
        pdf_filename
        menu {
          publicURL
        }
        section_title
        gallery {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

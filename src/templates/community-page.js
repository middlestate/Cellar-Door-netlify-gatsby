import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Note: Link component is only used for internal links. External links use <a></a>

import '../components/community.sass'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import PDFrender from '../components/PDFrender'

export const CommunityPageTemplate = ({ background_image, title, pdf_title, pdf_filename, menu, section_title, gallery }) => (
  <main
    style={{
      backgroundImage: `url(${background_image}) no-repeat center center fixed`,
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
          backgroundImage: `url(${background_image})`,
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
    <Gallery gridItems={gallery.images} />
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
        menu={frontmatter.menu}
        section_title={frontmatter.section_title}
        gallery={frontmatter.gallery}
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
    images: PropTypes.array,
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
        background_image
        title
        pdf_title
        pdf_filename
        menu
        section_title
        gallery {
          images {
            image
          }
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import PDFrender from '../components/PDFrender'

export const FoodPageTemplate = ({ title, pdf_title, pdf_filename, menu }) => (
  <main
    style={{
      backgroundImage: `url('../img/main_background.png') no-repeat center center fixed`,
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
          backgroundImage: `url("../img/main_background.png")`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -5,
        }}
      />
    </div>
    <h1 className="food-title">{title}</h1>
    <h2 className="pdf-title">{pdf_title}</h2>
    <div className="pdf-container">
      <PDFrender pdf={menu} pdf_filename={pdf_filename} />    
    </div>
  </main>
)

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <FoodPageTemplate 
        title={frontmatter.title}
        pdf_title={frontmatter.pdf_title}
        pdf_filename={frontmatter.pdf_filename}
        menu={frontmatter.menu}
      />
    </Layout>
  )
}

FoodPageTemplate.propTypes = {
  title: PropTypes.string,
  pdf_title: PropTypes.string,
  pdf_filename: PropTypes.string,
  menu: PropTypes.string
}

FoodPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FoodPage

export const pageQuery = graphql`
  query FoodPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "foodpage" } }) {
      frontmatter {
        title
        pdf_title
        pdf_filename
        menu
      }
    }
  }
`

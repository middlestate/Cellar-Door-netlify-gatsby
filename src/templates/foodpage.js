import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export const FoodPageTemplate = ({
  pdf
}) => (
  <embed src={pdf} title="menu" style={{width:"100%", height:1500}} />
)

FoodPageTemplate.propTypes = {
  pdf: PropTypes.string
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FoodPageTemplate
        pdf={frontmatter.pdf}
      />
    </Layout>
  )
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        pdf
      }
    }
  }
`
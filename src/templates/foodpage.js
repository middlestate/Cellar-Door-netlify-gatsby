import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const FoodPageTemplate = ({ pdf }) => (
  <main>
    <embed src={pdf} title="menu" style={{ width: '100%', height: 1024 }} />
  </main>
)

FoodPageTemplate.propTypes = {
  pdf: PropTypes.string,
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('PDF:', frontmatter.pdf)
  return (
    <Layout>
      <FoodPageTemplate pdf={frontmatter.pdf} />
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

// export const pageQuery = graphql`
//   query FoodPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         pdf {
//           file
//         }
//       }
//     }
//   }
// `
// export default FoodPageTemplate

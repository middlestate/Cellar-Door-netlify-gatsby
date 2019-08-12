import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const FoodPageTemplate = ({ menu }) => (
  <main>
    <embed src={menu} title="menu" style={{ width: '100%', height: 1024 }} />
  </main>
)

FoodPageTemplate.propTypes = {
  menu: PropTypes.string,
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('PDF:', frontmatter)
  return (
    <Layout>
      <FoodPageTemplate menu={frontmatter.menu.publicURL} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "foodpage" } }) {
      frontmatter {
        menu {
          publicURL
        }
      }
    }
  }
`

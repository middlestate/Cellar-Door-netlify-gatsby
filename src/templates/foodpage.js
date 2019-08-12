import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const FoodPageTemplate = ({ menu }) => (
  <div
    style={{
      positon: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(../img/main_background.png)`,
    }}
  >
    <main>
      <embed
        src={menu}
        title="menu"
        style={{ width: '100%', height: 850, marginTop: 10 }}
      />
    </main>
  </div>
)

FoodPageTemplate.propTypes = {
  menu: PropTypes.string,
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
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

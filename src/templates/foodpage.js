import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export const FoodPageTemplate = ({
  menu
}) => (
  <main style={{backgroundImage: `url('/static/img/main_background.png') + no-repeat center center fixed`}}>
    <embed src={menu} title="menu" style={{width:"100%", height:1500}} />  
  </main>
)

FoodPageTemplate.propTypes = {
  menu: PropTypes.string
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FoodPageTemplate
        menu={frontmatter.menu}
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
        menu
      }
    }
  }
`
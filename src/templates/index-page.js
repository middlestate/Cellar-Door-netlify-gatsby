import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  description,
  events_button_title
}) => (
  <main>
    <div className="title-container">
      <img src="img/logo.png" alt="cellar door" />
    </div>

    <div className="upcoming-events">
      <div className="header">
        <h3>{events_button_title}</h3>
        <Link to="#">
          <button>All Events</button>
        </Link>
      </div>
      <div id="loading"></div>
      <div className="events-container" id="events-container"></div>
    </div>

    <div className="about-us">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <Link to="#">
        <button>About</button>
      </Link>    
    </div>

    <hr/>

    <div className="music-container">
      <div className="artist-container">
        <h2 className="title">Artist Spotlight</h2>
        <img src="img/truxtonmile.jpg" alt="artists" />
        <h2 className="artist-name">Truxton Mile</h2>
        <h4 className="description">Friday, July 19, 2019 @ Cellar Door</h4>
        <a href="https://www.snvfoundation.org/details.php?id=1388">
          <button>Buy Tickets</button>
        </a>
        <a href="https://www.truxtonmile.com/">
          <button>Website</button>
        </a>
      </div>
      <div className="spotify-container">
        <iframe src="https://open.spotify.com/embed/artist/1o2oLRSKlPBVWKTQjfpNH5" title="playlist"  width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <hr/>

    <div className="food-and-drinks">
      <div className="header">
        <h3>Food & Drinks</h3>
        <Link to="#">
          <button>Menus</button>
        </Link>
      </div>
      <p className="description">{description}</p>      
    </div>
  </main>
)

IndexPageTemplate.propTypes = {
  events_button_title: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        events_button_title={frontmatter.events_button_title}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        events_button_title
        title
        description
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  description,
  events_button_title,
  artist_spotlight,
  artist_name,
  artist_image,
  artist_description,
  spotify_playlist,
  food_and_drinks_title,
  food_and_drinks_description
}) => (
  <main>
    <div className="title-container">
      <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="cellar door" />
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
        <h2 className="title">{artist_spotlight}</h2>
        <img src={artist_image} alt="artists" />
        <h2 className="artist-name">{artist_name}</h2>
        <h4 className="description">{artist_description}</h4>
        <a href="https://www.snvfoundation.org/details.php?id=1388">
          <button>Buy Tickets</button>
        </a>
        <a href="https://www.truxtonmile.com/">
          <button>Website</button>
        </a>
      </div>
      <div className="spotify-container">
        <iframe src={spotify_playlist} title="playlist"  width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <hr/>

    <div className="food-and-drinks">
      <div className="header">
        <h3>{food_and_drinks_title}</h3>
        <Link to="#">
          <button>Menus</button>
        </Link>
      </div>
      <p className="description">{food_and_drinks_description}</p>      
    </div>
  </main>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  events_button_title: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  artist_spotlight: PropTypes.string,
  artist_name: PropTypes.string,
  artist_image: PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
  artist_description: PropTypes.string,
  spotify_playlist: PropTypes.string,
  food_and_drinks_title: PropTypes.string,
  food_and_drinks_description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        events_button_title={frontmatter.events_button_title}
        title={frontmatter.title}
        description={frontmatter.description}
        artist_spotlight={frontmatter.artist_spotlight}
        artist_name={frontmatter.artist_name}
        artist_image={frontmatter.artist_image}
        artist_description={frontmatter.artist_description}
        spotify_playlist={frontmatter.spotify_playlist}
        food_and_drinks_title={frontmatter.food_and_drinks_title}
        food_and_drinks_description={frontmatter.food_and_drinks_description}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        events_button_title
        title
        description
        artist_spotlight
        artist_name
        artist_image
        artist_description
        spotify_playlist
        food_and_drinks_title
        food_and_drinks_description
      }
    }
  }
`

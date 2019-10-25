import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import EventCards from '../components/EventCards'

// Note: Link component is only used for internal links. External links use <a></a>

import Layout from '../components/Layout'

export const IndexPageTemplate = ({ background_image, logo, title, description, artist, food }) => (
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
          zIndex: -5,
        }}
      />
    </div>
    <div className="title-container">
      <img src={!!logo.childImageSharp ? logo.childImageSharp.fluid.src : logo} alt="cellar door" />
    </div>

    <div className="upcoming-events">
      <div className="header">
        <h3>upcoming events</h3>
        <Link to="/calendar">
          <button>All Events</button>
        </Link>
      </div>
      <div id="loading"></div>
      <div className="events-container" id="events-container">
        <EventCards maxEvents={3} />
      </div>
    </div>

    <div className="about-us">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>

    <hr />

    <div className="music-container">
      <div className="artist-container">
        <h2 className="title">Artist Spotlight</h2>
        <img
          src={!!artist.image.childImageSharp ? artist.image.childImageSharp.fluid.src : artist.image}
          alt="artists"
        />
        <h2 className="artist-name">{artist.name}</h2>
        <h4 className="description">{artist.description}</h4>
        {/**
          <a href={artist.tickets}>
            <button>Buy Tickets</button>
          </a>        
        */}
        <a href={artist.website}>
          <button>Website</button>
        </a>
      </div>
      <div className="spotify-container">
        <iframe
          src={artist.spotify}
          title="playlist"
          width="100%"
          height="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"></iframe>
      </div>
    </div>

    <hr />

    <div className="food-and-drinks">
      <div className="header">
        <h3>{food.title}</h3>
        <Link to="/foodpage">
          <button>Menus</button>
        </Link>
      </div>
      <p className="description">{food.description}</p>
    </div>
  </main>
)

IndexPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  artist: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
    website: PropTypes.string,
    spotify: PropTypes.string,
    // tickets: PropTypes.string,
  }),
  food: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        background_image={frontmatter.background_image}
        logo={frontmatter.logo}
        title={frontmatter.title}
        description={frontmatter.description}
        artist={frontmatter.artist}
        food={frontmatter.food}
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
        background_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
        artist {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          website
          spotify
        }
        food {
          title
          description
        }
      }
    }
  }
`

import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="contact">
            <h4>Cellar Door Help Line</h4>
            <h5>559-239-4004</h5>
          </div>
          <Link to="/">
            <img src="img/footer_logo.png" alt="cellar door"/>
          </Link>
          <div className="social-media">
            <div className="social-icon-container">
              <a href="https://www.facebook.com/cellardoor101/" title="https://www.facebook.com/cellardoor101/" target="__blank">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />              
              </a>
            </div>
            <div className="social-icon-container">
              <a href="https://twitter.com/cellardoor101?lang=en" title="https://twitter.com/cellardoor101?lang=en" target="__blank">
                <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />              
              </a>
            </div>
            <div className="social-icon-container">
              <a href="https://www.youtube.com/watch?v=1pqvY9Oh0tQ" title="https://www.youtube.com/watch?v=1pqvY9Oh0tQ" target="__blank">
                <FontAwesomeIcon icon={['fab', 'youtube']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />              
              </a>
            </div>
            <div className="social-icon-container">
              <a href="http://instagram.com/cellardoor559" title="http://instagram.com/cellardoor559" target="__blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />              
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

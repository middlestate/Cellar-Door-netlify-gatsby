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
          <Link to="#">
            <img src="img/footer_logo.png" alt="cellar door"/>
          </Link>
          <div className="social-media">
            <div className="social-icon-container">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />
            </div>
            <div className="social-icon-container">
              <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />
            </div>
            <div className="social-icon-container">
            <FontAwesomeIcon icon={['fab', 'youtube']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />
            </div>
            <div className="social-icon-container">
              <FontAwesomeIcon icon={['fab', 'instagram']} style={{color: "#ffffff", display: "inline-block", width: "100%", position: "relative", top: "8px" }} size="lg" />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

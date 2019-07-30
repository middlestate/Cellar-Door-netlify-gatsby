import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,  faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
              <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}} size="lg" />
            </div>
            <div className="social-icon-container">
              <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff"}} size="lg" />
            </div>
            <div className="social-icon-container">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff"}} size="lg" />
            </div>
            <div className="social-icon-container">
              <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}} size="lg" />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

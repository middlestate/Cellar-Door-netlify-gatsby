import React from 'react'
import { Link } from 'gatsby'

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
              <div>Fb</div>
            </div>
            <div className="social-icon-container">
              <div>Tw</div>
            </div>
            <div className="social-icon-container">
              <div>Yt</div>
            </div>
            <div className="social-icon-container">
              <div>Ig</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

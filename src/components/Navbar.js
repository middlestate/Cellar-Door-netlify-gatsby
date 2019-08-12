import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <header>
      <div className="nav">
        <label htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <div className="menu">
          <Link to="/community" className="nav-item community">Community</Link>
          <Link to="/about" className="nav-item about-us">About Us</Link>
          <Link to="/" className="cellar-door-icon"><img src="img/dooricon.png" alt="door_icon" /></Link>
          <Link to="/calendar" className="nav-item calendar">Calendar</Link>
          <Link to="/foodpage" className="nav-item fd">Food & Drink</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

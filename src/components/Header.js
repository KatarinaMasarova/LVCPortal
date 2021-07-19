import React from 'react';
import { NavLink } from 'react-router-dom';
 
class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav container-fluid">
            <li className="nav-item"><NavLink to="/" exact className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/registration" className="nav-link">Registration</NavLink></li>
            <li className="nav-item"><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
            <li className="nav-item"><NavLink to="/help" className="nav-link">Help</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}
 
export default Header;
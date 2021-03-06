import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from './Slider';
 
class Header extends React.Component {
  render() {
    return (
        <div>
            <Slider></Slider>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav container-fluid">
                            <li className="nav-item"><NavLink to="/" exact className="nav-link">Home</NavLink></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All courses
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><NavLink to="/courses/mern" className="dropdown-item">MERN</NavLink></li>
                                    <li><NavLink to="/courses/mean" className="dropdown-item">MEAN</NavLink></li>
                                    <li><NavLink to="/courses/mevn" className="dropdown-item">MEVN</NavLink></li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#" className="dropdown-item">Node.js &raquo;</a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/courses/nodejs" className="dropdown-item">Node.js</NavLink></li>  
                                            <li><NavLink to="/courses/expressjs" className="dropdown-item">Express.js</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><NavLink to="/registration" className="nav-link">Registration</NavLink></li>
                            <li className="nav-item"><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
                            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                            <li className="nav-item"><NavLink to="/help" className="nav-link">Help</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
 
export default Header;
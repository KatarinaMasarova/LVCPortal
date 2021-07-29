import React from 'react';
import { NavLink } from 'react-router-dom';
 
class Help extends React.Component {
  render() {
    return (
      <div className="container-90 main">
        <h3>In the case you need help:</h3>
        <br />
        <p>Contact us via contact form <NavLink to="/contact">HERE</NavLink></p>
        <p>or</p>
        <p>contact our 24/7 support <a href="tel:0394723764238">0394723764238</a>.</p>
      </div>
    )
  }
}
 
export default Help;
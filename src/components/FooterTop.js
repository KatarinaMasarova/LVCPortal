import React from 'react';
import { NavLink } from 'react-router-dom';
 
class FooterTop extends React.Component {
  render() {
    return (
      <div className="footer-top">
          <div className="container-90">
                <div className="flex footer-top-flex">
                        <h4>Popular courses: &nbsp;</h4>
                        <NavLink to="/courses/mern" className="btn btn-primary">MERN</NavLink> &nbsp;
                        <NavLink to="/courses/mean" className="btn btn-primary">MEAN</NavLink> &nbsp;
                        <NavLink to="/courses/nodejs" className="btn btn-primary">Node.js</NavLink> &nbsp;
                </div>
          </div>
      </div>
    )
  }
}
 
export default FooterTop;
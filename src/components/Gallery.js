import React from 'react';
import $ from 'jquery';
 
class Gallery extends React.Component {

  componentDidMount() {
    $('.gall-img').on("click", function() {
      $('.overlay').toggle();
      let clonedImg = $(this).clone();
      clonedImg.css({"position": "absolute", "top": "25vh", "left": "calc(50% - 25vw)", "width": "50vw"});
      clonedImg.appendTo($('.overlay'));
    });

    $('.overlay').on("click", function() {
      $(this).children().remove();
      $(this).toggle();
    });
  }

  render() {
    return (
      <div className="container-90 main">
        <h1 className="text-center">Gallery</h1>

        <div className="overlay"></div>

        <div className="gallery-wrapper flex">
          <img src={process.env.PUBLIC_URL + '/images/gallery/g1.jpg'} className="gall-img" alt="..." />
          <img src={process.env.PUBLIC_URL + '/images/gallery/g2.jpg'} className="gall-img" alt="..." />
          <img src={process.env.PUBLIC_URL + '/images/gallery/g3.jpg'} className="gall-img" alt="..." />
          <img src={process.env.PUBLIC_URL + '/images/gallery/g4.jpg'} className="gall-img" alt="..." />
          <img src={process.env.PUBLIC_URL + '/images/gallery/g5.jpg'} className="gall-img" alt="..." />
          <img src={process.env.PUBLIC_URL + '/images/gallery/g6.jpg'} className="gall-img" alt="..." />
        </div>
      </div>
    )
  }
}
 
export default Gallery;
import React from 'react';
 
class Slider extends React.Component {
  render() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={process.env.PUBLIC_URL + '/images/img1.jpeg'} className="d-block w-100 slider-image" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={process.env.PUBLIC_URL + '/images/img2.jpg'} className="d-block w-100 slider-image" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={process.env.PUBLIC_URL + '/images/img3.jpeg'} className="d-block w-100 slider-image" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
  }
}
 
export default Slider;
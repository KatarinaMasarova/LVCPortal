import React from 'react';
 
class CourseExpress extends React.Component {
  render() {
    return (
      <div className="container-90 main">
        <h3 className="course-h3">About ExpressJS Course</h3>
        <div className="row">
          <div className="col-12 col-md-4">
            <img className="home-image" src={process.env.PUBLIC_URL + '/images/express.png'} alt="" />
          </div>
          <p className="course-text col-12 col-md-8">
            Cheesecake topping tart tiramisu candy canes cupcake tart powder. Pie candy chupa chups cupcake tiramisu marshmallow lollipop. Tiramisu caramels danish tart marzipan halvah jelly beans. Cotton candy sweet roll chupa chups gummi bears apple pie cake jujubes sugar plum. Sweet chupa chups gingerbread croissant. Powder cupcake donut sesame snaps cake. Dessert tootsie roll bonbon. Chupa chups cheesecake powder carrot cake gummies macaroon. Cheesecake chupa chups pudding. Pastry pastry biscuit. Sugar plum soufflé brownie carrot cake dragée liquorice. Topping chocolate powder dessert. Oat cake macaroon halvah.
          </p>
        </div>
      </div>
    )
  }
}
 
export default CourseExpress;
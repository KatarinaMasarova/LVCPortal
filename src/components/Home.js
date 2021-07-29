import React from 'react';
 
class Home extends React.Component {
  render() {
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="container-90">  
                  <h1 className="text-center">Welcome to our Live Virtual Class</h1>
                  <div className="row justify-content-between">
                      <div className="col-12 col-lg-4">
                        <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" className="home-image" />
                      </div>
                      <article className="col-12 col-lg-8">
                        <p>A Live Virtual Classroom is a platform for delivering a trainer-led, interactive course in an online environment. ... Advantages of LVC training over traditional class-based training include: Flexibility of allowing globally distributed teams to access training.</p>
                        <p>Donut sweet roll candy sugar plum bonbon. Candy candy jelly. Macaroon pastry chocolate cake. Marzipan ice cream jelly-o icing jelly-o powder toffee fruitcake pastry. Liquorice jelly beans wafer. Bear claw jujubes toffee carrot cake biscuit marzipan. Chocolate cake candy canes gingerbread marshmallow donut tootsie roll oat cake marzipan. Donut pie sesame snaps sweet muffin icing. Chocolate chocolate pudding macaroon apple pie danish tart wafer. Chupa chups liquorice marzipan macaroon sugar plum topping tootsie roll danish. Biscuit jelly beans muffin jelly beans. Lollipop danish chocolate. Jelly-o donut marzipan lemon drops. Fruitcake tiramisu sesame snaps jelly beans jujubes cake gummies chupa chups jelly beans.</p>
                        {/* <p>Marshmallow icing dragée jujubes cupcake chocolate bar marzipan bonbon. Tootsie roll jelly beans topping gummi bears donut cheesecake dessert chocolate bar fruitcake. Bear claw cupcake jujubes sesame snaps bear claw. Toffee chocolate bar ice cream tart. Candy canes danish apple pie sweet roll croissant chocolate dessert cupcake jelly beans. Cake pie sugar plum soufflé jelly-o. Oat cake lollipop cake cookie dragée toffee jelly beans chocolate cheesecake. Carrot cake marshmallow powder powder marzipan pie chocolate ice cream. Soufflé chocolate oat cake. Lollipop muffin icing cotton candy dragée cotton candy cupcake. Marshmallow oat cake jujubes donut cheesecake. Jelly bonbon pudding sesame snaps jelly beans ice cream chocolate cake.</p> */}
                      </article>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
 
export default Home;
import React from 'react';
 
class Home extends React.Component {
  render() {
    const { params } = this.props.match
    return (
        <div className="main">
            <div className="container-fluid">
                <h1 className="text-center">Welcome to our Live Virtual Portal</h1>
            </div>
        </div>
    )
  }
}
 
export default Home;
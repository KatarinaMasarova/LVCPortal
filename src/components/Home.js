import React from 'react';
 
class Home extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Home</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
 
export default Home;
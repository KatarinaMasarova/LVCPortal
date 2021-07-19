import React from 'react';
 
class Registration extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Registration</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
 
export default Registration;
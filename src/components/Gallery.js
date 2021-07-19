import React from 'react';
 
class Gallery extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Gallery</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
 
export default Gallery;
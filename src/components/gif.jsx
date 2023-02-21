/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.webp`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;

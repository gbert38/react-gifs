/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = `https://giphy.com/gifs/${this.props.id}`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;

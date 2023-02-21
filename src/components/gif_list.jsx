/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render () {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} />;
        })}
      </div>
    );
  }
}

export default GifList;

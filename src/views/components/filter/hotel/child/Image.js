import React, { Component } from 'react';
import './Image.scss';
import { LIST_IMAGE } from './mock.js';

class Image extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
    this.LIST_IMAGE = LIST_IMAGE
  }

  render() {
    let { listImage } = this.props
    return (
      <div className="list-image">
        <div className="list-image-big">
          <img src={listImage.mainImages[0].imageItemProps.url} alt=""/>
        </div>
        <div className="list-image-item">
          {listImage.mainImages.slice(1,listImage.mainImages.length).map((item, index) =>
            <img src={item.imageItemProps.url} key={index} alt=""/>
          )}
        </div>
      </div>
    );
  }
}

export default Image;

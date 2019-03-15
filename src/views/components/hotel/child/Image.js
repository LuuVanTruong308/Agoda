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
    return (
      <div className="list-image">
        <div className="list-image-big">
          <img src={this.LIST_IMAGE[0].imageItemProps.url} />
        </div>
        <div className="list-image-item">
          {this.LIST_IMAGE.slice(1,this.LIST_IMAGE.length).map(item =>
            <img src={item.imageItemProps.url}/>
          )}
        </div>
      </div>
    );
  }
}

export default Image;

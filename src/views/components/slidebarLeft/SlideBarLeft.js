import React, { Component } from 'react';
import './SlideBarLeft.scss';
import { LIST } from './mock.js';
import Map from '../../../../src/components/map'

class SlideBarLeft extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="sideBar-map">
          <Map></Map>
        </div>
        <div>
          {this.LIST.map((item, index) =>
            <div className="sideBar-list" key={index}>
              <img className="sideBar-list-img" src={item.img} alt=""/>
              <div className="sideBar-list-text">
                <p className="sideBar-list-text-item">{item.name}</p>
                <p>{item.number} nơi ở có phòng</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.LIST = LIST
  }
}

export default SlideBarLeft;


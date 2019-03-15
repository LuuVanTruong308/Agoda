import React, { Component } from 'react';
import './Hotel.scss';
import Image from './child/Image.js';
import HotelItemModal from './child/HotelItemModal.js';
import HotelPrice from './child/HotelPrice.js';


class Hotel extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="hotel">
        <div className="hotel-noti">
          quảng cáo
        </div>
        <div className="hotel-item">
          <Image></Image>
          <HotelItemModal></HotelItemModal>
          <HotelPrice></HotelPrice>
      </div>
      </div>
    );
  }
}

export default Hotel;


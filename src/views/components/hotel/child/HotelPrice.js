import React, { Component } from 'react';
import './HotelPrice.scss';

class HotelPrice extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="hotel-price">
        <div className="hotel-price-review">
          <div className="hotel-price-review-text">
            <p className="text-review">Trên cả tuyệt vời</p>
            <p className="number-review">845 nhận xét</p>
          </div>
          <div className="hotel-price-review-point">
            <p>8,5</p>
          </div>
        </div>
        <div className="hotel-price-content">

        </div>
      </div>
    );
  }
}

export default HotelPrice;

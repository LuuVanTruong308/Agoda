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
    let { hotelModal } = this.props
    return (
      <div className="hotel">
        <div className="hotel--noti">
          <div className="hotel--noti--mes">
            <span>gợi ý cho bạn</span>
          </div>
        </div>
        <div className="hotel--item">
          <Image listImage={hotelModal.galleryContainerProps} />
          <HotelItemModal hotelModal={hotelModal} />
          <HotelPrice hotelModal={hotelModal}/>
      </div>
      </div>
    );
  }
}

export default Hotel;


import React, { Component } from 'react';
import './HotelItemModal.scss';

class HotelItemModal extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="holtel-content">
        <div className="holtel-content-evaluate">
          <span>
            <i className="fa fa-user"></i>
            Được các cặp đôi đánh giá cao
          </span>
        </div>
        <div className="hotel-content-name">
          Hotel
        </div>
        <div className="hotel-content-start">
          <i className="fa fa-user"></i>
          <span>
            map- Xem trên bản đồ
          </span>
        </div>
        <div className="hotel-content-map">
          <span>Vị trí tuyệt vời</span>
          <span>Nội thành</span>
        </div>
        <div className="hotel-content-option">
          <span>Ăn sáng</span>
          <span>Thanh toán tại nơi</span>
        </div>
        <div className="hotel-content-review">
          <span>
            <i className="fa fa-user"></i>
            Được 100% khach hang gioi thieu
          </span>
        </div>
        <div className="hotel-content-status">
          <span>
            Đang bán chạy!
          </span>
          <p>
            lan dat gan day nhat
          </p>
        </div>
        <div className="hotel-content-sale">
          <span>
            Khuyến mại hợp lệ
          </span>
        </div>
      </div>
    );
  }
}

export default HotelItemModal;

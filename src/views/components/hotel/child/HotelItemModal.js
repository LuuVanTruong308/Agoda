import React, { Component } from 'react';
import './HotelItemModal.scss';

class HotelItemModal extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    let { hotelModal }  = this.props
    return (
      <div className="holtel-content">
        <div className="holtel-content-evaluate">
          <span>
            <i className="fa fa-user"></i>
            Được các cặp đôi đánh giá cao
          </span>
        </div>
        <div className="hotel-content-name">
          {hotelModal.EnglishHotelName}
        </div>
        <div className="hotel-content-start">
          <i className="fa fa-user"></i>
          <span>
            map- {hotelModal.LocationFullText}
          </span>
        </div>
        <div className="hotel-content-map">
          {hotelModal.locationHighlightFeatures.PillList.slice(0,2).map(item => {
              if(item.Name) return <span key={item.Id}>{item.Name}</span>
              return <p></p>
            }
          )}
          {hotelModal.locationHighlightFeatures.PillList.length > 2 ?
            <span>+</span> :
            <p></p>
          }
        </div>
        <div className="hotel-content-option">
          {hotelModal.Highlights.slice(0,2).map(item => {
              if(item.title) return <span key={item.id}>{item.title}</span>
              return <p></p>
            }
          )}
          {hotelModal.Highlights.length > 2 ?
            <span>+{hotelModal.Highlights.slice(2,hotelModal.Highlights.length).length}</span> :
            <p></p>
          }
          <div className="tooltip">
            <p>một số gói giá sẽ có</p>
            <div>
              
            </div>
          </div>
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

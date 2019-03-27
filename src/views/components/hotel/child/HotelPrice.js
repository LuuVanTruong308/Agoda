import React, { Component } from 'react';
import './HotelPrice.scss';

class HotelPrice extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    let { hotelModal }  = this.props
    return (
      <div className="hotel-price">
        <div className="hotel-price-review">
          <div className="hotel-price-review-text">
            <p className="text-review">{ hotelModal.ReviewText }</p>
            <p className="number-review">{ hotelModal.NumberOfReviewLocale } nhận xét</p>
          </div>
          <div className="hotel-price-review-point">
            <p>{hotelModal.ReviewScoreFormatted}</p>
          </div>
        </div>
        <div className="hotel-price-content">
          { hotelModal.LimitedRoomsDiscountMessage ?
            <div>
              <span className="mes">{ hotelModal.LimitedRoomsDiscountMessage }</span>
            </div> :
            ''
          }
          { hotelModal.LastMinutePriceDrop ?
            <div className="mes-sale">
              <i className={`icon ${hotelModal.LastMinutePriceDrop.fontIcon}`}></i>
              <span>{ hotelModal.LastMinutePriceDrop.promotionText }</span>
            </div> :
            ''
          }
          { hotelModal.PriceDetail ?
            <div>
              <span className="title">{ hotelModal.PriceDetail.PriceViewText }</span>
            </div> :
            ''
          }
          { hotelModal.FormattedCrossedOutPrice &&  hotelModal.FormattedCrossedOutPrice !== "0" ?
            <div>
              <span className="crossed-out-price">{ hotelModal.FormattedCrossedOutPrice }</span>
            </div> :
            ''
          }
          { hotelModal.FormattedDisplayPrice ?
            <div className="price-defaute">
              <span className="price-number">{ hotelModal.FormattedDisplayPrice }</span>
              <span className="price-currency">{hotelModal.Currency}</span>
            </div> :
            ''
          }
        </div>
      </div>
    );
  }
}

export default HotelPrice;

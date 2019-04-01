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
        { hotelModal.UspSegment ?
          <div className="holtel-content-evaluate">
            <span>
            <i className={`icon ${hotelModal.UspSegment.SegmentFontIcon}`}></i>
              { hotelModal.UspSegment.TranslatedName }
            </span>
          </div> : ''
        }
        <div className="hotel-content-name">
          { hotelModal.EnglishHotelName }
        </div>
        <div className="hotel-content-start">
          <i className={`icon ${hotelModal.StarRatingCss} ${hotelModal.StarRatingColor}`}></i>
          <i className="fa fa-map-marker"></i>
          <span>
            { hotelModal.LocationFullText }
          </span>
        </div>
        { hotelModal.locationHighlightFeatures.PillList.filter(el => el.Name).length > 0 ?
          <div className="hotel-content-map">
            {hotelModal.locationHighlightFeatures.PillList.slice(0,2).map((item, index) => {
                if(item.Name) return <span key={index}>{item.Name}</span>
                return <p key={index}></p>
              }
            )}
            {hotelModal.locationHighlightFeatures.PillList.length > 2 ?
              <span>+</span> : ''
            }
          </div> : ''
        }
        { hotelModal.Freebies ?
          <div className="hotel-content-option">
            { hotelModal.Freebies.PillList.slice(0, 2).map((item, index) => {
                if(item.Name) return <span key={index}>{item.Name}</span>
                return <p></p>
              }
            )}
            {hotelModal.Freebies.PillList.length > 2 ?
              <span>+{hotelModal.Freebies.PillList.slice(2, hotelModal.Freebies.PillList.length).length}</span> : ''
            }
            <div className="tooltip">
              <p>{ hotelModal.Freebies.PillTooltipText }</p>
              <div className="tooltip--list">
                { hotelModal.Freebies.PillList.map((item, index) =>
                  <div key={index}>
                    <i className={`icon ficon ${item.Icon}`}></i>
                    <span className="tooltip--list--title">{item.Name}</span>
                  </div>
                )}
              </div>
            </div>
          </div> : ''
        }
        { hotelModal.guestRecommended ?
          <div className="hotel-content-review">
            <div>
              <i className={`icon ${hotelModal.guestRecommended.icon}`}></i>
              {hotelModal.guestRecommended.text}
            </div>
          </div> : ''
        }
        { hotelModal.urgencyMessages.length !== 0 ?
          <div className="hotel-content-status">
            <span>
              Đang bán chạy!
            </span>
            <p>
              { hotelModal.urgencyMessages[0].text }
            </p>
          </div> : ''
        }
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

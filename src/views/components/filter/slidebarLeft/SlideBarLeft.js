import React, { Component } from 'react';
import './SlideBarLeft.scss';
import { LIST } from './mock.js';
import Map from '../../../../components/map'

class SlideBarLeft extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="sideBar">
        <div className="sideBar-map">
          <Map/>
        </div>
        <div className="sideBar-eatMorFree">
          <div className="sideBar-eatMorFree-icon">
            <i className="icon ficon-cafe white"></i>
          </div>
          <p>Xem những nơi ở có bữa ăn sáng miễn phí</p>
          <input type="checkbox" className="sideBar-eatMorFree-checkbox"/>
        </div>
        <div className="sideBar-mes">
          {this.LIST.panelTitle}
        </div>
        {this.LIST.items.map((item, index) =>
          <div className="sideBar-list" key={index}>
            <img className="sideBar-list-img" src={item.imageUrl} alt={item.mainDescription}/>
            <div className="sideBar-list-text">
              <p className="sideBar-list-text-item">{item.cityName}</p>
              <p>{item.secondaryDescription}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    var header = document.querySelector(".sideBar");
    var sticky = header.offsetTop;

    window.onscroll = function() {
      if (window.pageYOffset > sticky) {
        header.classList.add("side-bar-sticky");
      } else {
        header.classList.remove("side-bar-sticky");
      }
    }
  }

  componentWillMount() {
    this.LIST = LIST
  }
}

export default SlideBarLeft;


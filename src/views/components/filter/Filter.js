import React, { Component } from 'react';
import './Filter.scss';
import SlideBarLeft from '../slidebarLeft/SlideBarLeft'
import Hotel from '../hotel/Hotel'

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filter: 1,
    }
  }
  render() {
    return (
      <div className="filter">
        <div className="filter-list-button">
          <button className="filter-button" onClick={() => this.actionFilter(1)}>Mọi lựa chọn</button>
          <button className="filter-button" onClick={() => this.actionFilter(2)}>Khách sạn</button>
          <button className="filter-button" onClick={() => this.actionFilter(3)}>Agoda home</button>
          {/* <button className={'filter-button' + this.state.filter === 1 ? 'filter-item' : ''} onClick={() => this.actionFilter(1)}>Mọi lựa chọn</button>
          <button className={"filter-button" + this.state.filter === 2 ? 'filter-item' : ''} onClick={() => this.actionFilter(2)}>Khách sạn</button>
          <button className={"filter-button" + this.state.filter === 3 ? 'filter-item' : ''} onClick={() => this.actionFilter(3)}>Agoda home</button> */}
        </div>
        <div className="filter-list">
          <div className="filter-list-slide-bar">
            <SlideBarLeft></SlideBarLeft>
          </div>
          <div className="filter-list-tab">
            <div className="filter-notify">
            </div>
            <div className="filter-notify">
            </div>
            <div className="filter-sort">
            </div>
            <div className="filter-list-item">
              <Hotel></Hotel>
            </div>
          </div>
        </div>
      </div>
    );
  }

  actionFilter = (value) => {
    this.setState({
      filter: value,
    })
  }
}

export default Filter;
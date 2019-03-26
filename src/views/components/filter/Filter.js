import React, { Component } from 'react';
import './Filter.scss';
import SlideBarLeft from '../slidebarLeft/SlideBarLeft'
import Hotel from '../hotel/Hotel'
import Suggestions from '../suggestions/Suggestions'
import { connect } from 'react-redux'

// import * as actions from '../../../redux/action/content'
import * as actionsApi from '../../../redux/api/content'

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
        <div className="filter--list-button">
          <button
            className={`filter-button ${this.state.filter === 1 ? 'filter-item' : ''}`}
            onClick={() => this.actionFilter(1)}>
            Mọi lựa chọn
          </button>
          <button
            className={`filter-button ${this.state.filter === 2 ? 'filter-item' : ''}`}
            onClick={() => this.actionFilter(2)}>
            Khách sạn
          </button>
          <button
            className={`filter-button ${this.state.filter === 3 ? 'filter-item' : ''}`}
            onClick={() => this.actionFilter(3)}>
            Agoda home
          </button>
        </div>
        <div className="filter--list">
          <div className="filter--list--slide-bar" id="sticky">
            <SlideBarLeft></SlideBarLeft>
          </div>
          <div className="filter--list--tab">
            <div className="filter-notify">
            </div>
            <div className="filter-sort">
            </div>
            <div className="filter-list-item">
              { this.props.listHotel.map((item) => {
                return  <Hotel hotelModal={item} key={item.HotelID} />
              })}
            </div>
            <div className="filter-list-item">
              <Suggestions></Suggestions>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.dispatchGetList()
  }

  actionFilter = (value) => {
    this.setState({
      filter: value,
    })
  }
}

const mapStateToProps = state => {
  return {
    listHotel: state.myListHotel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetList : () => {
      dispatch(actionsApi.getListContent())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
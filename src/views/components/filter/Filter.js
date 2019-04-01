import React, { Component } from 'react';
import './Filter.scss';
import SlideBarLeft from './slidebarLeft/SlideBarLeft';
import Hotel from './hotel/Hotel';
import Suggestions from './suggestions/Suggestions';
import Sort from './sort/Sort'
import { connect } from 'react-redux';
import { TAB_FILTER } from './mock.js';
import * as actionsApi from '../../../redux/api/content';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filter: -1,
      loading: true,
    }
  }

  render() {
    return (
      <div className="filter">
        { this.props.listFilter.ProductType ?
          <div className="filter--list-button">
            { this.props.listFilter.ProductType.ItemList.map(item =>
              <button key={item.Id}
                className={`filter-button ${this.state.filter === item.Id ? 'filter-item' : ''}`}
                onClick={() => this.actionFilter(item.Id)}>
                { item.Name }
              </button>
            )}
          </div> : ''
        }
        <div className="filter--list">
          <div className="filter--list--slide-bar" id="sticky">
            <SlideBarLeft/>
          </div>
          <div className="filter--list--tab">
            <div className="filter-notify">
            </div>
            <div className="filter-sort">
              {
                this.props.listSort.title ? <Sort sortModal={this.props.listSort}/> : ''
              }
            </div>
            <div className="filter-list-item">
              {
                this.props.listHotel.map((item) =>
                  <Hotel hotelModal={item} key={item.HotelID} />
                )
              }
            </div>
            <div className="filter-list-item">
              <Suggestions/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.dispatchGetList()
    this.TAB_FILTER = TAB_FILTER
  }

  actionFilter = (value) => {
    this.setState({
      filter: value,
    })
  }
}

const mapStateToProps = state => {
  return {
    listHotel: state.myListHotel.playload,
    listFilter: state.myListHotel.listFilter,
    listSort: state.myListHotel.listSort,
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
import React, { Component } from 'react';
import './Search.scss';
import { LIST_SEARCH } from './constant';

class Search extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
    this.LIST_SEARCH = LIST_SEARCH
  }

  render() {
    return (
      <div className="search">
        <div>
          <span className="search--title">Chọn lọc</span>
          {this.LIST_SEARCH.map(item =>
            <button key={item.name} className="search--item">
              <i className={item.icon}></i>
              <span className="search--item-text">{item.name}</span>
              <i className="fa fa-sort-down sort-down"></i>
            </button>
          )}
        </div>
        <div className="search--left">
          <div className="search--left--text">
            <i className="fa fa-search search-icon"></i>
            <input className="search-text-input" placeholder="Từ khóa hoặc khách sạn"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
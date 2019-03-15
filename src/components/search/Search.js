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
        <div className="search-list-item">
          <span>Chọn lọc</span>
          {this.LIST_SEARCH.map(item =>
            <button key={item.name} className="search-item">
              <i className={item.icon}></i>
              <span className="search-item-text">{item.name}</span>
              <i className="fa fa-sort-down sort-down"></i>
            </button>
          )}
        </div>
        <div className="search-left">
          <i className="fa fa-search search-icon"></i>
          <div className="search-text">
            <input className="search-text-input" placeholder="nhập vào đây này cho bố"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
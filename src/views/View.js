import React, { Component } from 'react';
import './View.css';
import Header from '../components/header/Header'
import Search from './components/filter/search/Search'
import Filter from '../views/components/filter/Filter'

class View extends Component {
  render() {
    return (
        <div>
          <Header></Header>
          <div className="list-search">
            <Search></Search>
          </div>
          <div className="tab-filter">
            <Filter></Filter>
          </div>
        </div>
    );
  }
}

export default View;
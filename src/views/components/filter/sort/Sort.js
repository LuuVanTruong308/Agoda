import React, { Component } from 'react';
import './Sort.scss';

class Sort extends Component {
  constructor() {
    super();
    this.state = {
      sort: 0,
    }
  }

  render() {
    let { sortModal } = this.props
    return (
      <div className="sort">
        <div className="sort--title">
          { sortModal.title }
        </div>
        { sortModal.sortOptions.map(item =>
          <div
            key={item.props.sortOptionId}
            className={`sort--button ${this.state.sort === item.props.sortOptionId ? 'sort--item' : ''}`}
            onClick={() => this.actionSort(item.props.sortOptionId)}>
            { item.props.captionText }
          </div>
        )}
      </div>
    );
  }

  actionSort = (value) => {
    this.setState({
      sort: value,
    })
  }
}

export default Sort;

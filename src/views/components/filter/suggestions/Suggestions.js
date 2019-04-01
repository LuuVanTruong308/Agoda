import React, { Component } from 'react';
import './Suggestions.scss';
import { LIST_SUGGESTIONS } from './constant.js';

class Suggestions extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
    this.LIST_SUGGESTIONS = LIST_SUGGESTIONS
  }

  render() {
    return (
      <div className="suggestions">
        <div className="suggestions--text">Bạn vẫn chưa tìm được nơi phù hợp từ 20 Thg3 - 05 Thg4 2019 à? Hãy thử qua những gợi ý dưới đây!</div>
        <div className="suggestions--list">
            {this.LIST_SUGGESTIONS.map(item =>
                <div className="suggestions--list--item" style={{ backgroundImage: `url(${item.imageUrl})` }} key={item.cityId}>
                    <span className="suggestions--list--item--name">{item.mainDescription}</span>
                    <p className="suggestions--list--item--number">{item.secondaryDescription}</p>
                    <div >
                        {item.atmospheres.map((el,index) =>
                          <span className="suggestions--list--item--option" key={index}>{el}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
      </div>
    );
  }
}

export default Suggestions;

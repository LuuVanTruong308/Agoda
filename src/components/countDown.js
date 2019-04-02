import React, { Component } from 'react';
import './countDown.scss'
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds }) => {
  return <div className="count-down">
    <div className="count-down-item">
      <span>{days}</span>
      <p>ngày</p>
    </div>
    <span>:</span>
    <div className="count-down-item">
      <span>{hours}</span>
      <p>giờ</p>
    </div>
    <span>:</span>
    <div className="count-down-item">
      <span>{minutes}</span>
      <p>phút</p>
    </div>
    <span>:</span>
    <div className="count-down-item">
      <span>{seconds}</span>
      <p>giây</p>
    </div>
  </div>
};

class CountDown extends Component {
  render() {
    return (
      <div>
        <Countdown
          date={Date.now() + 1000000}
          zeroPadTime={2}
          renderer={renderer}
        />
    </div>
    );
  }
}

export default CountDown;
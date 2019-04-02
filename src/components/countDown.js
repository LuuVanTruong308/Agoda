import React, { Component } from 'react';
import Countdown, { zeroPadTime  } from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>00:00:00:00</span>;
    } else {
      return <span>{days}:{hours}:{minutes}:{seconds}</span>;
    }
};

class CountDown extends Component {
  render() {
    return (
      <div>
        <Countdown
            date={Date.now() + 5000}
            zeroPadTime={2}
            renderer={renderer}
        />,
    </div>
    );
  }
}

export default CountDown;
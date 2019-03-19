import React, { Component } from 'react';
import './Header.scss';
import Login from'./login/Login'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.svg" title="Agoda" className="bachground-logo"/>
          <div>
            <button className="item">Chỗ ở</button>
            <button className="item">Chuyến bay</button>
            <button className="item">Taxi sân bay</button>
            <button className="item">Ưu đãi hôm nay</button>
            <button className="item">Agoda Home</button>
            <button className="item">...</button>
          </div>
        </div>
        <div className="login">
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default Header;
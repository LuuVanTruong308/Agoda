import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="action-login">
        <div className="action-icon"> Icon</div>
        <div className="action-button">
          <button className="item-button">Đăng nhập</button>
          <button className="item-button item-button-left">Tạo tài khoản</button>
        </div>
      </div>
    );
  }
}

export default Login;
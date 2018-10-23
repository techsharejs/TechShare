import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <header className='nav'> */}
        <Login/>
        <Register/>
        {/* </header> */}
      </div>
    )
  }
}
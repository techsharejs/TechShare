import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar/>
        <h1>Hell0 world</h1>
      </div>
    );
  }
}

export default App;

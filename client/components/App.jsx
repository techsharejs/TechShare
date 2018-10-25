import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import '../assets/css/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;

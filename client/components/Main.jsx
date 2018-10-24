// import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Login from './Login';
import Register from './Register';

const Main = () => {
  return (
    <div>
      <h2>This is the main component</h2>
    </div>
  );
}

export default Main;

  // <Switch>
  //   <Route exact path='/' component={Home}></Route>
  //   <Route exact path='/login' component={Login}></Route>
  //   <Route exact path='/register' component={Register}></Route>
  // </Switch>
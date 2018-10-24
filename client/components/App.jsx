import React from 'react';
import '../assets/css/App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const App = () => (
  <div className='app'>
    <h1>TechShare</h1>
    <Navbar />
    <Main />
   </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/register' component={Register}></Route>
  </Switch>
);

export default App;
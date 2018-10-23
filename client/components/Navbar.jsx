import React, { Component } from 'react';
import App from './App';
import Login from './Login';
import Register from './Register';
import { Link, Route, Router, Switch } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      </Switch>
    </div>
  );
  
};

export default Navbar;
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <header className={styles.nav}>
//           <Link to='/login'>Login</Link>
//           <div></div>
//           <Link to='/register'>Register</Link>
//         </header>
//       </div>
//     )
//   }
// }
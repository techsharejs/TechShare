import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { NavLink, Switch, Route } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/login'>Login</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/register'>Register</NavLink></li>
    </ul>
  </nav>
);

// const Home = () => (
//   <div className='home'>
//     <h1>Welcome to your personal Digital Repo</h1>
//     <p> Feel free to post and search for tech resources</p>
//   </div>
// );





// export default Navbar;
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

export default Navbar;
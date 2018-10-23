// import React, { Component } from 'react';
// import Navbar from './Navbar';

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div>
//         <Navbar/>
//         <h1>Hell0 world</h1>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import '../assets/css/App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <h1>TechShare</h1>
    <Navbar />
    <Main />
   </div>
);

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/login'>Login</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/register'>Register</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to your personal Digital Repo</h1>
    <p> Feel free to post and search for tech resources</p>
  </div>
);

const Login = () => (
  <div className='form'>
    <h1>Login Here</h1>
    <div>
    <form>
      <div>
        <input 
          id="loginInput" 
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input 
          id="loginInput" 
          type="text"
          placeholder="Password"
        />
      </div>
      <div>
        <button className="button"> Submit </button>
      </div>
      </form>
    </div>
  </div>
);

const Register = () => (
  <div className='form'>
    <h1>Register</h1>
    <form>
      <div>
        <input 
          id="registerInput" 
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input 
          id="registerInput" 
          type="text" 
          placeholder="Password"
        />
      </div>
      <div>
        <button className="button"> Submit </button>
      </div>
      </form>
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
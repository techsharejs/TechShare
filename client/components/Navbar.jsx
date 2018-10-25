import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isLogged from '../modules/actions';

function mapStateToProps(store) {
  return {
    ...store,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isLogged: () => {
      dispatch(isLogged());
    },
  };
}


const Navbar = (props) => {
  if (props.changeForm.isLogged === false) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

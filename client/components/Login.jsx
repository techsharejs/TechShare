import React from 'react';

const Login = () => (
  <div className="form">
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
          <button className="button" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;

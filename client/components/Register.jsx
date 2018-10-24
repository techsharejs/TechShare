import React, { Component } from 'react';

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

export default Register;
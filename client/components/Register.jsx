import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return(
      <div>
        <div>Sign Up</div>
          <form>
            <div>
              Username: 
              <input 
                id="username" 
                type="text" 
              />
            </div>
            <div>
              Password: 
              <input 
                id="password" 
                type="text" 
              />
            </div>
            <div>
              <button> Submit </button>
            </div>
        </form>
      </div>
    )
  }
}
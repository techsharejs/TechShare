import React from 'react';
import Main from './Main';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to your personal Digital Repo</h1>
    <p> Feel free to post and search for tech resources</p>
    <Main />
  </div>
);

export default Home;

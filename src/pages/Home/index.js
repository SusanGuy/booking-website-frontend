import React from 'react';

// Styles
import './home.css';

// Components
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;

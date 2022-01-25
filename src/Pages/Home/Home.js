import React from 'react';
import './Home.css'
import imgHomeShop from './shopimg.jpg'

function Home() {
  return (
  <div className='global-container'>
    <h1 className='home-title'>
      Home
    </h1>
    <p>lorem ipsum dolor sit amet</p>
    <img src={imgHomeShop} alt="accueil shop"/>
  </div>);
}

export default Home;

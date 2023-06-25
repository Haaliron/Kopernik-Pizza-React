import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/bg.png';
import '../styles/Home.css'

export const Home = () => 
{
  return (
    <div className='home'style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1> Kopernik Pizza </h1>
        <p> Galaksinin En Sıcak Pizzası </p>
        <Link to="/menu">
          <button>Şimdi Sipariş Ver</button>
        </Link>
      
      </div>
    </div>
  )
}

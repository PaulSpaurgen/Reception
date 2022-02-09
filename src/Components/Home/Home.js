import React from 'react';
import { Link } from 'react-router-dom';
import HomeI from '../Images/Home.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className='Main'>
      <div className='Head'>
        <h1> Recreation Management System</h1>
      </div>
      <div className='Content'>
        <img src={HomeI}></img>
        <div className='Buo'>
          <Link to='/add'><button className='Button1'> ADD PEOPLE </button></Link>
          <Link to='/display'><button className='Button2'> DISPLAY SCHEDULE</button></Link>
        </div>

      </div>
    </div>
  )
}

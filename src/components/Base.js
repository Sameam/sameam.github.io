import React from 'react';
import '../index.css'
import Navbar from './Navbar';
import {Link} from "react-router-dom"


const Base = ({children}) => {

  return (
    <div>
    <div className="container-fluid">
      <div className="bg-dark text-white text-left mt-auto">
        <Navbar />
      </div>
      <div className='bg-dark text-white'>{children}</div>
    </div>
    <footer className='footer bg-dark mt-auto py-3' id="footer">
      <div className='container-fluid text-white py-3 row text-left' style={{clear: 'both'}}>
        <h5 className='text-white col-sm' >Contact Me</h5>
        <h5 className="text-white col-sm">Site Map</h5>
      </div>
      <div className='container-fluid text-white row text-left' style={{clear: 'both'}}>
        <ul className='col-sm' style={{listStyle: "none"}}>
          <li>Email: nara.eam33@gmail.com</li>
          <li>Phone: 0490832804</li>
        </ul>
        <ul className='col-sm' style={{listStyle: "none"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/experience">Experinces</Link></li>
        </ul>
      </div>
      <div className='text-white' style={{
        fontWeight: 300,
        fontSize: '0.80rem',
        marginLeft: '20px',
      }}>
        <p className='col-sm'>© 2017-{new Date().getFullYear()} Nara Eam</p>
      </div>
    </footer>
  </div>
  )
};

export default Base;

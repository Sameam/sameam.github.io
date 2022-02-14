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
        <div class="col-lg-3 col-md-6 footer-contact">
          <h5 className='text-white col order-first'>Contact Me</h5>
          <p>
            <strong>Email:</strong>nara.eam33@gmail.com <br/>
            <strong>Phone:</strong>0490832804 <br/>
          </p>
        </div>

      <div className='col-lg-3 col-md-5' style={{clear: 'both'}}>
        <h5 className="text-white">Site Map</h5>
          <i class="bx bx-chevron-right"></i><Link to="/">Home</Link> <br/>
          <i class="bx bx-chevron-right"></i><Link to="/portfolio">Portfolio</Link> <br/>
          <i class="bx bx-chevron-right"></i><Link to="/experience">Experinces</Link>
      </div>
    </div>  
      <div className='text-white row' style={{
        fontWeight: 300,
        fontSize: '0.90rem',
        marginLeft: '20px',
      }}>
        <p className='col-sm'>© 2017-{new Date().getFullYear()} Nara Eam</p>
        <a href="https://github.com/Sameam/my_resume" className='col-sm-2 text-right'>Website Source Code</a>
      </div>
    </footer>
  </div>
  )
};

export default Base;

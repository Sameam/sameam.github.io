import React from 'react';
import {Link} from 'react-router-dom'



const Navbar = () => {

  
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
      <h2 classname="display-4" style={{marginLeft:"10px", marginTop:"5px"}}>Nara Eam</h2>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;

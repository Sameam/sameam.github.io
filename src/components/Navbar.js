import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav} from 'react-bootstrap'



const Navbars = () => {

  return (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <h2 className=''>Nara Eam</h2>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-contend-end' >
        <Nav className="justify-content-end" style={{ width: "100%"}}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
          <Link className="nav-link" to="/experience">Experinces</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default Navbars;



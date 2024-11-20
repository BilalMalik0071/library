import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {

  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Navbar expand="lg" className="bgbody fixed-top">
        <Container>
          <Navbar.Brand>
            <Link onClick={clickHandler} to={'/home'} style={{ textDecoration: "none", color: "black" }}>
              <div className='d-flex align-items-center gap-2'>
                <img className='logo' src="https://i.postimg.cc/3x7HH15t/240-F-768821392-r-RNUQAZfnu-FFi2-CD4-KJdo-VQpj44-Aeo-Ea-removebg-preview.png" alt="" />
                <div><h2 className='m-0 mt-3 '><span style={{ color: "rgb(17, 91, 17)" }}>E</span>-library</h2></div>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <h6 className='my-2 me-4'><Link style={{ textDecoration: "none", color: "black" }} to={'/home'} onClick={clickHandler}>Home</Link></h6>
              <h6 className='my-2 me-4'><Nav.Link className='d-inline-block' style={{ textDecoration: "none", color: "black", padding: "0px" }} href="#books">View Books</Nav.Link></h6>
              <h6 className='my-2 me-4'><Nav.Link className='d-inline-block' style={{ textDecoration: "none", color: "black", padding: "0px" }} href="#library">Your Library</Nav.Link></h6>
              <h6 className='my-2'><Nav.Link className='d-inline-block' style={{ textDecoration: "none", color: "black", padding: "0px" }} href="#about">About Us</Nav.Link></h6>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

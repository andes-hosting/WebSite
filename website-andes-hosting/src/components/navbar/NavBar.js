import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'
import logo from '../../img/logo_andes.png'
import smoothScroll from '../../utils/smoothScroll';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container className='container'>

          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='Andes Hosting' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <Link to="/" onClick={() => smoothScroll('planes')} className='navLinks'>Planes</Link>
              <Link to="/" onClick={() => smoothScroll('about')} className='navLinks'>¿Quiénes somos?</Link>
              <Link to="/" onClick={() => smoothScroll('faq')} className='navLinks'>FAQ</Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar
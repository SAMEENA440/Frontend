import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons
import logo from '../assets/images/logo.jpg'; // Import the logo

const Header = () => (
  <Navbar bg="light" variant="light" expand="lg" className="sticky-top shadow">
    <div className="container">
      <Navbar.Brand as={Link} to="/" className="text-primary font-weight-bold">
        <img
          src={logo} // Use the imported logo here
          alt="Travel Blog Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Travel Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto"> {/* Align this group to the left */}
          <Nav.Link as={Link} to="/" className="nav-item">
            <FaHome className="mr-2" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-item">
            <FaInfoCircle className="mr-2" /> About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item">
            <FaEnvelope className="mr-2" /> Contact
          </Nav.Link>
        </Nav>
        <Nav> {/* Align this group to the right */}
          <Nav.Link as={Link} to="/login" className="nav-item">
            <FaSignInAlt className="mr-2" /> Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-item">
            <FaUserPlus className="mr-2" /> Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;

// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Import the customized CSS file
import logo from './logo.jpg'; // Update the path to your logo image
import { FaHome } from "react-icons/fa";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GiCupcake } from "react-icons/gi";
import { MdContacts } from "react-icons/md";


const Header = () => {
  return (
    <Navbar className="navbar-custom p-3" expand="lg" id="navbar">
      <Navbar.Brand href="#home" id='logo'>
        <img
          src={logo}
          alt="Logo"
          style={{ width: '80px', height: '80px', marginRight: '10px' }} // Adjust the styling as needed
        />
        <span className='sweet'> Sweets</span> & <span className='cake'>Cakes</span>
         
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav className="nav-link">
          <Nav.Link href="#home" className="nav-link-custom btn">
            Home <FaHome />
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom btn ">
            About <TbArrowRoundaboutRight />
          </Nav.Link>
          <Nav.Link href="#recipes" className="nav-link-custom btn">
            Recipes <GiCupcake />
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link-custom btn">
            Contact Us <MdContacts />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

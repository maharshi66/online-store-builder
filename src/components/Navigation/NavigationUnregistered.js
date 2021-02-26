import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
import "./Navigation.css";
import { Link } from 'react-router-dom';

export default function NavigationUnregistered(){
	return (
		<>
		  <Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home" className="brandText">
		    	Purplish
		    </Navbar.Brand>
		    <Nav className="ml-auto">
		      <Link to="/login" className="dim white pa1 hover-light-gray">Log In</Link>
		      <Link to="/signup" className="dim white pa1 hover-light-gray">Sign Up</Link>
		    </Nav>
		  </Navbar>
		</>
	);
}
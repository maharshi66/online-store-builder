import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
import "./Navigation.css";
import NavbarWithBrand from './NavbarWithBrand';
import { Link } from 'react-router-dom';

export default function NavigationUnregistered(){
	return (
		<>
		  <Navbar bg="dark" variant="dark" sticky="top">
		  	<NavbarWithBrand />
		    <Nav className="ml-auto">
		      <Link to="/login" 
		      		className="dim white pa2 hover-light-purple mr4" 
		      		style={{ textDecoration: 'none' }}>
		      		<div className="pa1 pa3-ns">Log In</div>
		      </Link>
		      <Link to="/signup" 
		      		className="dim white pa2 fw2 hover-light-purple" 
		      		style={{ textDecoration: 'none' }}>
		      		<div className="w-100 ba b--light-purple br2 pa1 pa3-ns">
		      		Sign Up</div>
		      	</Link>
		    </Nav>
		  </Navbar>
		</>
	);
}
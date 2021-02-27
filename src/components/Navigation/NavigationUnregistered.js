import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
import "./Navigation.css";
import { Link } from 'react-router-dom';
/*import purplishLogo from '../../assets/purplish_logo.png';*/

export default function NavigationUnregistered(){
	return (
		<>
		  <Navbar bg="dark" variant="dark" sticky="top">
		    <Navbar.Brand>
		    	<h1 className="f2 brandText purple">Purplish</h1>
		    </Navbar.Brand>
		    <Nav className="ml-auto">
		      <Link to="/login" 
		      		className="dim white pa2 hover-light-purple mr4" 
		      		style={{ textDecoration: 'none' }}>
		      		Log In
		      </Link>
		      <Link to="/signup" 
		      		className="dim white pa2 fw2 hover-light-purple" 
		      		style={{ textDecoration: 'none' }}>
		      		Sign Up
		      	</Link>
		    </Nav>
		  </Navbar>
		</>
	);
}

/*    	      <img
		        src={purplishLogo}
		        width="100"
		        height="90"
		        className="d-inline-block align-top"
		        alt="Purplish logo"
		      />*/
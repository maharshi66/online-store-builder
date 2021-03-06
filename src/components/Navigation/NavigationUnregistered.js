import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
import "./Navigation.css";
import { Link } from 'react-router-dom';

export default function NavigationUnregistered(){
	return (
		<>
		  <Navbar sticky="top">
		  	<h1 className="f2-ns f5 brandFontFamily light-purple">Purplish</h1>
		    <Nav className="ml-auto">
		      <Link to="/login" 
		      		className="dim white b f7 f6-ns pa2 hover-light-gray mr4-ns mr1" 
		      		style={{ textDecoration: 'none' }}>
		      		<div className="pa1 pa3-ns">Log In</div>
		      </Link>
		      <Link to="/signup" 
		      		className="dim white f7 f6-ns pa2 fw2 hover-light-gray mr4-ns mr1" 
		      		style={{ textDecoration: 'none' }}>
		      		<div className="w-100 b ba b--light-gray br2 pa1 pa3-ns">
		      		Sign Up</div>
		      	</Link>
		    </Nav>
		  </Navbar>
		</>
	);
}
import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileDefaultAvatar from "../../assets/profile_default.svg";
import "tachyons";
import "./Navigation.css";

export default function NavigationRegistered() {

	return(
		<>
		  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		    <Navbar.Brand>
		    	<h1 className="f2 brandText purple">Purplish</h1>
		    </Navbar.Brand>
	      <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="ml-auto">
		    	<Link to="/explore" style={{textDecoration: "none"}} className="white mr2 pa3 hover-white">Explore Stores</Link>
		    	<Link to="/explore" style={{textDecoration: "none"}} className="white mr2 pa3 hover-white">Alerts</Link>		    
		    		<div>
			    	<NavDropdown 
			    		alignRight 
			    		className="mr2 white" 
			    		title={
			    		<img src={profileDefaultAvatar} alt={profileDefaultAvatar} className="br-100 h2 w2 mr2"/>}>
				        <NavDropdown.Item >Update Profile</NavDropdown.Item>
				        <NavDropdown.Item >Settings</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item >Log Out</NavDropdown.Item>
				     </NavDropdown>
		    		</div>
		    </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		</>
	);
} 
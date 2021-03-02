import React, { useState } from 'react';
import {Nav, Navbar, NavDropdown, Alert } from 'react-bootstrap';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom';
import "tachyons";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import BrandHeader from '../BrandHeader/BrandHeader';

export default function NavigationRegistered() {

	const [error, setError] = useState('');
	const {currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogOut() {
		setError('')

		try{
			await logout();
			history.push("/");
		}catch{
			setError('Failed to Log Out');
		}
	}

	return(
		<>
		  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
		    <Navbar.Brand>
		    	<BrandHeader />
		    </Navbar.Brand>
	      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		    <Navbar.Collapse expand="lg" id="responsive-navbar-nav">
		    <Nav className="ml-auto">
		    	<div className="flex flex-wrap">
		    	<Link to="/explore" style={{textDecoration: "none"}} className="light-purple mr2 pa3 hover-white">
    				<FontAwesomeIcon icon={faCompass} className="w2 h2 mr2" />
    			</Link>
		    	<Link to="/alerts" style={{textDecoration: "none"}} className="light-purple mr2 pa3 hover-white">
		    		<FontAwesomeIcon icon={faBell} className="w2 h2 mr2" />
		    	</Link>		    
			    	<NavDropdown 
			    		className="pl3 pl4-ns hover-white"
			    		menuAlign="right"
			    		alignRight  
			    		title={
		    			<FontAwesomeIcon icon={faUser} className="light-purple mt2 w2 h2 mr2" />}>
        				{error && <Alert variant="danger">{error}</Alert>}
						<NavDropdown.Item className="b">{currentUser.email}</NavDropdown.Item>
				        <NavDropdown.Item >
				        	<Link to="/update-profile" style={{textDecoration: "none"}} className="purple">Update Profile</Link>
				        </NavDropdown.Item>
				        <NavDropdown.Item>
				        	<Link style={{textDecoration: "none"}} className="purple">Settings</Link></NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item >
				        	<Link onClick={handleLogOut} className="w-100 purple">Log Out</Link>
				        </NavDropdown.Item>
				     </NavDropdown>
		    </div>
		    </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		</>
	);
}
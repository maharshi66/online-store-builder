import React from 'react';
import {Navbar} from 'react-bootstrap';
import BrandHeader from '../BrandHeader/BrandHeader';

const NavbarWithBrand = (props) => {
  return (
	  <Navbar bg="dark" variant="dark" sticky="top">
	    <Navbar.Brand>
	    	<BrandHeader />
	    </Navbar.Brand>
	  </Navbar>
  )
}

export default NavbarWithBrand;
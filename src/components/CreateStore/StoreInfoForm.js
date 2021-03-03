import React from 'react';
import {Form, Button} from 'react-bootstrap';
import "tachyons";

const StoreInfoForm = (props) => {
  const handleSubmit = (event) => {
  	event.preventDefault();
  	props.onNextClicked();
  	//async function to send data
  }

  return (
    <div className="mw4 mw6-ns center">    	
    	<Form className="mw4 mw6-ns mt5 overflow" onSubmit={handleSubmit}>
		  <Form.Group controlId="formBasicText">
		    <Form.Label>Store Name</Form.Label>
		    <Form.Control required type="text" placeholder="Your store name" />
		  </Form.Group>

  		  <Form.Group>
		    <Form.Label>Short Description</Form.Label>
		    <Form.Control required type="text" placeholder="Your store name" />
		  </Form.Group>
		  
		  <Form.Group>
		    <Form.Label>Store Tagline</Form.Label>
		    <Form.Control type="text" placeholder="" />
		  </Form.Group>
		  
	     <Form.Group controlId="exampleForm.ControlSelect1">
		    <Form.Label>Industry</Form.Label>
		    <Form.Control required as="select">
		      <option>1</option>
		      <option>2</option>
		      <option>3</option>
		      <option>4</option>
		      <option>5</option>
		    </Form.Control>
		  </Form.Group>
		  
		  <Button
		   variant="primary" type="submit" >
		    Next
		  </Button>
		</Form>
		</div>
  )
}

export default StoreInfoForm;
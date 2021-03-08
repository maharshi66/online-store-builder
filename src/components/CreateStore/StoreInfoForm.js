import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Industries from './Industries';
import "tachyons";

const StoreInfoForm = (props) => {
  const handleSubmit = (event) => {
  	event.preventDefault();
  	props.onNextClicked();
  	//async function to send data
  }

  return (
    <div>    	
    	<h1 className="f4 f5-ns tc">Store Details</h1>
    	<Form className="mw5 mw6-ns center mt4 mb4" onSubmit={handleSubmit}>
		  <Form.Group controlId="formBasicText">
		    <Form.Label>Name</Form.Label>
		    <Form.Control required type="text" placeholder="BestStoreEva" />
		  </Form.Group>

		  <Form.Group controlId="exampleForm.ControlTextarea1">
		    <Form.Label>Description</Form.Label>
		    <Form.Control as="textarea" rows={3} maxLength={200} placeholder="Add a short description for your awesome store!"/>
		  </Form.Group>
		  
		  <Form.Group>
		    <Form.Label>Tagline</Form.Label>
		    <Form.Control type="text" placeholder="Add your catchy tagline" required />
		  </Form.Group>
		  
	     <Form.Group controlId="exampleForm.ControlSelect1">
		    <Form.Label>Industry</Form.Label>
		    <Form.Control as="select" required>
		    	<Industries />
		    </Form.Control>
		  </Form.Group>

		  <Row>
  			<Col>
		      <Form.Group>
				    <Form.File id="storeLogo" label="Upload Store Logo" />
			  </Form.Group>
			</Col>		
			<Col>			
	  	      <Form.Group>
				    <Form.File id="storeCoverPhoto" label="Upload Cover Photo" />
			  </Form.Group>
			</Col>	  	
		  </Row>

		  <Row className="mt5">
  			<Col>
				<Link to="/dashboard">
				  <Button className="f7 f6-ns w-100 bg-purple"
				    variant="danger"
				    type="submit">
				     Cancel & Quit
	 		  	  </Button>
				</Link>
			</Col>		
			<Col>
			  <Button className="w-100 bg-purple"
			    variant="success"
			    type="submit" >
			     Save & Continue
 		  	 </Button>
			</Col>	  	
		  </Row>
		</Form>
	</div>
  )
}

export default StoreInfoForm;
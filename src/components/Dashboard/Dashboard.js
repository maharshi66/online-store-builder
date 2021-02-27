import React from 'react';
import NavigationRegistered from '../Navigation/NavigationRegistered';
import { Card, Container, Button } from 'react-bootstrap';

const Dashboard = () => {
	return (
		<>
		<NavigationRegistered />
		<div className="pb3">
		<h2 className="f3 f2-ns tc mt2 pa4">Your Stores</h2>
		<Button size="lg" className="ml5 ml5-ns" variant="success">Create New</Button>
		<Container className="mw5 mw6-ns mt3 ba b--light-purple br1 pa1 pa3-ns">
		<Card className="w-90 w-25-ns ma3 pointer">
		  <Card.Body>
		    <Card.Title>Store Name</Card.Title>
		    <Card.Subtitle className="mb-2 text-muted">Store Tagline</Card.Subtitle>
		    <Card.Text>
		      Some quick example text to build on the store name and make up the bulk of
		      the store's content.
		    </Card.Text>
		    <Card.Link href="#">Analytics</Card.Link>
		    <Card.Link href="#">View</Card.Link>
		  </Card.Body>
		</Card>
		<Card className="w-90 w-25-ns ma3 pointer">
		  <Card.Body>
		    <Card.Title>Store Name</Card.Title>
		    <Card.Subtitle className="mb-2 text-muted">Store Tagline</Card.Subtitle>
		    <Card.Text>
		      Some quick example text to build on the store name and make up the bulk of
		      the store's content.
		    </Card.Text>
		    <Card.Link href="#">Analytics</Card.Link>
		    <Card.Link href="#">View</Card.Link>
		  </Card.Body>
		</Card>
		</Container>
		</div>
		</>
	);
}

export default Dashboard;
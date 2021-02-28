import React from 'react';
import { Card } from 'react-bootstrap';
import "tachyons";

const StoreCard = ({title, tagline, descriptionText, link1, link2}) => {
  return (
    <Card className="w-90 w-25-ns ma3 pointer">
		  <Card.Body>
		    <Card.Title>{title}</Card.Title>
		    <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
		    <Card.Text>
		     {descriptionText}
		    </Card.Text>
		    <Card.Link href="#">{link1}</Card.Link>
		    <Card.Link href="#">{link2}</Card.Link>
		  </Card.Body>
	</Card>
  )
}

export default StoreCard;
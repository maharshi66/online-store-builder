import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button } from 'react-bootstrap';

const AllStoresHeader = (props) => {
  return (
		<Row>
			<Col>
				<h2 className="f3 f2-ns tl mt2 pa2">Your Stores</h2>
			</Col>
			<Col className="flex items-center justify-end">
				<Button size="lg" 
						className="mt2 pa1 flex justify-center" 
						variant="success">
						Create New
						<FontAwesomeIcon icon={faWrench} size="sm" className="ml3-ns" />	
				</Button>
			</Col>
		</Row>
  )
}

export default AllStoresHeader;
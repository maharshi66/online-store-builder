import React from 'react';
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from '@fortawesome/free-solid-svg-icons'*/
import { Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const AllStoresHeader = (props) => {
  return (
		<Row>
			<Col>
				<h2 className="f4 f3-ns tl mt2 pa2 dark-gray">Your Stores</h2>
			</Col>
			<Col className="flex items-center justify-end">
				<Link to="/create-store" 
					  className="pb0 white" 
					  style={{textDecoration: "none"}}>
					<button className="br3 grow bg-light-purple pa2 pt3">
							<h1 className="f6 f7-ns fw9 white">Create New</h1>
					</button>
				</Link>
			</Col>
		</Row>
  )
}

export default AllStoresHeader;

/*
	<FontAwesomeIcon 
		icon={faWrench} 	 
		className="ml2" 
	/>*/
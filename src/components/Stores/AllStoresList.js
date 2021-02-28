import React from 'react';
import StoreCard from "./StoreCard";
import {Container, Row} from 'react-bootstrap';
import "tachyons";

const AllStoresList = ({stores}) => {
  return (
    <Container className="mw6 mt3 ba b--light-purple br3 " >
        <Row className="flex justify-between">
    	{      		
            stores.map((store, i) => {
            	return (        			
                  <StoreCard
                     key={store.id}
              			 title={store.storename} 
              			 tagline={store.tagline}
              			 descriptionText="description"
              			 link1={store.link1}
              			 link2={store.link2}
                  /> 
              );
            })
    	}
        </Row>
    </Container>
  )
}

export default AllStoresList;
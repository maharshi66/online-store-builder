import React from 'react';
import StoreCard from "./StoreCard";
import Scroll from "../Scroll/Scroll";
import {Container, Row} from 'react-bootstrap';
import "tachyons";
import "../../assets/Styling/background.css"
import emptySVG from "../../assets/Illustrations/empty.svg";
import { Alert } from 'react-bootstrap';

const AllStoresList = ({stores}) => {
  return (
    <div className="ba bw1 b--light-purple br3">
    <Scroll>
    { stores.length === 0 
      ? <Container className="mw6 ba bw1 b--purple br3">
          <Alert className="mt2" variant="danger">No store found!</Alert>
          <img src={emptySVG} alt={emptySVG} />
        </Container>
      : <Container className="mw6 svgBackground" >
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
    }
    </Scroll>
    </div>
  )
}

export default AllStoresList;
import React from 'react';
import StoreInfoForm from './StoreInfoForm';
import {Button} from 'react-bootstrap';
import "tachyons"
const AllForms = (props) => {
  const CurrForm = () => {
  	let index = props.currentForm % 4;
	switch (index) {
		case 0:
			return <StoreInfoForm onNextClicked={props.onNextClicked} />
		case 1:
			return <div className="mw4 mw6-ns center">Templates</div>
		case 2:
			return <div>Payment Info</div>
		case 3:
			return <div>Finish</div>    				    				
		default:
			return <div>Oops!</div>
	}
  }

  return (
    <div className="measure center relative">
		  <Button
		   variant="primary" onClick={props.onNextClicked} >
		    Next
		  </Button>
    	<CurrForm />
    </div>
  )
}

export default AllForms;


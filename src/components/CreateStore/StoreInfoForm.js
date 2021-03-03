import React from 'react';
import {Button} from 'react-bootstrap';
import "tachyons";

const StoreInfoForm = (props) => {
  return (
    <div>
    	<Button className="mt5 w5" variant="primary" onClick={props.onNextClicked}>Next</Button>
    </div>
  )
}

export default StoreInfoForm;
import React from 'react';
import "tachyons";
import NavbarWithBrand from "../Navigation/NavbarWithBrand";
import CreateStoreBreadcrumb from "./CreateStoreBreadcrumb";

const CreateStore = (props) => {
  return (
  	<>
    <NavbarWithBrand />
    <div>
    	<CreateStoreBreadcrumb />
    </div>
    </>
  )
}

export default CreateStore;
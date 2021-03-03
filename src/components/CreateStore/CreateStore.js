import React from 'react';
import "tachyons";
import NavbarWithBrand from "../Navigation/NavbarWithBrand";
import CreateStoreBreadcrumb from "./CreateStoreBreadcrumb";
import StoreInfoForm from "./StoreInfoForm";

class CreateStore extends React.Component {
  
  	constructor(props){
  		super(props);
  		this.state = {
  			count: 1,
  			logoColor: ["light-gray", "near-black", "near-black", "near-black"],
  		}
  	}

  	markActiveGray = (arr, count) => {
  		let newarr = arr; 
  		const newnew = newarr.map((logo, i) => {
  			return i === count ? "light-gray" : "near-black";
  		});

  		console.log("newnew: ", newnew);
  		return newnew;
  	}

  	onNextClicked = () => {
  		// console.log(this.state.count, this.state.logoColor);
  		if(this.state.count >= 3){
	  		this.setState({count: 0});
  		}else{
	  		this.setState({count: this.state.count + 1});
  		}
  		this.setState({logoColor: this.markActiveGray(this.state.logoColor, this.state.count) });
  	}

  	render(){
	const {logoColor} = this.state;
	  return (
	  	<>
	    <NavbarWithBrand />
	    <div>
	    	<CreateStoreBreadcrumb logoColor={logoColor} />
	    	<StoreInfoForm onNextClicked={this.onNextClicked} />
	    </div>
	    </>
	  )
	}
}

export default CreateStore;
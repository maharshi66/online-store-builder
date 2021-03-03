import React from 'react';
import "tachyons";
import NavbarWithBrand from "../Navigation/NavbarWithBrand";
import CreateStoreBreadcrumb from "./CreateStoreBreadcrumb";
import AllForms from "./AllForms";

class CreateStore extends React.Component {  
  	constructor(props){
  		super(props);
  		this.state = {
  			count: 0,
  			logoColor: ["light-gray", "near-black", "near-black", "near-black"],
  		}
  	}

  	markActiveLogo = (arr, count) => {
  		let newarr = arr; 
  		const newnew = newarr.map((logo, i) => {
  			return i === (count % 4) ? "light-gray" : "near-black";
  		});

  		console.log("newnew: ", newnew);
  		return newnew;
  	}

  	onNextClicked = () => {
  		this.setState((state) => ({
          count: ++state.count,      
          logoColor: this.markActiveLogo(state.logoColor, state.count)
        })
      );
    }

  	render(){
  	const {count, logoColor} = this.state;
	  
    return (
	  	<>
	    <NavbarWithBrand />
	    <div>
	    	<CreateStoreBreadcrumb logoColor={logoColor} />
	    	<AllForms currentForm={count} onNextClicked={this.onNextClicked}/>
	    </div>
	    </>
	  )
	}
}

export default CreateStore;
import React from 'react';
import NavigationUnregistered from '../Navigation/NavigationUnregistered';
/*import webShoppingSVG from '../../assets/web_shopping.svg';
import addToCardSVG from '../../assets/add_to_cart.svg';
import walletSVG from '../../assets/wallet.svg';
import dashboardSVG from '../../assets/dashboard.svg';*/
import 'tachyons';
import Footer from '../Footer/Footer';

export default function LandingPage() {
	return(
		<body>
			<NavigationUnregistered />
			<div class="mw9 center ph3-ns vh-100">
			  <div class="cf ph2-ns">
			    <div class="fl w-third pa2">
			      <div class="outline bg-white pv4"></div>
			    </div>
			    <div class="fl w-two-thirds pa2">
			      <div class="outline bg-white pv4"></div>
			    </div>
			    <div class="fl w-two-thirds pa2">
			      <div class="outline bg-white pv4"></div>
			    </div>
			    <div class="fl w-third pa2">
			      <div class="outline bg-white pv4"></div>
			    </div>
			  </div>
			</div>
			<Footer />
		</body>
	);
}

/*
			<div class="center cf pa4-l w-100-ns bg-white vh-100 overflow mb2">			  
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mb2">
				      <div class="bg-white pv1 mb3 mb5-ns">
				      	<h1 className="f3 f1-ns tc">Build stores rapidly</h1> 
				      </div>
					  <div class="bg-white pv4 h5">
					  	<img className="w-100 h5" src={webShoppingSVG} alt="webShoppingSVG" />
					  </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mt2 mb2">
				      <div class="bg-white pv4 mb3 mb5-ns h5">
				      	<img className="w-100 h5" src={addToCardSVG} alt="addToCardSVG" />
				      </div>
				      <div class="bg-white pv1">
				      <h1 className="f3 f1-ns tc">Build stores rapidly</h1>
				      </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mb2 mt2">
				      <div class="bg-white pv1 mb3 mb5-ns">
				      	<h1 className="f3 f1-ns tc">Build stores rapidly</h1> 
				      </div>
					  <div class="bg-white pv4 h5">
					  	<img className="w-100 h5" src={walletSVG} alt="walletSVG" />
					  </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mt2">
				      <div class="bg-white pv4 mb3 mb5-ns h5">
				      	<img className="w-100 h5" src={dashboardSVG} alt="dashboardSVG" />
				      </div>
				      <div class="bg-white center pv1">
					      <h1 className="f3 f1-ns tc">Build stores rapidly</h1>
				      </div>
				    </div>
				</div>

*/
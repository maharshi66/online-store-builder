import React from 'react';
import NavigationUnregistered from '../Navigation/NavigationUnregistered';
import webShoppingSVG from '../../assets/Illustrations/web_shopping.svg';
import addToCartSVG from '../../assets/Illustrations/add_to_cart.svg';
import mobilePay from '../../assets/Illustrations/mobile_pay.svg';
// import dashboardSVG from '../../assets/Illustrations/dashboard.svg';
import Footer from '../Footer/Footer';
import { Row, Col } from 'react-bootstrap';
import 'tachyons';
import '../../assets/Styling/fonts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
	return(
		<div className="globalFont">
			<div className="navUnregisteredBg w-100">
				<NavigationUnregistered />
			    <h1 className="f1-ns f4 tc pv6 white">Blazing Fast e-Commerce
					<FontAwesomeIcon icon={faBolt} className="ml1 yellow" size="lg" />
			    </h1>
			</div>
			<Row className="pa5">
				<Col className="pv4-ns pv2 pa2" xs={12} sm={12} lg={4} md={4}>
					<img src={webShoppingSVG} alt="web_shopping" />
					<h3  className="f3-ns f6 tc mt5-ns">State-Of-The-Art Online Stores</h3>
					<p className="f4-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
				<Col className="pv4-ns pv2 pa2" xs={12} sm={12} lg={4} md={4}>
					<img src={addToCartSVG} alt="add_to_cart" />
					<h3 className="f3-ns f6 tc mt5-ns">Free Store Templates</h3>
					<p className="f4-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
				<Col className="pv4-ns pv3" xs={12} sm={12} lg={4} md={4}>
					<img src={mobilePay} alt="mobile_pay" />
					<h3  className="f3-ns f6 tc mt5-ns">Secure Payment</h3>
					<p className="f4-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
			</Row>
			<Footer position="relative" />
		</div>
	);
}

export default LandingPage;

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
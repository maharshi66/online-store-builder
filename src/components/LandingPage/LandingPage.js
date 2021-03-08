import React from 'react';
import NavigationUnregistered from '../Navigation/NavigationUnregistered';
import webShoppingSVG from '../../assets/Illustrations/web_shopping.svg';
import addToCartSVG from '../../assets/Illustrations/add_to_cart.svg';
import mobilePay from '../../assets/Illustrations/mobile_pay.svg';
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
			<Row className="ph5">
				<Col className="pv4-ns pv2 pa2 mb2" xs={12} sm={12} lg={4} md={4}>
					<img className="flex w-75-ns center" src={webShoppingSVG} alt="web_shopping" />
					<h3  className="f4-ns f6 tc mt5-ns">State-Of-The-Art Online Stores</h3>
					<p className="f5-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
				<Col xs={12} sm={12} lg={4} md={4} className="pv4-ns pv2 pa2" >
					<img className="flex w-75-ns center" src={addToCartSVG} alt="add_to_cart" />
					<h3 className="f4-ns f6 tc mt5-ns">Free Store Templates</h3>
					<p className="f5-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
				<Col className="pv4-ns pv3" xs={12} sm={12} lg={4} md={4}>
					<img  className="flex w-75-ns center" src={mobilePay} alt="mobile_pay" />
					<h3  className="f4-ns f6 tc mt5-ns">Secure Payment</h3>
					<p className="f5-ns f7 tc mb5">Some sample text explaining the point</p>
				</Col>
			</Row>
			<Footer position="relative" />
		</div>
	);
}

export default LandingPage;
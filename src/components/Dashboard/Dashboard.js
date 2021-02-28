import React from 'react';
import NavigationRegistered from '../Navigation/NavigationRegistered';
import Footer from '../Footer/Footer';
import AllStoresHeader from '../Stores/AllStoresHeader';
import AllStoresList from '../Stores/AllStoresList';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from 'react-bootstrap';
import {stores} from '../../stores';

export default function  Dashboard() {
	return (
		<>
		<NavigationRegistered />
		<Container className="pb3">
			<AllStoresHeader />
			<SearchBar />
			<AllStoresList stores={stores}/>
		</Container>
		<Footer />
		</>
	);
}
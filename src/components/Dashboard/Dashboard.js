import React from 'react';
import NavigationRegistered from '../Navigation/NavigationRegistered';
import Footer from '../Footer/Footer';
import AllStoresHeader from '../Stores/AllStoresHeader';
import AllStoresList from '../Stores/AllStoresList';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from 'react-bootstrap';
import {stores} from '../../stores';

class Dashboard extends React.Component {
	
	constructor(){
		super();
		this.state = {
			allstores: [],
 		    searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({allstores: stores})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render(){
		const { allstores, searchfield } = this.state;
    	const filteredStores = allstores.filter(store =>{
      		return store.storename.toLowerCase().includes(searchfield.toLowerCase());
    	});
		
		return (
			<div>
			<NavigationRegistered />
			<Container className="pa3">
				<AllStoresHeader />
				<SearchBar searchChange={this.onSearchChange}/>
				<AllStoresList stores={filteredStores}/>
			</Container>
			<Footer position="relative"/>
			</div>
		);
	}
}

export default Dashboard;
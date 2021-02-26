import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import SignUp from '../components/SignUp/SignUp';
import LogIn from '../components/LogIn/LogIn';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRouter from '../components/PrivateRouter/PrivateRouter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
        <Router>
      		<Switch>
  		    	<Route exact path="/" component={LandingPage} />
            <PrivateRouter path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LogIn} />
  		    	<Route path="/signup" component={SignUp} />
  	    	</Switch>
      	</Router>
    </AuthProvider>
  );
}

export default App;

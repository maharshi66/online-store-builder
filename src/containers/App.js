import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import SignUp from '../components/SignUp/SignUp';
import LogIn from '../components/LogIn/LogIn';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import Dashboard from '../components/Dashboard/Dashboard';
import CreateStore from '../components/CreateStore/CreateStore';
import PrivateRouter from '../components/PrivateRouter/PrivateRouter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import "tachyons";

function App() {
  return (    
    <AuthProvider>
        <Router>
      		<Switch>
  		    	<Route exact path="/" component={LandingPage} />
            <PrivateRouter path="/dashboard" component={Dashboard} />
  		    	<Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/create-store" component={CreateStore} />
  	    	</Switch>
      	</Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import SignUp from '../components/SignUp/SignUp';
import LogIn from '../components/LogIn/LogIn';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
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
  		    	<Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/update-profile" component={UpdateProfile} />
  	    	</Switch>
      	</Router>
    </AuthProvider>
  );
}

export default App;

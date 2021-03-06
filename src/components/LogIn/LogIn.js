import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import BrandHeader from '../BrandHeader/BrandHeader';

export default function LogIn() {
	const emailRef = useRef(); 
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
 	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault()

		try{
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/dashboard");
		}catch{
			setError("Failed to login!");
		}
		setLoading(false);	
	}

	return (
		<>
	    	<Link to="/" style={{textDecoration: "none"}}>
		    	<div className="f2 f1-ns pointer tc mt4">
			    	<BrandHeader  />
		    	</div>	    	
		    </Link>
			<Card 
				style={{background: "#b19cd9"}}
				className="mw6 center w-75 w-100-ns ma5 h6"
			    text="white">
				<Card.Body>
					<h2 className="tc f2-ns f4 mb-4">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group  className="f5-ns f7" id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group className="f5-ns f7" id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100 bg-light-purple" variant="success" type="submit">Submit</Button>					
					</Form>
					<div className="w-100 tc mt-2">
						<Link to="/forgot-password"
							className="dim f6-ns f7 light-gray pa2 hover-blue" 
				      		style={{ textDecoration: 'none' }}>
				      		Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 tc f5-ns f7">
				Don't have an account? 
				<Link to="/signup" 
					className="dim purple pa2 hover-blue" 
		      		style={{ textDecoration: 'none' }}>Sign Up
	      		</Link>
			</div>
		</> 
	);
}
import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import BrandHeader from '../BrandHeader/BrandHeader';

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault()

		try{
			setError('');
			setMessage('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox for reset instructions');
		}catch{
			setError("Failed to reset password!");
		}
		setLoading(false);	
	}

	return (
		<>
	    	<div className="f2 f1-ns pointer tc mt4">
		    	<BrandHeader />
	    	</div>	    
			<Card 
				style={{background: "#b19cd9"}}
				className="mw6 center w-75 w-100-ns ma5"
			    text="white">				
			    <Card.Body>
					<h2 className="tc f2-ns f4 mb-4">Password Reset</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					{message && <Alert variant="success">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label className="f5-ns f7">Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100" variant="success" type="submit">Reset Password</Button>					
					</Form>
					<div className="w-100 text-center mt-2">
						<Link to="/login"
							className="dim light-gray pa2 hover-blue f6-ns f7" 
				      		style={{ textDecoration: 'none' }}>Cancel
				      	</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 tc f6-ns f7">
				Don't have an account? 
				<Link to="/signup" 		      		
					className="dim purple pa2 hover-blue" 
		      		style={{ textDecoration: 'none' }}>Sign Up
		      	</Link>
			</div>
		</> 
	);
}
import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

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
			<h1 className="f2 f1-ns brandText purple pointer tc mt4">
			Purplish
			</h1>
			<Card 
				className="mw6 center w-75 w-100-ns ma5"
				bg="dark"
			    text="white">				
			    <Card.Body>
					<h2 className="text-center mb-4">Password Reset</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					{message && <Alert variant="success">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100" type="submit">Reset Password</Button>					
					</Form>
					<div className="w-100 text-center mt-2">
						<Link to="/login"
							className="dim light-gray pa2 hover-blue mr4" 
				      		style={{ textDecoration: 'none' }}>Cancel
				      	</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Don't have an account? <Link to="/signup" 		      		
					className="dim purple pa2 hover-blue mr4" 
		      		style={{ textDecoration: 'none' }}>Sign Up</Link>
			</div>
		</> 
	);
}
import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import "tachyons";
import BrandHeader from '../BrandHeader/BrandHeader';


export default function SignUp() {
	const emailRef = useRef(); 
	const passwordRef = useRef();
	const passwordConfirmRef = useRef(); 
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault()
		if(passwordRef.current.value !== passwordConfirmRef.current.value){
			return setError('Passwords do not match!');
		}
		try{
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push("/dashboard")
		}catch{
			setError("Failed To setup account");
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
				className="mw6 center w-75 w-100-ns ma5"
			    text="white">
				<Card.Body>
					<h2 className="tc f2-ns f4 mb-4">Sign Up</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit} >
						<Form.Group id='email'>
							<Form.Label className="f5-ns f7">Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label className="f5-ns f7">Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id='password-confirm'>
							<Form.Label className="f5-ns f7">Confirm Password</Form.Label>
							<Form.Control type="password" ref={passwordConfirmRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100" variant="success" type="submit">Create Account</Button>					
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center">
				Already have an account? <Link to="/login" 
				className="dim purple pa2 hover-blue" 
	      		style={{ textDecoration: 'none' }}>Log In</Link>
			</div>
		</> 
	);
}


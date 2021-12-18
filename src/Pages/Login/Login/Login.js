import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./Login.css"
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const { signInWithGoogle, signInWithEmail, getNewUserPassword, getNewUserEmail, error, setUser, setError, storeGoogleUserDb } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location?.state?.from || "/home";

    const handleEmailLogin = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then(result => {
                setUser(result.user);
                navigate(redirect);
            }).catch((err) => {
                setError(err.message)
            })

    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                storeGoogleUserDb(user.email, user.displayName)
                navigate(redirect);
            }).catch((err) => {
                setError(err.message)
            })
    }

    return (
        <div className='login '>
            <Row className='m-0 p-0'>
                <Col md={6}></Col>
                <Col md={6} className='d-flex ps-5' style={{ marginTop: "150px" }}>

                    <Form className="border p-5 rounded shadow">
                        <h2 className=' text-center'>Welcome!</h2>
                        <h3 className=' text-center'>Please Login!</h3>
                        <hr />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></InputGroup.Text>
                            <FormControl onBlur={getNewUserEmail} type="email" required
                                placeholder="Your Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                            <FormControl required onBlur={getNewUserPassword}
                                placeholder="Password" type="password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div className="text-danger">
                            <p>{error}</p>
                        </div>
                        <Button type="submit" className="w-100 loginBtn" variant="outline-dark" onClick={handleEmailLogin}>Log-In </Button>

                        <br /><br />
                        <Button className="w-100" variant="outline-dark" onClick={handleGoogleLogin}>Log-In with <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></Button>
                        <p className="mt-2">
                            <NavLink className="text-decoration-none" to="/register">
                                Need an Account? Please Sign up!
                            </NavLink>
                        </p>
                    </Form>

                </Col>

            </Row>


        </div >
    );
};

export default Login;
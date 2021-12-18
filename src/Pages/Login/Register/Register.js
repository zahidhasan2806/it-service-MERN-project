import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { handleSubmitForm, getNewUserEmail, getNewUserPassword, error, getNewUserName, setUser, setUserName, emailVerification, setError, name, email, storeUserDb } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const redirect = location?.state?.from || "/home";

    const handlCreateUser = (e) => {
        e.preventDefault();
        handleSubmitForm()
            .then(result => {
                let user = result.user;
                user.email = email;
                user.displayName = name;
                setUser(user);
                storeUserDb(user.email, user.displayName)
                setUserName();
                emailVerification();
                navigate(redirect);
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return (
        <div className='login '>
            <Row className='m-0 p-0'>
                <Col md={6}></Col>
                <Col md={6} className='d-flex ps-5' style={{ marginTop: "150px" }}>

                    <Form className="border p-5" >
                        <div className='text-center'>
                            <h3>Welcome to Colorzen!</h3>
                            <h6>Please Register!</h6>
                        </div>
                        <hr />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></InputGroup.Text>
                            <FormControl onBlur={getNewUserName}
                                required placeholder="Enter Your Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" required><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                            <FormControl onBlur={getNewUserEmail} required type="email"
                                placeholder="Enter Your Email"
                                aria-label="UserEmail"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon
                                icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                            <FormControl onBlur={getNewUserPassword} required type="password"
                                placeholder="Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button onClick={handlCreateUser} className="w-100" variant="outline-dark">Register </Button>
                        <div className="text-danger">
                            <p className="text-danger">{error}</p>
                        </div>
                        <p className="mt-2">
                            <NavLink className="text-decoration-none" to="/login">
                                Already have an Account? Please Login!
                            </NavLink>
                        </p>
                    </Form>

                </Col>

            </Row>


        </div >
    );
};

export default Register;
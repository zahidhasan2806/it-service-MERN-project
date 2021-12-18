import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navItem rounded '>
            <Container className='py-2'>
                <Navbar.Brand href="#home" className=' text-white fs-4 f fw-bold fst-italic'>Colorzen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home" className='text-white fw-bold fs-6 ' >Home</Nav.Link >
                        <Nav.Link as={NavLink} to="/home" className='text-white fw-bold fs-6 ' >About</Nav.Link >
                        <Nav.Link as={NavLink} to="/services" className='text-white fw-bold fs-6 ' >Services</Nav.Link >
                        <Nav.Link as={NavLink} to="/contact" className='text-white fw-bold fs-6 ' eventKey={2} >
                            Contact
                        </Nav.Link>

                        {
                            user?.email ?
                                <Nav.Link as={NavLink} to="/login" onClick={logOut} className='text-white fw-bold fs-6 ' >Logout</Nav.Link >
                                : <Nav.Link as={NavLink} to="/login" className='text-white fw-bold fs-6 ' >Login</Nav.Link >
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;
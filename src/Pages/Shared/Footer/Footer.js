import { faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ 'background': 'linear-gradient(to top, #525252, #3d72b4)', 'minHeight': '250px', 'borderRadius': '70px 0 0 0' }}>
            <Container className='text-dark'>
                <Row>
                    <Col md={5}>
                        <div className='text-white px-5 pt-4'>
                            <h5 className='text-uppercase mb-3'>Colorzen</h5>
                            <p>We want to do more than just paint your home or business. It is our goal to provide a level of service that goes above and beyond the norm in our industry. Our customers keep coming back to us for a reason – we live up to our promises and treat our customers as we would want to be treated.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='px-5 pt-4 text-center text-white'>
                            <h5 className='mb-3 text-uppercase'>Quick Links</h5>

                            <NavLink to='/home' className='text-white text-decoration-none fs-6'>Home</NavLink><br />
                            <NavLink to='/service' className='text-white text-decoration-none fs-6'>Service</NavLink><br />
                            <NavLink to='/about' className='text-white text-decoration-none fs-6'>About Us</NavLink><br />
                            <NavLink to='/contact' className='text-white text-decoration-none fs-6'>Contact</NavLink><br />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='px-5 pt-4  text-white'>
                            <h5 className='mb-3 text-uppercase'>Address</h5>
                            <p>59,GM Bari,North Badda <br />Dhaka, Bangladesh</p>

                            <h6>Follow us-</h6>
                            <hr />
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faTwitter} /></a>

                            <a href="https://www.facebook.com/"><FontAwesomeIcon className='text-primary fs-5 mx-1' icon={faFacebook} /></a>

                            <a href="https://www.instagram.com/"><FontAwesomeIcon className='text-danger fs-5 mx-1' icon={faInstagram} /></a>

                            <a href="https://www.skype.com/en/"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faSkype} /></a>


                        </div>
                    </Col>
                </Row>
                <hr className='text-white' />

                <p className="text-white text-center text-opacity-75 m-0">Copyright &copy;2021 All Rights Reserved | This Website is made  by MD ZAHID HASAN </p>

            </Container>

        </div >
    );
};

export default Footer;
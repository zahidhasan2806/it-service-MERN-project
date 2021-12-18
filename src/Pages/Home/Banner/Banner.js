import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col md={4} sm={4}>

                    </Col>
                    <Col md={8}>
                        <div style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center'>
                            <div>

                                <h1 className='fw-bold'>Painting Houses is <br /> Our Passion</h1>
                                <p>We make it a priority to offer flexible services to accommodate you needs .</p>
                                <Button variant='success' className='bannerBtn p-3 fw-bold'>Get in Touch <FontAwesomeIcon icon={faArrowRight} /></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
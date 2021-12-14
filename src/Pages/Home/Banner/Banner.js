import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col md={8} sm={4}>
                        <div style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center '>
                            <div>
                                <p className='text-start'>It Solutions . Services Company</p>
                                <h1 className='fw-bold'>Transforming Into Digital <br /> Software Company.</h1>
                                <p>We develop effective plans to move your customers behaviour.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
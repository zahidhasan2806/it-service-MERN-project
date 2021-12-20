import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <Row className='about m-0  p-0 g-0'>
            <Col md={6} className=''>

            </Col>
            <Col md={6} className='pt-5 aboutInfo text-white'>
                <p className='title'>About us</p>
                <h4 className='text'>Explore About <br /> Painting Services <br /> Success History</h4>
                <h6>The Painting Company is the top Residential & Commercial Painting Company serving near you.</h6>
                <p>At The Painting Company, we believe in exceptional customer service and integrity of our work. What this means to us is that we are not satisfied until you are satisfied. We go the extra mile with each and every customer to ensure the highest level of customer service. It is the consistent flow of happy customers that keeps us growing strong.</p>
            </Col>
        </Row>
    );
};

export default About;
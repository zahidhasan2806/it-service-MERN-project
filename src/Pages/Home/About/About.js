import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <Row className='about m-0  p-0 g-0'>
            <Col md={6} className=''>

            </Col>
            <Col md={6} className='pt-5 aboutInfo'>
                <p className='title'>About us</p>
                <h4 className='text'>Explore About <br /> Painting Services <br /> Success History</h4>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eos non placeat.</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quibusdam expedita mollitia, aspernatur neque eos. Eaque nobis quas id, natus iste nam optio hic maiores quidem libero. Ab asperiores recusandae eos amet libero sed quam iusto quos, accusantium nobis, officia quasi eum saepe? Eaque ut perferendis, nostrum impedit quae eius?</p>
            </Col>
        </Row>
    );
};

export default About;
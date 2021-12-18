import { faClock, faComment, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clock from '../../../Images/clock.png'
import love from '../../../Images/love.jpg'
import star from '../../../Images/star.svg'
import './OurMission.css'

const OurMission = () => {
    return (
        <Container className='my-5 py-5'>
            <Row>
                <Col md={4}>
                    <div className='text-center'>
                        <img className='missionImg' src={star} alt="" />

                        <h4 className='title'>We Paint Lives, Not Houses</h4>
                        <p>We paint your house like you can feel the color.A beautifully designed color can change one's mood and give a relex.</p>
                    </div>

                </Col>
                <Col md={4}>
                    <div className='text-center'>
                        <img className='missionImg' src={love} alt="" />

                        <h4 className='title'>We Respect Everyone's Property</h4>
                        <p>We are very much concern about our customers property.Before we start work we ensure that their property doesn't get any damage.</p>
                    </div>


                </Col>
                <Col md={4}>
                    <div className='text-center'>
                        <img className='missionImg' src={clock} alt="" />

                        <h4 className='title'>We Arrive On Time</h4>
                        <p>We are very much punctual.We always make sure to come as early as possible and finish the proccess before deadline.</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default OurMission;
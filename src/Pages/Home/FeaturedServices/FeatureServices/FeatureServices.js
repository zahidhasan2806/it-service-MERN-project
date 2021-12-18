import React from 'react';
import { faAward, faHome, faUserCog, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../../Hooks/useServices';
import Service from '../../../Services/Service/Service';

import "./FeaturedServices.css"


const FeatureServices = () => {
    const services = useServices()
    return (
        <div className='my-5 pb-5 featuredServices' >
            <Container>
                <div className='text-center ' data-aos="fade-right">
                    <Row className='aboutService text-white'>
                        <Col className='p-3' style={{ "backgroundColor": 'rgba(198,27,97,1)' }}>
                            <h1>  <FontAwesomeIcon icon={faHome} /> 1.5k</h1>
                            <h2>Project has completed</h2>
                        </Col>
                        <Col className='p-3' style={{ "backgroundColor": 'rgba(74,89,173,1)' }}>
                            <h1>     <FontAwesomeIcon icon={faUserCog} /> 25</h1>
                            <h2>Professional Employe in the company</h2>
                        </Col>
                        <Col className='p-3' style={{ "backgroundColor": 'rgba(7,195,157,1) ' }}>
                            <h1>            <FontAwesomeIcon icon={faUserTie} /> 10+</h1>
                            <h2>Customers benifit Everyday</h2>
                        </Col>
                        <Col className='p-3' style={{ "backgroundColor": 'rgba(198,27,97,1)' }}>
                            <h1><FontAwesomeIcon icon={faAward} />  3</h1>
                            <h2>Received Awards & Certifications</h2>
                        </Col>
                    </Row>
                </div>
                <div className='mt-5'>
                    <h1>Our Featured Services</h1>

                    <Row className='m-0'>
                        {
                            services.slice(0, 3).map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FeatureServices;
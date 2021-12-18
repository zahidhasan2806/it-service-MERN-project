import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Navigation from '../../Shared/Navigation/Navigation';
import Service from '../Service/Service';

const Services = () => {

    const services = useServices();
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <h3>Available Services</h3>
                <Row className='g-3 '>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;
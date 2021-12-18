import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const { name, picture1, price, _id } = props.service
    return (
        <Col md={4}>
            <Card className="mx-1  shadow">
                <Card.Img style={{ height: "250px" }} variant="top" src={picture1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='m-0 p-0'>
                    <Button as={Link} to={`/services/${_id}`} className="serviceBtn w-100">View Details</Button>
                </Card.Footer>
            </Card>

        </Col >
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { Alert, Container, Spinner, Table } from 'react-bootstrap';

import ManageAllService from '../ManageAllService/ManageAllService';

const ManageAllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "https://mighty-basin-01559.herokuapp.com/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <div>
                <h3 className="text-start fw-bold fs-2">All Services List</h3>
                <hr />
            </div>
            <Table striped borderless responsive hover size="sm">
                <thead>
                    <tr className='text-center'>
                        <th>Service Name</th>
                        <th>Service ID</th>
                        <th>Price</th>
                        <th>Delete Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => (<ManageAllService key={service._id} service={service}></ManageAllService>))
                    }
                </tbody>
            </Table>
            <Alert variant='danger'>This section only for Admin.Here admin can delete All Services showing In UI</Alert>

        </Container >
    );
};

export default ManageAllServices;
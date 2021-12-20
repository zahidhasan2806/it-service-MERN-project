import React, { useEffect, useState } from 'react';
import { Alert, Container, Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://mighty-basin-01559.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <Container>
            <div className="text-start mt-5">
                <h2 className="fw-bold">Manages All Orders</h2>
                <hr />
            </div>
            <Table striped borderless responsive hover size="sm">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Package Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Estimate Date</th>
                        <th>Status</th>
                        <th>Confirm</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (<ManageAllOrder key={order._id} order={order}></ManageAllOrder>))
                    }
                </tbody>
            </Table>
            <Alert variant='danger'>This section only for Admin.Here admin can delete and confirm shipping status</Alert>
        </Container >
    );
};

export default ManageAllOrders;
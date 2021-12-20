import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://mighty-basin-01559.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const myOrders = orders.filter(order => user.email === order.email);
    return (
        <Container>
            <div>
                <h2 className='title'>{user.displayName}'s All Orders</h2>
                <hr />
                <Table striped borderless responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Estimate Date</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(order => (<MyOrder key={order._id} order={order}></MyOrder>))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MyOrders;
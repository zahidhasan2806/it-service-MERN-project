import React, { useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { admin } = useAuth()
    const [email, SetEmail] = useState("")
    const [confirm, setConfirm] = useState(false)
    const handleAdminEmail = (e) => {
        SetEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
        const user = { email }
        fetch('https://mighty-basin-01559.herokuapp.com/users/admin',
            {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setConfirm(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <Form onSubmit={handleMakeAdmin} className="w-50 mx-auto p-3 border rounded">

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" onBlur={handleAdminEmail} />
                </FloatingLabel>
                {admin ? <Button type="submit" variant="outline-success" className="mt-3">Make Admin</Button> : <Button type="submit" disabled variant="outline-success" className="mt-3">Make Admin</Button>}
                {confirm && <Alert variant="success">
                    Made admin successfully!
                </Alert>}
                <Alert variant='danger'>This section only for Admin.Here admin can make another admin.</Alert>
            </Form>
        </div>
    );
};

export default MakeAdmin;
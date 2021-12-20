import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllOrder = (props) => {
    const { name, service, address, date, Contact, status, _id, email } = props.order

    const handleDelete = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete this order?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mighty-basin-01559.herokuapp.com/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "", "success");
                            window.location.reload()
                        }
                    });
            }
        });
    }


    const handleUpdateStatus = () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure to Update the status?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const updatedStatus = { status: "shipped" };
                    const url = `https://mighty-basin-01559.herokuapp.com/orders/${_id}`;

                    fetch(url, {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(updatedStatus)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                Swal.fire("Updated!", "", "Success");
                                window.location.reload()
                            }

                        })
                }
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{Contact}</td>
            <td>{address}</td>
            <td>{date}</td>
            <td>
                {status === "shipped" && <FontAwesomeIcon
                    className="text-success" icon={faCheck} />}
                {status}
            </td>
            <td>
                <Button onClick={handleUpdateStatus} variant="secondary" className="btn btn-success w-100">
                    Confirm
                </Button>


            </td>
            <td><button onClick={() => { handleDelete(_id) }} className="btn btn-danger w-100">Delete</button></td>
        </tr >
    );
};

export default ManageAllOrder;
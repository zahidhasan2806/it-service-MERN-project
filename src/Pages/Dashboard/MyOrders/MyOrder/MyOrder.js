import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';

const MyOrder = (props) => {
    const { service, price, date, Contact, status, _id } = props.order

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
    return (
        <tr>
            <td>{service}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>{Contact}</td>
            <td>
                {status === "shipped" && <FontAwesomeIcon className="text-success" icon={faCheck} />}
                {status}
            </td>
            <td><Button onClick={() => { handleDelete(_id) }} className="btn btn-danger w-100">Delete</Button></td>

        </tr>
    );
};

export default MyOrder;
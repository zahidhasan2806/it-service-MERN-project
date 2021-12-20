import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const ManageAllService = (props) => {
    const { admin } = useAuth()
    const { name, price, _id } = props.service;
    const handleDeleteService = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete this service?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mighty-basin-01559.herokuapp.com/services/${id}`, {
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
        <tr className='text-center'>
            <td>{name}</td>
            <td>{_id}</td>
            <td>{price}</td>
            <td> {admin ? <button onClick={() => { handleDeleteService(_id) }} className="btn btn-danger w-100">Delete</button>
                : <button onClick={() => { handleDeleteService(_id) }} className="btn btn-danger w-100" disabled>Delete</button>}</td>
        </tr>
    );
};

export default ManageAllService;
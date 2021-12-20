import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
const Reviews = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post('https://mighty-basin-01559.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Thanks For You Valuable Review',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    reset();
                }
            })
    };
    return (
        <Container className='w-75'>
            <div >

                <h2 className="text-dark pt-5 text-uppercase">Add Review</h2>

                <form className=" border p-5 rounded shadow text-center" onSubmit={handleSubmit(onSubmit)}>
                    {user.displayName && <input className=" m-2 w-50 w-md-100 px-4 py-2 " value={user.displayName} {...register("name", { required: true })} />}
                    <input className=" m-2 w-50 w-md-100 px-4 py-2" placeholder='Provide a Image link' {...register("profileImage")} />

                    <input className="m-2 w-50 w-md-100 px-4 py-2" placeholder="Address"{...register("address", { required: true })} />
                    <input className="m-2 w-50 w-md-100 px-4 py-2" placeholder="Designation"{...register("designation", { required: true })} />

                    <textarea className="m-2 w-50 w-md-100 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                    <br />
                    <select {...register("Rating")} className='m-2 w-50 w-md-100 px-4 py-2'>
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                    </select>


                    < input className="m-2 btn btn-info w-50 w-md-100" type="submit" value="Add Review" />

                </form>

            </div>

        </Container>
    );
};

export default Reviews;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
const Reviews = () => {
    const [rating, setRating] = useState(5);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };
    return (
        <Container>
            <div className="mt-5">
                <h2 className="text-dark pt-5 text-uppercase">Add Review</h2>
                <div className="d-flex justify-content-center ">
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className=" m-2 w-50 px-4 py-2"  {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Address"{...register("address", { required: true })} />

                        <textarea className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                        <br />

                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add Review" />

                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Reviews;
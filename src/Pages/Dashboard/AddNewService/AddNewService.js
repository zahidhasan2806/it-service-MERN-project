import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const fileInput = React.createRef();
const fileInput2 = React.createRef();
const AddNewService = () => {
    const { admin } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        let picture1 = fileInput.current.files[0]
        let picture2 = fileInput.current.files[0]
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('picture1', picture1)
        formData.append('picture2', picture2)


        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire("Success");
                    reset()
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <Container className="  my-5 ">
            <h4>Add New Product </h4>.
            <form className="pt-5 pb-2 mb-3 text-center borderless shadow rounded mx-auto w-50" onSubmit={handleSubmit(onSubmit)}>

                <input className="m-3 w-75 px-4 py-2" {...register("name", { required: true })} placeholder="Service Name" />
                <br />
                {errors.name && <span className='text-danger'>This field is required</span>}
                <textarea className="m-3 w-75 px-4 py-2" {...register("desc", { required: true })} placeholder="Description" />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.description && <span className='text-danger'>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("price", { required: true })} type="number" placeholder="Service Price" />          <br />
                {errors.price && <span className='text-danger'>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("time", { required: true })} placeholder="time" />          <br />
                {errors.time && <span className='text-danger'>This field is required</span>}
                <input className="m-3 w-75 px-4 py-2" {...register("phone", { required: true })} placeholder="Phone Number" />          <br />
                {errors.phone && <span className='text-danger'>This field is required</span>}

                <input type='file' accept='image/*' className="m-3 w-75 px-4 py-2" ref={fileInput} />
                <input type='file' accept='image/*' className="m-3 w-75 px-4 py-2" ref={fileInput2} />



                {admin ? <input className="m-3 w-75 px-4 py-2" type="submit" value="Add Product" /> : <input disabled className="m-3 w-75 px-4 py-2" type="submit" value="Add Product" />}
            </form>
            <Alert variant='danger'>This section only for Admin.Here admin can add a new service showing in UI.</Alert>
        </Container>
    );
};

export default AddNewService;
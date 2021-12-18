import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Serviceservices = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsLoading(false))
    }, [])

    // handle submit
    const onSubmit = data => {

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service Booked Successfully!!");
                    reset();
                    setShow(false)
                }
            })
    };



    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <div>
                <Navigation></Navigation>
                <div>
                    <Container>
                        <div className="text-start py-5">
                            <h2 >Service we provide</h2>
                            <hr className='w-25' />
                        </div>
                        <Row >
                            <Col md={6}>
                                <Row className='g-0' style={{ background: "linear-gradient(to right, #d9a7c7, #fffcdc)" }}>
                                    <Col md={6}>
                                        <img style={{ height: "300px" }} data-aos="fade-right" className='img-fluid rounded shadow w-100' src={services.picture2} alt="" />
                                    </Col>
                                    <Col md={6}>

                                    </Col>
                                    <Col md={6}>

                                    </Col>
                                    <Col md={6}>
                                        <img style={{ height: "300px" }} data-aos="fade-left" className='img-fluid rounded shadow w-100' src={services.picture1} alt="" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <h2 className="py-5 project-title">{services.name}</h2>
                                <p><span className="fs-5 fw-bold">Description: </span><br /><br />{services.desc}</p>

                                <p><span className="fs-5 fw-bold">Avaiable Time: </span>{services.time}</p>

                                <p className="fs-5 fw-bold">Phone:    {services.phone}</p>
                                <p className="fs-5 fw-bold">Price:$ {services.price}</p>
                                <Button className='text-white' onClick={handleShow} style={{
                                    'background': 'linear-gradient(90deg, rgba(198,27,97,1) 0%, rgba(74,89,173,1) 50%, rgba(7,195,157,1) 100%)'
                                }} variant='none'>Make an Order</Button>
                            </Col>
                        </Row>
                        <Modal show={show} centered onHide={handleClose} >
                            <div className='shadow rounded' style={{ 'background': 'linear-gradient(to right, #d9a7c7, #fffcdc)' }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Booking Service</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    {/* form */}

                                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
                                        {/* order status */}
                                        <input className="my-1 me-5 w-25  ms-auto d-block px-4 py-1 border-0 rounded" defaultValue="Pending" readOnly {...register("status")} title="Order status" />
                                        <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" defaultValue={user.displayName} {...register("name")} />

                                        {services.name &&
                                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={services.name} {...register("service", { required: true })} />
                                        }

                                        {services.price &&
                                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={services.price} {...register("price", { required: true })} />
                                        }

                                        <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" placeholder="Address"{...register("address", { required: true })} />

                                        <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                                        <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" type="date" placeholder="Choose Date"{...register("date", { required: true })} />

                                        <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" defaultValue={user.email} {...register("email", { required: true })} />

                                        {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                                        <br />


                                        {/* submit button */}
                                        < input className="d-block text-white mx-auto mx-3 my-2 btn w-75" type="submit" value="Order Now" style={{
                                            'background': 'linear-gradient(90deg, rgba(198,27,97,1) 0%, rgba(74,89,173,1) 50%, rgba(7,195,157,1) 100%)'
                                        }} />

                                        <Button className="d-block mx-auto mx-3 my-2 btn  w-75" variant="secondary" onClick={handleClose}>
                                            Not Now
                                        </Button>

                                    </form>
                                </Modal.Body>
                            </div>
                        </Modal>
                    </Container>
                </div>
                <Footer></Footer>
            </div>
        );
    };
}

export default Serviceservices;
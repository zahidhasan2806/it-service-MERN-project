import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Breadcrumb, Button, Container, FloatingLabel, Form, } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div>

            <div className='contact d-flex flex-column text-white align-items-center' style={{ paddingTop: "50px" }}>
                <h2 className='text'>Contact Us</h2>
                <Breadcrumb >
                    <Breadcrumb.Item href="/home" className="fs-4">Home</Breadcrumb.Item>

                    <Breadcrumb.Item active className="fs-4">Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className='my-5'>
                <h6 className=' text-center text-muted'>Get In Touch</h6>
                <h1 className=' text-center text '>Don't hasitate to contact with Colorzen</h1>
                <Form className="border p-5 rounded shadow" style={{ 'background': 'linear-gradient(to right, #d9a7c7, #fffcdc)', width: "500px", display: "block", margin: "auto" }}>

                    <hr />
                    <div>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Your Name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Message">
                            <Form.Control as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }} />
                        </FloatingLabel>
                    </div>
                    <br />
                    <Button type="submit" className="w-100 loginBtn" variant="outline-dark" >SEND MESSAGE <FontAwesomeIcon icon={faArrowRight} /></Button>

                </Form>
            </Container>
        </div>

    );
};

export default Contact;
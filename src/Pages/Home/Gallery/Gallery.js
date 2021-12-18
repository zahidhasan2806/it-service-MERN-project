import React from 'react';
import { Col, Row } from 'react-bootstrap';
import gallery1 from "../../../Images/gallery1.jpg"
import gallery2 from "../../../Images/gallery2.jpg"
import gallery3 from "../../../Images/gallery3.jpg"
import gallery4 from "../../../Images/gallery4.jpg"
import gallery5 from "../../../Images/gallery5.jpg"
import gallery6 from "../../../Images/gallery6.jpg"
import gallery7 from "../../../Images/gallery7.jpg"
import gallery8 from "../../../Images/gallery8.jpg"
import './Gallery.css'


const Gallery = () => {
    return (
        <>
            <h2 className='text-center text '> Gallery</h2>
            <Row className='m-0 p-0 g-1'>

                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery1} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery2} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery3} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery4} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery5} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery6} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery7} alt="" />
                </Col>
                <Col md={3} className='galleryCol'>
                    <img className='img-fluid gallery' src={gallery8} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default Gallery;
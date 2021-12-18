
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarsRatings from 'stars-rating'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
    }, [reviews]);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <Container className='review'>
            {/* <div className="my-5">
                <div className="my-5">
                    <p className="pt-5">What Our Happy Clients say about us</p>
                    <h2>OUR TESTIMONIAL</h2>
                </div>
                <Slider {...settings} className="container">
                    {
                        reviews.map(review =>
                            <>
                                <div style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }} className='mx-5 mb-5'>
                                    <div className='px-5 py-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className='fs-1' style={{ 'color': '#c13f22' }} />
                                        <p className='ps-5'>{desc}</p>
                                        <div className='ps-5'>
                                            <StarsRatings
                                                rating={parseFloat(rating)}
                                                starDimension="22px"
                                                starSpacing="5px"
                                                starRatedColor="#c13f22"
                                                starEmptyColor='gray'
                                            />
                                        </div>

                                    </div>

                                    <div className='d-flex px-5 pt-1 pb-0' style={{ 'backgroundColor': '#bf4a30' }}>
                                        <div className='text-end ms-auto me-3 text-white'>
                                            <h5>
                                                {name}
                                            </h5>
                                            <p>{designation}<br />{address}</p>
                                        </div>

                                        <img className='img-fluid rounded-circle' src={picture} style={{ 'height': '70px', 'width': '70px', 'marginTop': '-30px' }} alt="" />
                                    </div>
                                </div>

                            </>)
                    }
                </Slider>
            </div> */}
        </Container>
    );
};

export default Testimonials;
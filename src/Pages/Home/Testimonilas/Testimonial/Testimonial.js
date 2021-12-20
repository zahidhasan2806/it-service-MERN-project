import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../../../Images/userImg.png'
import StarRatings from 'react-star-ratings';


import React from 'react';

const Testimonial = (props) => {
    const { profileImage, address, designation, reviewDesc, name, Rating } = props.review
    return (
        <>
            <div style={{ 'background': 'linear-gradient(to right, #d9a7c7, #fffcdc)' }} className='mx-5 mb-5'>
                <div className='px-5 py-4'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='fs-1' style={{ 'color': '#c13f22' }} />
                    <p className='ps-5'>{reviewDesc}</p>
                    <div className='ps-5'>
                        <StarRatings
                            rating={parseFloat(Rating)}
                            starDimension="22px"
                            starSpacing="5px"
                            starRatedColor="#c13f22"
                            starEmptyColor='gray'
                        />
                    </div>

                </div>

                <div className='d-flex px-5 pt-1 pb-0' style={{ 'backgroundColor': '#AC2770' }}>
                    <div className='text-end ms-auto me-3 text-white'>
                        <h5>
                            {name}
                        </h5>
                        <p>{designation}<br />{address}</p>
                    </div>

                    <img className='img-fluid rounded-circle' src={profileImage} style={{ 'height': '70px', 'width': '70px', 'marginTop': '-30px' }} alt="" />
                </div>
            </div>

        </>
    );
};

export default Testimonial;
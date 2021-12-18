import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FeatureServices from '../FeaturedServices/FeatureServices/FeatureServices';
import Gallery from '../Gallery/Gallery';
import OurMission from '../OurMission/OurMission';
import Testimonials from '../Testimonilas/Testimonials/Testimonials';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurMission></OurMission>
            <About></About>
            <FeatureServices></FeatureServices>
            <Gallery></Gallery>
            {/* <Testimonials></Testimonials> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
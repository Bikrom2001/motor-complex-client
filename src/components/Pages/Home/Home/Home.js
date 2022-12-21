import React from 'react';
import Categories from '../../../categories/Categories';
import Carousel from '../Carousel/Carousel';
import Exclisuve from '../Exclisuve/Exclisuve';
import Features from '../Features/Features';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Exclisuve></Exclisuve>
            <Features></Features>
            <Review></Review>
            <hr />
        </div>
    );
};

export default Home;
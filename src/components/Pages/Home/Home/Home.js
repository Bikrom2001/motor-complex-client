import React from 'react';
import Categories from '../../../categories/Categories';
import Carousel from '../Carousel/Carousel';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Review></Review>
            <hr />
        </div>
    );
};

export default Home;
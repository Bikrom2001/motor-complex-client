import React from 'react';
import Categories from '../../../categories/Categories';
import Brand from '../Brand/Brand';
import Carousel from '../Carousel/Carousel';
import Exclisuve from '../Exclisuve/Exclisuve';
import Features from '../Features/Features';
import Feedback from '../Feedback/Feedback';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Exclisuve></Exclisuve>
            <Features></Features>
            <Brand></Brand>
            <Feedback></Feedback>
            <Review></Review>
            <hr />
        </div>
    );
};

export default Home;
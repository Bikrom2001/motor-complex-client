import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Share/Footer/Footer';
import Header from '../components/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
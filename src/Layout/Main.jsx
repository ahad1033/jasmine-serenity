import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/NavBar/Footer/Footer';

const Main = () => {
    return (
        <div className='container-xl'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
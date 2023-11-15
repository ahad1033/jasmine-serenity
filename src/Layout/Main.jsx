import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container-xl'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;
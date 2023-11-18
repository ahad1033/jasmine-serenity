import React from 'react';

const ServiceBanner = () => {
    return (
        <div className='text-center text-white' style={{ backgroundImage: `url('https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '60vh' }}>
            <div className='w-100 d-flex flex-column  justify-content-center align-content-center ' style={{ backgroundColor: 'rgba(25, 25, 25, 0.35)', minHeight: '60vh' }}>
                <h1 className='fw-bold' style={{ fontSize: '3rem' }}>Pamper Yourself<br />with Our Luxurious Services</h1>
                <p className='fw-medium mt-3 w-50 mx-auto'>Explore a range of premium beauty services tailored to enhance your natural beauty. Our expert team is dedicated to your well-being and relaxation.</p>
            </div>
        </div>
    );
};

export default ServiceBanner;
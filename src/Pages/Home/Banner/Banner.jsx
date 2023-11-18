

const Banner = () => {
    return (
        <div className='text-center text-white py-5 d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '60vh' }}>
            <h1 className='fw-bold' style={{ fontSize: '3rem' }}>Welcome to <br /> Jasmine Serenity</h1>
            <p className='fw-medium mt-2'>Indulge in a world of elegance and charm. Experience the art of beauty at Jasmine Serenity.</p>
            <button className="btn custom-bg-primary text-white fw-medium mt-2" type="button">About Us</button>
        </div>
    );
};

export default Banner;
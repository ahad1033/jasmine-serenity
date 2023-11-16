import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1624045665754-911182a234a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        // <div id="carouselExampleIndicators" className="carousel slide">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="banner image" />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="https://images.unsplash.com/photo-1624045665754-911182a234a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="banner image" />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="banner image" />
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    );
};

export default Banner;
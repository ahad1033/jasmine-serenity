import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-5 py-4 custom-bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-white fw-bold" href="#">Jasmine Serenity</a>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-medium" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-medium" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-medium" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-medium" aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-medium" aria-current="page" href="#">Blogs</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success text-white" type="submit">Book Now</button>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;
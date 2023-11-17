import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbLocationFilled } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="custom-bg-secondary text-white p-4 mt-4">
            <div className="container text-sm-center">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 px-5">
                        <h5 className="text-uppercase mb-4">Jasmine Serenity</h5>
                        <p className="text-white">Your beauty, our duty. Relax, Renew, Refresh.</p>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0  text-center  px-5">
                        <h5 className="text-uppercase mb-4">Contact Us</h5>
                        <ul className="list-unstyled text-start ">
                            <li className=' my-1'>
                                <TbLocationFilled className='me-2' />
                                36 Rabby Palace, Naryanganj-1400
                            </li>
                            <li className=' my-1'>
                                <MdOutlineMail className='me-2' />
                                info@jasmineserenity.com
                            </li>
                            <li className=' my-1'>
                            <LuPhoneCall className='me-2' />
                                +1 (555) 123-4567
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12 px-5">
                        <h5 className="text-uppercase mb-4">Follow Us</h5>
                        <div className="d-flex justify-content-center align-items-center ">
                            <a href="#" className="ms-4 fs-4 text-white ">
                                <FaFacebook />
                            </a>
                            <a href="#" className="ms-4 fs-3 text-white ">
                                <FaInstagram />
                            </a>
                            <a href="#" className="ms-4 fs-3 text-white ">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="#" className="ms-4 fs-2 text-white ">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Jasmine Serenity. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
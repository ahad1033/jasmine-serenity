import React from 'react';
import person1 from '../../../assets/person_01.jpg';
import person2 from '../../../assets/person_02.jpg';
import person3 from '../../../assets/person_03.jpg';
import person4 from '../../../assets/person_04.jpg';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { FaPinterest, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const OurTeam = () => {
    return (
        <div className='my-5 py-5' style={{ backgroundColor: '#fdf7fa' }}>
            <SectionTitle heading='Meet Our Team' />
            <div className='d-flex flex-lg-row flex-md-row gap-5 flex-column justify-content-center mt-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={person1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title custom-text-primary">Ema Jacob</h5>
                        <p className="card-text">Precision haircuts and modern styling, expert in color transformations for a vibrant look.</p>
                        <div className='text-center custom-text-primary mt-4'>
                            <FaPinterest className='fs-3 mx-2' />
                            <AiFillTwitterCircle className='fs-2 mx-2' />
                            <FaFacebook className='fs-3 mx-2' />
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={person2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title custom-text-primary">Ayra Brown</h5>
                        <p className="card-text">Creative nail artist with a passion for unique designs, skilled in facial treatments for a radiant complexion.</p>
                        <div className='text-center custom-text-primary mt-4'>
                            <FaPinterest className='fs-3 mx-2' />
                            <AiFillTwitterCircle className='fs-2 mx-2' />
                            <FaFacebook className='fs-3 mx-2' />
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={person3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title custom-text-primary">Stuart Little</h5>
                        <p className="card-text">Master of soothing massages and relaxation techniques, specialist in personalized skincare routines.</p>
                        <div className='text-center custom-text-primary mt-4'>
                            <FaPinterest className='fs-3 mx-2' />
                            <AiFillTwitterCircle className='fs-2 mx-2' />
                            <FaFacebook className='fs-3 mx-2' />
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={person4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title custom-text-primary">Emilly Heart</h5>
                        <p className="card-text">Experienced makeup artist for stunning, flawless looks, proficient in the latest trends for a fashionable appearance.</p>
                        <div className='text-center custom-text-primary mt-4'>
                            <FaPinterest className='fs-3 mx-2' />
                            <AiFillTwitterCircle className='fs-2 mx-2' />
                            <FaFacebook className='fs-3 mx-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
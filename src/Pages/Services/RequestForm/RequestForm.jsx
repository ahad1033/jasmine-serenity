import React, { useState } from 'react';

const RequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        } else {
            newErrors.name = '';
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        } else {
            newErrors.email = '';
        }


        const phoneNumberRegex = /^\d+$/;
        if (!phoneNumberRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number can only contain numbers';
            isValid = false;
        } else {
            newErrors.phoneNumber = '';
        }


        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            isValid = false;
        } else {
            newErrors.message = '';
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Form validation failed');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="container mt-5 d-flex flex-lg-row flex-column my-5 align-content-center justify-content-lg-center">
            <div className="me-lg-5 mx-auto">
                <img src="https://images.pexels.com/photos/4130211/pexels-photo-4130211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid p-2" alt="..." />
            </div>
            <div className='w-75 px-5 mx-auto'>
                <h3 className='fw-bold custom-text-primary'>Request more info</h3>
                <form className='mt-5 custom-text-primary' custom-text-primaryonSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formErrors.name && 'is-invalid'}`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">{formErrors.name}</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className={`form-control ${formErrors.email && 'is-invalid'}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">{formErrors.email}</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className={`form-control ${formErrors.phoneNumber && 'is-invalid'}`}
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">{formErrors.phoneNumber}</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            className={`form-control ${formErrors.message && 'is-invalid'}`}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                        ></textarea>
                        <div className="invalid-feedback">{formErrors.message}</div>
                    </div>

                    <button type="submit" className="btn custom-bg-primary text-white fw-medium">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RequestForm;

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/Common';
import { validEmail, validName } from '@/_helper/Regex';
import { Spinner } from 'react-bootstrap';

export default function GetInTouch() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const counts = [
    {
      number: '49.36 L',
      title: 'Clothes Washed',
    },
    {
      number: '4.19 L',
      title: 'Satisfied Families',
    },
    {
      number: '7.95 L',
      title: 'Orders processed',
    },
    {
      number: '4.6',
      title: 'Ratings',
    },
  ];

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!mobileNo) newErrors.mobileNo = 'Phone Number is required';
    if (!message) newErrors.message = 'Message is required';
    if (firstName && !validName(firstName)) newErrors.firstName = 'Please enter valid name';
    if (lastName && !validName(lastName)) newErrors.lastName = 'Please enter valid name';
    if (email && !validEmail(email)) newErrors.email = 'Please enter valid email';
    if (mobileNo && mobileNo?.length < 10) newErrors.mobileNo = 'Please enter valid mobile';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, simulate sending the form data to email
      setIsLoading(true);
      const formData = {
        firstName,
        lastName,
        email,
        mobileNo,
        message,
      };

      emailjs
        .send(
          'service_5grp3ug', // Replace with your EmailJS Service ID
          'template_7e6z3mc', // Replace with your EmailJS Template ID
          formData,
          'gU2_vHQlUq-VmzVx_' // Replace with your EmailJS User ID
        )
        .then((result) => {
          toast.success('Message sent successfully!', toastConfig);
          // Clear the form after submission
          setFirstName('');
          setLastName('');
          setEmail('');
          setMobileNo('');
          setMessage('');
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Failed to send email:', error);
          toast.error('Failed to send message.', toastConfig);
        });
    }
  };

  return (
    <>
      <section className="conatct-form-section py-lg-64 py-50">
        <div className="container-w-full container-w-xl-920">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-lg-64 mb-30">
                <h2 className="fs-lg-48 fs-30 lh-lg-60 lh-45 text-color-1 fw-500 mb-2">Get In Touch</h2>
                <p className="fs-lg-18 fs-14 lh-lg-28 lh-24 fw-400 text-color-1 mb-0">
                  Our friendly team would have to hear from you!
                </p>
              </div>
              <div className="d-lg-flex align-items-center">
                <div className="w-100 max-w-467 form-box mr-lg-149 mb-30 mb-lg-0">
                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <FloatingLabelInput
                        label="First Name"
                        type={'text'}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <FloatingLabelInput
                        label="Last Name"
                        type={'text'}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && (
                        <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <FloatingLabelInput
                        label="Email"
                        type={'email'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <FloatingLabelInput
                        label="Phone Number"
                        type={'number'}
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                      />
                      {errors.mobileNo && (
                        <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                          {errors.mobileNo}
                        </p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <FloatingLabelInput
                        label="How can we help?"
                        type={'textarea'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      {errors.message && (
                        <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="col-12 mt-lg-30 mt-10">
                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isLoading}
                          style={{ opacity: `${isLoading ? '0.5' : '1'}` }}
                          className="w-100 h-size-51 mx-auto text-color-2 btn-blue button-hover fs-16 fw-500 outline-none d-flex align-items-center justify-content-center rounded-28 border-0"
                        >
                          {isLoading && (
                            <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>
                          )}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="max-w-400 mx-auto mx-lg-0">
                  <ul className="p-0 m-0 list-unstyled numbers-list">
                    {counts.map((item, key) => (
                      <li
                        key={key}
                        className={`d-flex align-items-center ${key === counts.length - 1 ? '' : 'mb-lg-40 mb-16'}`}
                      >
                        <div className="me-lg-3 mr-10">
                          <Image
                            src={'/images/check-blue.svg'}
                            width={44}
                            height={44}
                            alt="Icon"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <h3 className="fs-lg-24 fs-18 lh-lg-45 lh-32 fw-700 text-color-1 mb-0">{item?.number}</h3>
                          <p className="fs-lg-16 fs-12 lh-24 fw-400 text-color-1 mb-0">{item?.title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

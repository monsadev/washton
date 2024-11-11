import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/Common';
import { validName } from '@/_helper/Regex';
import FloatingLabelInput from './FloatingLabelInput';
import { Spinner } from 'react-bootstrap';

export default function BookNowModal({ setShowBookNow }) {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!mobileNo) newErrors.mobileNo = 'Phone Number is required';
    if (!address) newErrors.address = 'Address is required';
    if (firstName && !validName(firstName)) newErrors.firstName = 'Please enter valid name';
    if (lastName && !validName(lastName)) newErrors.lastName = 'Please enter valid name';
    if (mobileNo && mobileNo?.length < 10) newErrors.mobileNo = 'Please enter valid mobile';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, simulate sending the form data to email
      const formData = {
        firstName,
        lastName,
        mobileNo,
        address,
      };
      setIsLoading(true);
      emailjs
        .send(
          'service_5grp3ug', // Replace with your EmailJS Service ID
          'template_dzw23kp', // Replace with your EmailJS Template ID
          formData,
          'gU2_vHQlUq-VmzVx_' // Replace with your EmailJS User ID
        )
        .then((result) => {
          toast.success('Message sent successfully!', toastConfig);
          // Clear the form after submission
          setFirstName('');
          setLastName('');
          setMobileNo('');
          setAddress('');
          setIsLoading(false);
          setShowBookNow(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Failed to send email:', error);
          toast.error('Failed to send message.', toastConfig);
        });
    }
  };

  const handleCheckTerms = (e) => {
    if (e.target.checked) {
      setCheckedTerms(true);
    } else {
      setCheckedTerms(false);
    }
  };

  return (
    <>
      <Modal
        show={true}
        centered
        size="lg"
        dialogClassName="max-w-555 mx-auto px-3"
        contentClassName="max-w-555 mx-auto rounded-20"
      >
        <Modal.Body className="px-lg-44 px-20 py-lg-40 py-24">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="m-0 text-color-1 fs-lg-24 fs-18 fw-500 lh-30">Schedule Free Pick Up</h4>
            <span className="cursor-pointer" onClick={() => setShowBookNow(false)}>
              <Image
                src={'/images/x-circle.svg'}
                width={25}
                height={25}
                alt="Close"
                title="Close"
                className="img-fluid"
              />
            </span>
          </div>
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
            <div className="col-md-12">
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
                label="Where to pick up from"
                type={'textarea'}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && (
                <p style={{ marginTop: '-1rem' }} className="text-danger fs-13 fw-500">
                  {errors.address}
                </p>
              )}
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input def-check shadow-none cursor-pointer outline-none"
                  type="checkbox"
                  value=""
                  onChange={(e) => handleCheckTerms(e)}
                  id="termsCheck"
                  checked={checkedTerms}
                />
                <label
                  className="user-select-none form-check-label text-color-5 fw-400 lh-18 fs-12 cursor-pointer"
                  htmlFor="termsCheck"
                >
                  By clicking submit you agree to our terms & condition.
                </label>
              </div>
            </div>
            <div className="col-12 mt-30">
              <div className="text-center">
                <button
                  disabled={isLoading || !checkedTerms}
                  type="submit"
                  style={{ opacity: `${isLoading || !checkedTerms ? '0.5' : '1'}` }}
                  className="w-100 h-size-51 mx-auto text-color-2 btn-blue button-hover fs-16 fw-500 outline-none d-flex align-items-center justify-content-center rounded-28 border-0"
                >
                  {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

'use client';
import { useAuth } from '@/_context/AuthContext';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  const { setShowBookNow } = useAuth();
  return (
    <>
      <section className="about-section py-lg-96">
        <div className="container-w-full container-w-xl-1362">
          <div className="row">
            <div className="col-12">
              <div className="mb-30 text-lg-start text-center">
                <h2 className="fs-lg-48 fs-30 lh-lg-60 text-color-1 fw-500 mb-lg-44 mb-16">About Washton</h2>
                <p className="fs-lg-22 fs-14 lh-lg-36 lh-26 fw-400 text-black">
                  At Washton, we’re dedicated to making dry cleaning easy and hassle-free. Our expert team ensures your
                  garments receive the highest quality care, from stain treatment to fabric preservation. With
                  convenient online scheduling, contactless pickup, and eco-friendly cleaning methods, we bring
                  professional dry cleaning right to your doorstep. Whether it’s your delicate items or everyday wear,
                  trust us to keep your wardrobe looking its best. <br />
                  <br />
                  This focuses on convenience, quality, and eco-consciousness.
                </p>
              </div>
              <div className="bg-color-4 p-lg-24 p-16 d-lg-flex text-lg-start text-center">
                <div className="mr-lg-62">
                  <Image src={'/images/about-us.webp'} width={631} height={667} alt="Image" className="img-fluid" />
                </div>
                <div className="max-w-500 pt-15">
                  <h3 className="mb-lg-90 mb-20 fs-lg-44 fs-26 lh-lg-64 lh-40 fw-600 text-color-2">
                    Expert dry cleaning delivered to your door—clean, fresh, and hassle-free.
                  </h3>
                  <p className="text-color-2 fs-lg-22 fs-17 fw-400 lh-lg-36 lh-28 mb-lg-40 mb-20">
                    Washton delivers premium laundry care tailored to your needs, with expert stain removal and
                    fabric-friendly detergents for the best treatment.
                  </p>
                  <button
                    onClick={() => setShowBookNow(true)}
                    className="light-button outline-none mx-auto mx-lg-0 mb-4 mb-lg-0 d-flex align-items-center justify-content-center text-color-11 button-hover fw-500 fs-16 border-0 bg-color-2 min-w-185 h-size-51 rounded-28"
                  >
                    Request Pickup{' '}
                    <span className="d-block">
                      <FontAwesomeIcon icon={faChevronRight} width={13} className="fs-13 ml-6" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

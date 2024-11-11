'use client';
import { useAuth } from '@/_context/AuthContext';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export default function Banner() {
  const { setShowBookNow } = useAuth();
  return (
    <>
      <section className="banner-section">
        <div className="container-w-full container-w-xl-1362">
          <div className="d-flex pt-lg-125 pt-55 banner-wrapper">
            <div className="w-100 max-w-650 banner-left mr-lg-70 pt-56">
              <h1 className="fw-700 text-color-2 fs-lg-60 fs-35 lh-45 lh-lg-72 mb-12">
                Effortless dry cleaning, delivered to your door.
              </h1>
              <p className="text-color-2 fs-lg-28 fs-22 lh-28 lh-lg-34 mb-lg-40 mb-20">save time, stay fresh</p>
              <button
                onClick={() => setShowBookNow(true)}
                className="light-button outline-none d-flex align-items-center justify-content-center text-color-11 button-hover fw-500 fs-16 border-0 bg-color-2 min-w-185 h-size-51 rounded-28"
              >
                Request Pickup{' '}
                <span className="d-block">
                  <FontAwesomeIcon icon={faChevronRight} width={13} className="fs-13 ml-6" />
                </span>
              </button>
            </div>
            <div className="w-100 max-w-553 position-relative overflow-hidden d-lg-block d-none">
              <span className="position-absolute rotate-infinite" style={{ zIndex: '9', right: '0', top: '56px' }}>
                <Image src={'/images/washton-circle.svg'} width={165} height={165} alt="Image" className="img-fluid" />
              </span>
              <Image
                src={'/images/banner-image.png'}
                width={553}
                height={567}
                alt="Image"
                className="img-fluid d-none d-lg-inline"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import { useAuth } from '@/_context/AuthContext';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  const { setShowBookNow } = useAuth();
  const whyChooseData = [
    {
      image: '/images/price-down.svg',
      title: 'Affordable Pricing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/high-quality.svg',
      title: 'High Quality',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/rating.svg',
      title: 'Personalized Experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/changes.svg',
      title: 'Instant Order Update',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/sunbed.svg',
      title: 'Convenience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/express-delivery.svg',
      title: 'Express Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
  ];
  return (
    <>
      <section className="why-choose-section pt-96 pb-64">
        <div className="container-w-full container-w-xl-1244">
          <div className="row mb-lg-64 mb-35">
            <div className="col-12">
              <div className="text-center">
                <h2 className="fs-lg-48 fs-35 lh-60 text-color-1 fw-500 mb-2">Why Choose Us</h2>
                <p className="fs-18 lh-28 fw-400 text-color-1">
                  Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or
                  visual presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {whyChooseData?.length > 0 &&
              whyChooseData?.map((item, key) => (
                <div className="col-lg-4 col-sm-6 mb-lg-64 mb-24" key={key}>
                  <div className="text-center px-lg-16">
                    <Image src={item?.image} width={52} height={52} alt="Icon" className="img-fluid mb-lg-24 mb-16" />
                    <h3 className="fs-lg-24 fs-20 fw-500 lh-lg-40 lh-30 mb-2">{item?.title}</h3>
                    <p className="fs-lg-16 fs-14 lh-lg-24 lh-22 text-color-8 fw-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
                    </p>
                  </div>
                </div>
              ))}
            <div className="col-12">
              <div className="text-center">
                <button
                  onClick={() => setShowBookNow(true)}
                  className="min-w-148 h-size-51 mx-auto text-color-2 btn-blue button-hover 
                fs-16 fw-500 outline-none d-flex align-items-center justify-content-center rounded-28 border-0"
                >
                  Book Now{' '}
                  <span className="d-block">
                    <FontAwesomeIcon icon={faChevronRight} width={13} className="fs-13 ml-6" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

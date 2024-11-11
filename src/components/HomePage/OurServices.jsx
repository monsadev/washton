'use client';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export default function OurServices() {
  const whyChooseData = [
    {
      image: '/images/laundry.svg',
      title: 'Laundry Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/dryclean.svg',
      title: 'Dry Cleaning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/shoes.svg',
      title: 'Shoe Cleaning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/sofa.svg',
      title: 'Home Cleaning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
      image: '/images/iron.svg',
      title: 'Ironing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
  ];
  return (
    <>
      <section className="pt-lg-96 pt-50 pb-lg-32 pb-18">
        <div className="container-w-full container-w-xl-1244">
          <div className="row mb-lg-64 mb-30">
            <div className="col-12">
              <div className="text-center">
                <h2 className="fs-lg-48 fs-30 lh-lg-60 lh-45 text-color-1 fw-500 mb-2">Our Services</h2>
                <p className="fs-lg-18 fs-14 lh-lg-28 lh-24 fw-400 text-color-1">
                  Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or
                  visual presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {whyChooseData?.length > 0 &&
              whyChooseData?.map((item, key) => (
                <div className="col-lg-4 col-sm-6 mb-lg-64 mb-30" key={key}>
                  <div className="text-center px-lg-16">
                    <Image src={item?.image} width={52} height={52} alt="Icon" className="img-fluid mb-lg-24 mb-16" />
                    <h3 className="fs-lg-24 fs-18 fw-500 lh-lg-40 lh-28 mb-2">{item?.title}</h3>
                    <p className="fs-lg-16 fs-14 lh-lg-24 lh-22 text-color-8 fw-400">{item?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

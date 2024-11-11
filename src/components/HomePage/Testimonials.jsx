'use client';
import { useAuth } from '@/_context/AuthContext';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

export default function Testimonials() {
  const { setShowBookNow } = useAuth();
  const testimonialsData = [
    {
      image: '/images/joseph-cook.png',
      name: 'Harrison Phillips',
      job: 'Reporter',
      description:
        'Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui officia aperiam atque qui occaecati est. Magnam voluptatem earum excepturi qui quae ea qui.',
    },
    {
      image: '/images/brian-edwards.png',
      name: 'Ainara Vergara',
      job: 'Landscape Architect',
      description:
        'Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex.',
    },
    {
      image: '/images/lawrence-james.png',
      name: 'Niek Bove',
      job: 'Senior Developer',
      description:
        'Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto.',
    },
    {
      image: '/images/joseph-cook.png',
      name: 'Ainara Vergara',
      job: 'Student',
      description:
        'Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto.',
    },
  ];

  const settings = {
    dots: true,
    rows: 1,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-lg-64 py-50 testimonial-section">
        <div className="container-w-full container-w-xl-1244">
          <div className="row mb-14">
            <div className="col-12">
              <div className="text-center">
                <h2 className="fs-lg-48 fs-30 lh-lg-60 lh-45 text-color-1 fw-500 mb-2">Testimonial</h2>
                <p className="fs-lg-18 fs-14 lh-lg-28 lh-24 fw-400 text-color-1">
                  Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or
                  visual presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-w-full pe-lg-0">
          <Slider {...settings}>
            {testimonialsData?.length > 0 &&
              testimonialsData.map((item, key) => (
                <div className="px-16 px-lg-30 py-lg-50 py-24" key={key}>
                  <div className="testimonial-card bg-color-2 rounded-29 min-w-lg-503 max-w-503 min-h-lg-344 h-100 d-flex flex-column p-lg-34 p-20">
                    <div className="d-flex mb-20 mb-lg-30 align-items-center">
                      <div className="mr-lg-28 mr-12">
                        <Image src={item?.image} width={62} height={62} alt="Image" className="img-fluid rounded-12" />
                      </div>
                      <div>
                        <p className="fs-lg-22 fs-16 lh-lg-27 lh-24 fw-600 text-color-1 mb-lg-1 mb-0">{item?.name}</p>
                        <span className="fs-lg-18 fs-14 fw-500 text-color-9">{item?.job}</span>
                      </div>
                    </div>
                    <p className="fs-lg-16 fs-14 lh-22 lh-lg-24 fw-400 text-color-1">{item?.description}</p>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className="container-w-full container-w-xl-1244 mt-lg-80 mt-50">
          <div className="row">
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

'use client';
import { useAuth } from '@/_context/AuthContext';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BookNowModal from './HomePage/BookNowModal';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { showBookNow, setShowBookNow } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isCmsPage = pathname === '/privacy-policy' || pathname === '/terms-and-conditions' || pathname === '/faq';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
      setIsFixed(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {showBookNow && <BookNowModal setShowBookNow={setShowBookNow} />}
      <header
        className={`main-header py-16 px-lg-55 px-16 w-100 ${
          isCmsPage || isFixed ? 'position-fixed top-0 transition-header py-lg-13' : 'position-absolute py-lg-26'
        } ${isScrolled ? 'header-scrolled' : ''} ${
          isMobileMenuOpen ? 'bg-color-11 position-fixed top-0 transition-header' : ''
        }`}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Link href={'/'} className="d-flex align-items-center mr-lg-72 min-w-185 logo-img">
              <Image src={'/images/logo.svg'} width={185} height={40} alt="logo" className="img-fluid" />
            </Link>
            <ul className="list-unstyled mb-0 p-0 d-lg-flex d-none mt-2 align-items-center justify-content-center">
              <li className="mr-46">
                <a
                  onClick={() => {
                    if (isCmsPage) {
                      router.push('/');
                      setTimeout(() => {
                        scrollToSection('why-choose-us');
                      }, 500);
                    } else {
                      scrollToSection('why-choose-us');
                    }
                  }}
                  className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
                >
                  Why
                </a>
              </li>
              <li className="mr-46">
                <a
                  onClick={() => {
                    if (isCmsPage) {
                      router.push('/');
                      setTimeout(() => {
                        scrollToSection('about-us');
                      }, 500);
                    } else {
                      scrollToSection('about-us');
                    }
                  }}
                  className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li className="mr-46">
                <a
                  onClick={() => {
                    if (isCmsPage) {
                      router.push('/');
                      setTimeout(() => {
                        scrollToSection('our-services');
                      }, 500);
                    } else {
                      scrollToSection('our-services');
                    }
                  }}
                  className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li className="mr-46">
                <a
                  onClick={() => {
                    if (isCmsPage) {
                      router.push('/');
                      setTimeout(() => {
                        scrollToSection('download-app');
                      }, 500);
                    } else {
                      scrollToSection('download-app');
                    }
                  }}
                  className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
                >
                  Washton App
                </a>
              </li>
              <li className="mr-46">
                <a
                  onClick={() => {
                    if (isCmsPage) {
                      router.push('/');
                      setTimeout(() => {
                        scrollToSection('get-in-touch');
                      }, 500);
                    } else {
                      scrollToSection('get-in-touch');
                    }
                  }}
                  className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center header-actions">
            <a
              href="tel:+917340327273"
              className="me-lg-3 btn-contact text-decoration-none light-button outline-none d-flex align-items-center justify-content-center text-color-11 fw-600 fs-14 border-0 bg-color-2 min-w-160 h-size-41 rounded-22"
            >
              +91 73403 27273
            </a>
            <button
              onClick={() => setShowBookNow(true)}
              className="min-w-126 h-size-41 text-color-2 btn-blue button-hover 
                fs-14 fw-600 outline-none d-lg-flex d-none align-items-center justify-content-center rounded-28 border-0"
            >
              Book Now{' '}
              <span className="d-block">
                <FontAwesomeIcon icon={faChevronRight} width={11} className="fs-13 ml-6" />
              </span>
            </button>
            <div className="d-lg-none ms-3">
              <span className="cursor-pointer d-block min-w-25" onClick={toggleMobileMenu}>
                {(!isMobileMenuOpen && (
                  <Image
                    src={'/images/mobile-menu-icon.svg'}
                    width={25}
                    height={25}
                    alt="Menu Icon"
                    className="img-fluid"
                  />
                )) || (
                  <Image
                    src={'/images/menu-white-close-icon.svg'}
                    width={18}
                    height={18}
                    alt="Menu Icon"
                    className="img-fluid"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden bg-color-11 w-100 start-0 mobile-menu position-fixed ${
            isMobileMenuOpen ? 'active-menu' : ''
          }`}
          style={{
            top: '65px',
          }}
        >
          <ul className="list-unstyled mb-0 px-0 pt-30 text-center">
            <li className="mx-18 mb-4">
              <a
                onClick={() => {
                  if (isCmsPage) {
                    router.push('/');
                    setTimeout(() => {
                      scrollToSection('why-choose-us');
                    }, 500);
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection('why-choose-us');
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
              >
                Why
              </a>
            </li>
            <li className="mx-18 mb-4">
              <a
                onClick={() => {
                  if (isCmsPage) {
                    router.push('/');
                    setTimeout(() => {
                      scrollToSection('about-us');
                    }, 500);
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection('about-us');
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
              >
                About
              </a>
            </li>
            <li className="mx-18 mb-4">
              <a
                onClick={() => {
                  if (isCmsPage) {
                    router.push('/');
                    setTimeout(() => {
                      scrollToSection('our-services');
                    }, 500);
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection('our-services');
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li className="mx-18 mb-4">
              <a
                onClick={() => {
                  if (isCmsPage) {
                    router.push('/');
                    setTimeout(() => {
                      scrollToSection('download-app');
                    }, 500);
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection('download-app');
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
              >
                Washton App
              </a>
            </li>
            <li className="mx-18 mb-4">
              <a
                onClick={() => {
                  if (isCmsPage) {
                    router.push('/');
                    setTimeout(() => {
                      scrollToSection('get-in-touch');
                    }, 500);
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection('get-in-touch');
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-decoration-none text-color-2 fs-16 fw-500 lh-20 cursor-pointer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

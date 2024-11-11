'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <section className="footer-section pt-40">
        <div className="container-w-full container-w-xl-1132">
          <div className="row">
            <div className="col-12">
              <div className="d-lg-flex justify-content-between">
                <Link href={'/'} className="d-flex align-items-center mx-auto mx-lg-0 w-max-content mb-4 mb-lg-0">
                  <Image src={'/images/logo.svg'} width={138} height={30} alt="logo" className="img-fluid" />
                </Link>
                <ul className="list-unstyled mb-lg-0 mb-4 p-0 d-flex align-items-center w-max-content justify-content-center mx-auto">
                  <li className="mx-11">
                    <Link href={'https://www.facebook.com/'} target="blank" className="d-block">
                      <Image src={'/images/facebook.svg'} width={28} height={28} alt="facebook" className="img-fluid" />
                    </Link>
                  </li>
                  <li className="mx-11">
                    <Link href={'https://www.instagram.com/'} target="blank" className="d-block">
                      <Image
                        src={'/images/instagram.svg'}
                        width={28}
                        height={28}
                        alt="instagram"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="mx-11">
                    <Link href={'https://www.linkedin.com/'} target="blank" className="d-block">
                      <Image src={'/images/linkedin.svg'} width={28} height={28} alt="linkedin" className="img-fluid" />
                    </Link>
                  </li>
                  <li className="mx-11">
                    <Link href={'https://x.com/'} target="blank" className="d-block">
                      <Image src={'/images/twitter.svg'} width={28} height={28} alt="twitter" className="img-fluid" />
                    </Link>
                  </li>
                </ul>
                <div className="text-lg-end d-lg-block d-flex justify-content-center">
                  <a
                    href={'mailto:royalstyle1980@gmail.com'}
                    className="d-block text-color-9 text-decoration-none mx-lg-0 mx-2 fs-14 lh-20 fw-400 mb-2"
                  >
                    royalstyle1980@gmail.com
                  </a>
                  <a
                    href={'mailto:+917340327273'}
                    className="d-block text-color-9 text-decoration-none mx-lg-0 mx-2 fs-14 lh-20 fw-400 mb-2"
                  >
                    +91 73403 27273
                  </a>
                </div>
              </div>
              <div className="mt-lg-40 mt-20 py-20" style={{ borderTop: '1px solid #272727' }}>
                <div className="d-lg-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-lg-start justify-content-center mb-lg-0 mb-4">
                    <Link
                      href={'/privacy-policy'}
                      className="d-block text-color-9 text-decoration-none fs-14 lh-20 fw-400 me-3"
                    >
                      Privacy policy
                    </Link>
                    <Link
                      href={'/terms-and-conditions'}
                      className="d-block text-color-9 text-decoration-none fs-14 lh-20 fw-400 me-3"
                    >
                      Terms of service
                    </Link>
                    <Link href={'/faq'} className="d-block text-color-9 text-decoration-none fs-14 lh-20 fw-400">
                      FAQ’s
                    </Link>
                  </div>
                  <span className="d-block text-color-9 text-lg-start text-center text-decoration-none fs-14 lh-20 fw-400">
                    © 2024 Washton Pvt. Ltd.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

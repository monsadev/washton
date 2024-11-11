'use client';
import Image from 'next/image';
import React from 'react';

export default function DownloadApp() {
  return (
    <>
      <section className="download-app-section py-lg-0 py-50">
        <div className="container-w-full container-w-xl-1248">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mx-auto">
                <div className="w-100 max-w-592 mr-lg-32 text-center text-lg-start mx-auto mx-lg-0">
                  <h2 className="fs-lg-48 fw-500 fs-30 lh-lg-60 lh-45 mb-2 text-color-1">
                    Download Washton Mobile App
                  </h2>
                  <p className="fs-lg-18 fs-14 lh-lg-28 lh-24 fw-400 text-color-1 mb-lg-48 mb-24">
                    Washton provide top-notch laundry care tailored to your needs. our expert team ensures meticulous
                    attention to every detail, from stain removal to fabric preservation. With fabric-friendly
                    detergents your clothes receive the best treatment.
                  </p>
                  <div className="text-lg-start text-center">
                    <h3 className="fs-18 lh-28 fw-500 text-color-1 mb-3 mb-lg-2">Get the App</h3>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.washton.user"
                        target="blank"
                        className="d-block mr-12"
                      >
                        <Image
                          src={'/images/play-store.svg'}
                          width={135}
                          height={40}
                          alt="Play Store"
                          className="img-fluid"
                        />
                      </a>
                      <a href="https://apps.apple.com/us/app/washton/id6449352496" target="blank" className="d-block">
                        <Image
                          src={'/images/app-store.svg'}
                          width={135}
                          height={40}
                          alt="Play Store"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-none d-lg-block">
                  <Image src={'/images/download-app.png'} width={592} height={558} alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

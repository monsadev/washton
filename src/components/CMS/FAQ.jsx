'use client';

import { Accordion } from 'react-bootstrap';

export default function FAQ() {
  return (
    <>
      <section className="cms-page-content py-160 ">
        <div className="container-main container-w-xl-1134">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-64 fw-500 fs-lg-32 fs-28 lh-38 text-color-1">Frequently Asked Questions</h1>
            </div>
            <div className="col-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

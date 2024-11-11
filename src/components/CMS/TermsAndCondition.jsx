'use client';

import { Accordion } from 'react-bootstrap';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="cms-page-content py-160 ">
        <div className="container-main container-w-xl-1134">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-64 fw-500 fs-lg-32 fs-28 lh-38 text-color-1">Terms & Conditions</h1>
            </div>
            <div className="col-12">
              <p>
                This privacy notice for Washton Pvt. Ltd. (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or
                &apos;our&apos;,), describes how and why we might collect, store, use, and/or share
                (&apos;process&apos;) your information when you use our services (&apos;Services&apos;), such as when
                you:
              </p>
              <ul>
                <li>
                  Visit our website at <a href={process.env.NEXT_PUBLIC_SITE_URL}>www.washton.com</a> or any website of
                  ours that links to this privacy notice
                </li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p>
                <b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights
                and choices. If you do not agree with our policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us at 
                <a href="mailto:info@washton.com">info@washton.com</a>.
              </p>
              <h3>SUMMARY OF KEY POINTS</h3>
              <p>
                This summary provides key points from our privacy notice, but you can find out more details about any of
                these topics by clicking the link following each key point or by using our table of contents below to
                find the section you are looking for. You can also click here to go directly to our table of contents.
              </p>
              <h3>What personal information do we process?</h3>
              <p>
                When you visit, use, or navigate our Services, we may process personal information depending on how you
                interact with Washton Pvt. Ltd. and the Services, the choices you make, and the products and features
                you use. Click here to learn more.
              </p>
              <h3>Do we process any sensitive personal information?</h3>
              <p>We do not process sensitive personal information.</p>
              <h3>Do we receive any information from third parties?</h3>
              <p>We do not receive any information from third parties.</p>
              <h3>How do we process your information? </h3>
              <p>
                We process your information to provide, improve, and administer our Services, communicate with you, for
                security and fraud prevention, and comply with the law. We may also process your information for other
                purposes with your consent. We process your information only when we have a valid legal reason to do so.
                In what situations and with which parties do we share personal information? We may share information in
                specific situations and with specific third parties.
              </p>
              <h3>How do we keep your information safe?</h3>
              <p>
                We have organisational and technical processes and procedures in place to protect your personal
                information. However, no electronic transmission over the internet or information storage technology can
                be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorised third parties will not be able to defeat our security and improperly collect, access,
                steal, or modify your information.
              </p>
              <h3>What are your rights?</h3>
              <p>
                Depending on where you are located geographically, the applicable privacy law may mean you have certain
                rights regarding your personal information.
              </p>
              <h3>How do you exercise your rights?</h3>
              <p>
                How do you exercise your rights? The easiest way to exercise your rights is by filling out our data
                subject request form available here:{' '}
                <a href="https://www.washton.com/contact">https://www.washton.com/contact</a>, or by contacting us. We
                will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. What information do we collect?</Accordion.Header>
                  <Accordion.Body>
                    <h3>Personal information you disclose to us</h3>
                    <p>
                      We collect personal information that you provide to us. We collect personal information that you
                      voluntarily provide to us when you register on the Services, express an interest in obtaining
                      information about us or our products and Services, when you participate in activities on the
                      Services, or otherwise when you contact us.
                    </p>
                    <h3>Personal Information Provided by You</h3>
                    <p>
                      The personal information that we collect depends on the context of your interactions with us and
                      the Services, the choices you make, and the products and features you use. The personal
                      information we collect may include the following:
                    </p>
                    <ul>
                      <li>names</li>
                      <li>phone numbers</li>
                      <li>email addresses</li>
                      <li>job titles</li>
                      <li>contact preferences</li>
                      <li>billing addresses</li>
                      <li>usernames</li>
                      <li>passwords</li>
                    </ul>
                    <h3>Payment Data</h3>
                    <p>
                      We may collect data necessary to process your payment if you make purchases, such as your payment
                      instrument number (such as a credit card number), and the security code associated with your
                      payment instrument. All payment data is stored by Razorpay. You may find their privacy notice
                      link(s) here:{' '}
                      <a target="blank" href="https://razorpay.com/privacy/">
                        https://razorpay.com/privacy/
                      </a>
                      .
                    </p>
                    <h3>Information automatically collected</h3>
                    <p>
                      Some information — such as your Internet Protocol (IP) address and/or browser and device
                      characteristics — is collected automatically when you visit our Services.
                    </p>
                    <p>
                      We automatically collect certain information when you visit, use, or navigate the Services. This
                      information does not reveal your specific identity (like your name or contact information) but may
                      include device and usage information, such as your IP address, browser and device characteristics,
                      operating system, language preferences, referring URLs, device name, country, location,
                      information about how and when you use our Services, and other technical information. This
                      information is primarily needed to maintain the security and operation of our Services, and for
                      our internal analytics and reporting purposes.
                    </p>
                    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                    <p>The information we collect includes:</p>
                    <ul>
                      <li>
                        <p>
                          <b>Log and Usage Data.</b> Log and usage data is service-related, diagnostic, usage, and
                          performance information our servers automatically collect when you access or use our Services
                          and which we record in log files. Depending on how you interact with us, this log data may
                          include your IP address, device information, browser type, and settings and information about
                          your activity in the Services (such as the date/time stamps associated with your usage, pages
                          and files viewed, searches, and other actions you take such as which features you use), device
                          event information (such as system activity, error reports (sometimes called &apos;crash
                          dumps&apos;), and hardware settings).
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Device Data.</b> We collect device data such as information about your computer, phone,
                          tablet, or other device you use to access the Services. Depending on the device used, this
                          device data may include information such as your IP address (or proxy server), device and
                          application identification numbers, location, browser type, hardware model, Internet service
                          provider and/or mobile carrier, operating system, and system configuration information.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Location Data.</b> We collect location data such as information about your device&apos;s
                          location, which can be either precise or imprecise. How much information we collect depends on
                          the type and settings of the device you use to access the Services. For example, we may use
                          GPS and other technologies to collect geolocation data that tells us your current location
                          (based on your IP address). You can opt out of allowing us to collect this information either
                          by refusing access to the information or by disabling your Location setting on your device.
                          However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                        </p>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. How do we process your information?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We process your information to provide, improve, and administer our Services, communicate with
                      you, for security and fraud prevention, and to comply with law. We may also process your
                      information for other purposes with your consent.
                    </p>
                    <h3>
                      We process your personal information for a variety of reasons, depending on how you interact with
                      our Services, including:
                    </h3>
                    <ul>
                      <li>
                        <p>
                          To facilitate account creation and authentication and otherwise manage user accounts. We may
                          process your information so you can create and log in to your account, as well as keep your
                          account in working order.
                        </p>
                      </li>
                      <li>
                        <p>
                          To deliver and facilitate delivery of services to the user. We may process your information to
                          provide you with the requested service.
                        </p>
                      </li>
                      <li>
                        <p>
                          To respond to user inquiries/offer support to users. We may process your information to
                          respond to your inquiries and solve any potential issues you might have with the requested
                          service.
                        </p>
                      </li>
                      <li>
                        <p>
                          To fulfil and manage your orders. We may process your information to fulfil and manage your
                          orders, payments, returns, and exchanges made through the Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          To enable user-to-user communications. We may process your information if you choose to use
                          any of our offerings that allow for communication with another user.
                        </p>
                      </li>
                      <li>
                        <p>
                          To send you marketing and promotional communications. We may process the personal information
                          you send to us for our marketing purposes, if this is in accordance with your marketing
                          preferences. You can opt out of our marketing emails at any time. For more information, see
                          &apos;WHAT ARE YOUR PRIVACY RIGHTS?&apos; below.
                        </p>
                      </li>
                      <li>
                        <p>
                          To evaluate and improve our Services, products, marketing, and your experience. We may process
                          your information when we believe it is necessary to identify usage trends, determine the
                          effectiveness of our promotional campaigns, and to evaluate and improve our Services,
                          products, marketing, and your experience.
                        </p>
                      </li>
                      <li>
                        <p>
                          To comply with our legal obligations. We may process your information to comply with our legal
                          obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                        </p>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. When and with whom do we share your personal information?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We may share information in specific situations described in this section and/or with the
                      following third parties.
                    </p>
                    <p>We may need to share your personal information in the following situations:</p>
                    <ul>
                      <li>
                        <p>
                          <b>Business Transfers.</b> We may share or transfer your information in connection with, or
                          during negotiations of, any merger, sale of company assets, financing, or acquisition of all
                          or a portion of our business to another company.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Business Partners.</b> We may share your information with our business partners to offer
                          you certain products, services, or promotions.
                        </p>
                      </li>
                    </ul>
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

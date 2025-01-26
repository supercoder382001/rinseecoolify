import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial18 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial18-max-width thq-section-max-width">
          <div className="testimonial18-container1 thq-grid-2">
            <div className="testimonial18-section-title">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="testimonial18-text23 thq-heading-2">
                      Testimonials
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="testimonial18-text31 thq-body-large">
                      Rinsee has made my life so much easier! The express
                      delivery and quality cleaning services are top-notch.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="testimonial18-container2">
                <button
                  type="button"
                  className="thq-button-filled testimonial18-button1"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="testimonial18-text30">
                          Primary action
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button
                  type="button"
                  className="thq-button-outline testimonial18-button2"
                >
                  <span>
                    {props.action2 ?? (
                      <Fragment>
                        <span className="testimonial18-text27">
                          Secondary action
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="testimonial18-content">
              <div className="testimonial18-column1 thq-card">
                <div className="testimonial18-stars1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial18-text24 thq-body-small">
                        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse varius enim in eros elementum
                        tristique. Duis cursus, mi quis viverra ornare.&quot;
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial18-avatar1">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial18-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial18-avatar-content1">
                    <span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial18-text26 thq-body-small">
                            Sara Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial18-text25 thq-body-small">
                            Marketing Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column2 thq-card">
                <div className="testimonial18-stars2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial18-text37 thq-body-small">
                        I love the convenience of Rinsee&apos;s free home pickup
                        service. It saves me a lot of time and hassle.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial18-avatar2">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial18-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial18-avatar-content2">
                    <span>
                      {props.author2 ?? (
                        <Fragment>
                          <span className="testimonial18-text29 thq-body-small">
                            Author Name
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial18-text35 thq-body-small">
                            Business Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column3 thq-card">
                <div className="testimonial18-stars3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial18-text36 thq-body-small">
                        I highly recommend Rinsee for their affordable pricing
                        plans and professional approach to laundry care.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial18-avatar3">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial18-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial18-avatar-content3">
                    <span>
                      {props.author3 ?? (
                        <Fragment>
                          <span className="testimonial18-text33 thq-body-small">
                            Author Name
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial18-text34 thq-body-small">
                            Teacher
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column4 thq-card">
                <div className="testimonial18-stars4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial18-text28 thq-body-small">
                        Rinsee exceeded my expectations with their quick
                        turnaround time and attention to detail.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial18-avatar4">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial18-author41 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial18-avatar-content4">
                    <span>
                      {props.author4 ?? (
                        <Fragment>
                          <span className="testimonial18-text22 thq-body-small">
                            Author Name
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial18-text32 thq-body-small">
                            IT Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial18-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .testimonial18-container1 {
            align-items: start;
          }
          .testimonial18-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-container2 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            align-items: flex-start;
          }
          .testimonial18-content {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .testimonial18-column1 {
            top: 10%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-avatar1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-column2 {
            top: 14%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-avatar2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-column3 {
            top: 18%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-avatar3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-column4 {
            top: 22%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars4 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-avatar4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-author41 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-text22 {
            height: auto;
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text23 {
            display: inline-block;
          }
          .testimonial18-text24 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text25 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text26 {
            height: auto;
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text27 {
            display: inline-block;
          }
          .testimonial18-text28 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text29 {
            height: auto;
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text30 {
            display: inline-block;
          }
          .testimonial18-text31 {
            display: inline-block;
          }
          .testimonial18-text32 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text33 {
            height: auto;
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text34 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text35 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text36 {
            height: auto;
            display: inline-block;
          }
          .testimonial18-text37 {
            height: auto;
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial18-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .testimonial18-section-title {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .testimonial18-container2 {
              flex-wrap: wrap;
            }
            .testimonial18-button1 {
              flex: 1;
            }
            .testimonial18-button2 {
              flex: 1;
            }
            .testimonial18-column1 {
              width: 100%;
            }
            .testimonial18-column2 {
              width: 100%;
            }
            .testimonial18-column3 {
              width: 100%;
            }
            .testimonial18-column4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial18.propTypes = {
  author4Alt: PropTypes.string,
  author4: PropTypes.element,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  author1Name: PropTypes.element,
  action2: PropTypes.element,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
  author2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  author4Position: PropTypes.element,
  author3: PropTypes.element,
  author3Position: PropTypes.element,
  author2Position: PropTypes.element,
  author3Src: PropTypes.string,
  review3: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial18

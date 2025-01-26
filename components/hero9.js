import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-header30 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-max-width thq-section-max-width">
          <div className="hero9-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero9-text8 thq-heading-1">
                    Professional Laundry and Dry Cleaning Services
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero9-text7 thq-body-large">
                    Get your clothes cleaned and delivered on time with
                    Rinsee&apos;s top-notch laundry and dry cleaning services.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero9-actions">
              <button className="thq-button-filled hero9-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero9-text6 thq-body-small">
                        Schedule Pickup
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero9-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero9-text5 thq-body-small">
                        Learn More
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero9-header30 {
            gap: var(--dl-space-space-twounits);
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.7);
          }
          .hero9-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .hero9-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero9-text5 {
            display: inline-block;
            text-align: center;
          }
          .hero9-text6 {
            display: inline-block;
            text-align: center;
          }
          .hero9-text7 {
            display: inline-block;
            text-align: center;
          }
          .hero9-text8 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .hero9-text7 {
              text-align: center;
            }
            .hero9-text8 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero9-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero9-button1 {
              width: 100%;
            }
            .hero9-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero9

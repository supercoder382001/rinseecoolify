import React from 'react'

import PropTypes from 'prop-types'

const FAQ = (props) => {
  return (
    <>
      <div className={`faq-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq-element1 accordion-element"
        >
          <div className="faq-details1">
            <span className="faq-text10">
              Does Rinsee provide dry clean with same day or 1 day delivery?
            </span>
            <span data-role="accordion-content" className="faq-text11">
              We ensure that your dry clean order is delivered within a
              convenient timeframe of 3 to 4 days. For those who need their
              items sooner, we offer an express delivery option. This allows you
              to receive your order on the same day or the next day, depending
              on your specific requirements. Whether you are searching for a
              reliable laundry service near me or looking for a wash and fold
              laundry service near me, we are here to meet your needs with
              efficiency and care. Your satisfaction is our priority.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon10">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element2 accordion-element"
        >
          <div className="faq-details2">
            <span className="faq-text12">
              Does Rinsee provide free home delivery?
            </span>
            <span data-role="accordion-content" className="faq-text13">
              Yes, Rinsee offers a convenient laundry service near me, providing
              free home pickup and delivery for all its laundry and dry clean
              orders. This includes their popular wash and fold laundry service
              near me, ensuring customer satisfaction.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon12">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element3 accordion-element"
        >
          <div className="faq-details3">
            <span className="faq-text14">
              Do you provide online laundry &amp; dry cleaning service?
            </span>
            <span data-role="accordion-content" className="faq-text15">
              Yes, you can easily place your order online through our
              user-friendly mobile app. We offer a convenient laundry service
              near you, ensuring that you can access our wash and fold laundry
              service near me with just a few taps. Additionally, we provide
              free home pickup and delivery at all our shops across India for
              your convenience.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon14">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element4 accordion-element"
        >
          <div className="faq-details4">
            <span className="faq-text16">
              Does Rinsee have any option of express delivery for laundry &amp;
              dry cleaning services?
            </span>
            <span data-role="accordion-content" className="faq-text17">
              Yes, we do provide express service with same day or 1 day
              delivery.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon16">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element5 accordion-element"
        >
          <div className="faq-details5">
            <span className="faq-text18">
              Does Rinsee provide dry wash service?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span data-role="accordion-content" className="faq-text19">
              We offer a comprehensive range of laundry services, including dry
              cleaning, where garments are expertly cleaned without the use of
              water, and wash and fold services, where items are machine washed
              and dried, ensuring convenience for those searching for laundry
              service near me.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon18">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text10 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text11 {
            color: rgb(204, 204, 204);
            width: 100%;
            text-align: justify;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .faq-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text12 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text13 {
            color: rgb(204, 204, 204);
            width: 100%;
            text-align: justify;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text14 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text15 {
            color: rgb(204, 204, 204);
            width: 100%;
            text-align: justify;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text16 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text17 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element5 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text18 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text19 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text12 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text18 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq-text10 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq-text11 {
              color: rgb(204, 204, 204);
              text-align: justify;
              font-family: Poppins;
              line-height: 24px;
            }
            .faq-text12 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq-text13 {
              color: rgb(204, 204, 204);
              text-align: justify;
              font-family: Poppins;
              line-height: 28px;
            }
            .faq-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq-text15 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq-text16 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq-text17 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq-text18 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq-text19 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ

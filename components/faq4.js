import React from 'react'

import PropTypes from 'prop-types'

const FAQ4 = (props) => {
  return (
    <>
      <div
        id={props.fAQ4Id}
        className={`faq4-accordion ${props.rootClassName} `}
      >
        <div
          data-role="accordion-container"
          className="faq4-element1 accordion-element"
        >
          <div className="faq4-details1">
            <span className="faq4-text10">
              What does wash &amp; iron mean ?
            </span>
            <span data-role="accordion-content" className="faq4-text11">
              <span>
                RINSEE&apos;s wash and iron service uses machines to clean
                clothes with safe, gentle detergents. They fully dry items and
                press them with high-quality steam irons. The focus is on
                effective cleaning, thorough drying, and precise pressing..
              </span>
              <br></br>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq4-icon1">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq4-element2 accordion-element"
        >
          <div className="faq4-details2">
            <span className="faq4-text14">
              Can you iron clothes after washing?
            </span>
            <span data-role="accordion-content" className="faq4-text15">
              Drying laundry outside can expose it to bacteria. Ironing helps
              kill germs. At RINSEE, we go a step further. We use hygienic
              drying methods, then steam iron clothes. This double approach
              ensures cleanliness and freshness.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq4-icon3">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq4-element3 accordion-element"
        >
          <div className="faq4-details3">
            <span className="faq4-text16">Do all clothes need ironing?</span>
            <span data-role="accordion-content" className="faq4-text17">
              <span>
                Clothes labeled non-iron or wrinkle-resistant usually don&apos;t
                need ironing. But sometimes, a light press can help.
                RINSEE&apos;s team knows how to handle all fabric types
                correctly.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq4-icon5">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq4-element4 accordion-element"
        >
          <div className="faq4-details4">
            <span className="faq4-text21">
              What are the benefits of wash and iron?
            </span>
            <span data-role="accordion-content" className="faq4-text22">
              <span>
                Washing alone doesn&apos;t make clothes look their best. Ironing
                removes wrinkles, making outfits look neat and stylish. It adds
                a polished touch to your clothes. At RINSEE, we believe that
                when your clothes look good, we&apos;ve done our job well.
              </span>
              <br></br>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq4-icon7">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq4-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq4-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq4-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq4-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq4-text11 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq4-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq4-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq4-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq4-text14 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq4-text15 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq4-icon3 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq4-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq4-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq4-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq4-text17 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq4-icon5 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq4-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq4-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq4-text21 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq4-text22 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq4-icon7 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq4-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq4-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq4-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq4-text21 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq4-text10 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq4-text11 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq4-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq4-text15 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq4-text16 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq4-text17 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq4-text21 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq4-text22 {
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

FAQ4.propTypes = {
  rootClassName: PropTypes.string,
  fAQ4Id: PropTypes.string,
}

export default FAQ4

import React from 'react'

import PropTypes from 'prop-types'

const FAQ3 = (props) => {
  return (
    <>
      <div className={`faq3-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq3-element1 accordion-element"
        >
          <div className="faq3-details1">
            <span className="faq3-text10">
              What is the meaning of dry cleaning?
            </span>
            <span data-role="accordion-content" className="faq3-text11">
              Dry cleaning isn&apos;t just a fancy term. It&apos;s a special way
              to clean clothes without water. Instead, it uses a liquid solvent
              and special machines. This method needs experts to do it right.
              That&apos;s why picking a good dry cleaner matters. Good news -
              RINSEE serves all of Delhi, so you&apos;re covered!
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon10">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element2 accordion-element"
        >
          <div className="faq3-details2">
            <span className="faq3-text12">
              What is the importance of professional dry cleaning for your
              clothes?
            </span>
            <span data-role="accordion-content" className="faq3-text13">
              For fancy clothes, party wear, or soft fabrics, dry cleaning makes
              them look new again. People choose it because it&apos;s great at
              removing stains, stops clothes from shrinking, keeps colors
              bright, and doesn&apos;t change how clothes feel. That&apos;s why
              RINSEE&apos;s top-notch tech works wonders on your pricey or
              delicate outfits.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon12">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element3 accordion-element"
        >
          <div className="faq3-details3">
            <span className="faq3-text14">
              What are the benefits of dry cleaning your clothes?
            </span>
            <span data-role="accordion-content" className="faq3-text15">
              Dry cleaning is smart when you need to get rid of tough stains and
              smells. It&apos;s also perfect for big, heavy clothes. It can make
              old clothes look better and even keeps bugs away. At RINSEE, we go
              the extra mile to make your clothes super fresh and look flawless
              when you wear them.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon14">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element4 accordion-element"
        >
          <div className="faq3-details4">
            <span className="faq3-text16">Is dry cleaning safe?</span>
            <span data-role="accordion-content" className="faq3-text17">
              You might wonder if it&apos;s safe for your special clothes.
              Sometimes, dry cleaning is the only choice, and yes, it does use
              chemicals. But pick a trusted name like RINSEE. We make sure our
              dry cleaning is safe. We&apos;re careful about which chemicals we
              use and how much we use them
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon16">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element5 accordion-element"
        >
          <div className="faq3-details5">
            <span className="faq3-text18">
              Is ironing included in dry cleaning service?
            </span>
            <span data-role="accordion-content" className="faq3-text19">
              Yes, the last step of dry cleaning includes finishing, pressing,
              and steam ironing. At RINSEE, we take our time with this final
              touch. We want to make sure you get perfect results from both the
              cleaning and ironing parts of the process.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon18">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq3-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text11 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq3-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text12 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text13 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text14 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text15 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text17 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element5 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text19 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq3-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text12 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text18 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq3-text10 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text11 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq3-text12 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text13 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text15 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text16 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text17 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text18 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text19 {
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

FAQ3.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ3

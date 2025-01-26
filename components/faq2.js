import React from 'react'

import PropTypes from 'prop-types'

const FAQ2 = (props) => {
  return (
    <>
      <div className={`faq2-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq2-element1 accordion-element"
        >
          <div className="faq2-details1">
            <span className="faq2-text1">
              Is steam ironing good for clothes?
            </span>
            <span data-role="accordion-content" className="faq2-text2">
              For delicate fabrics, steam ironing is often preferred. It&apos;s
              also great for creating sharp pleats and crisp creases. At RINSEE,
              we strive for excellence, and nothing showcases that better than
              impeccably pressed clothing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq2-icon1">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq2-element2 accordion-element"
        >
          <div className="faq2-details2">
            <span className="faq2-text3">What is steam ironing?</span>
            <span data-role="accordion-content" className="faq2-text4">
              In simple terms, a steam iron has a built-in water reservoir. The
              iron&apos;s heat transforms this water into steam, which then
              flows through holes in the iron&apos;s base onto the fabric.
              RINSEE&apos;s steam ironing service demonstrates a deep
              understanding of different fabrics and the appropriate heat levels
              for each
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq2-icon3">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq2-element3 accordion-element"
        >
          <div className="faq2-details3">
            <span className="faq2-text5">
              What are the benefits of steam ironing?
            </span>
            <span data-role="accordion-content" className="faq2-text6">
              Steam is crucial for precise ironing as it swiftly and effectively
              smooths out wrinkles. It penetrates the fabric fibers, and the
              iron&apos;s heat then helps these fibers settle neatly into place.
              RINSEE professionals are well-versed in the benefits of steam
              irons and skilled at managing the intricacies of various fabrics
              and heat settings.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq2-icon5">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq2-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq2-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq2-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq2-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq2-text2 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq2-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq2-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq2-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq2-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq2-text4 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq2-icon3 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq2-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq2-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq2-text5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq2-text6 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq2-icon5 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq2-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq2-text3 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq2-text5 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq2-text1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq2-text2 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq2-text3 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq2-text4 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq2-text5 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq2-text6 {
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

FAQ2.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ2

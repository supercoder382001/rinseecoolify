import React from 'react'

import PropTypes from 'prop-types'

const FAQ1 = (props) => {
  return (
    <>
      <div className={`faq1-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq1-element1 accordion-element"
        >
          <div className="faq1-details1">
            <span className="faq1-text10">
              What does wash &amp; fold mean ?
            </span>
            <span data-role="accordion-content" className="faq1-text11">
              <span>
                When you search for &quot;wash and fold&quot; online,
                you&apos;ll find it&apos;s a basic laundry service. Your clothes
                are washed, dried, and folded before being returned to you. This
                service doesn&apos;t include ironing or pressing. At RINSEE, we
                offer wash and fold, but we also provide options for washing and
                ironing, steam ironing, and dry cleaning.
              </span>
              <br></br>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon1">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element2 accordion-element"
        >
          <div className="faq1-details2">
            <span className="faq1-text14">
              What is the difference between wash and fold and laundry?
            </span>
            <span data-role="accordion-content" className="faq1-text15">
              People often use &quot;wash and fold&quot; to mean a laundry
              service, not home washing. The process is similar - wash, dry, and
              fold clothes to make them ready for storage. But the scale,
              technology, and performance of machines make the difference, as
              RINSEE shows.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon3">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element3 accordion-element"
        >
          <div className="faq1-details3">
            <span className="faq1-text16">
              Why is it important to fold laundry?
            </span>
            <span data-role="accordion-content" className="faq1-text17">
              <span>
                Folding helps reduce wrinkles and creases in your laundry,
                making it easier to iron and wear. It also saves storage space,
                keeps shelves tidy, and can extend the life of your clothes. If
                you&apos;re looking for a wash and fold service near you, RINSEE
                is ideal. We cover all of DELHI and offer 24-hour delivery.
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
            <svg viewBox="0 0 1024 1024" className="faq1-icon5">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element4 accordion-element"
        >
          <div className="faq1-details4">
            <span className="faq1-text21">
              What is not considered wash and fold?
            </span>
            <span data-role="accordion-content" className="faq1-text22">
              Dry cleaning, steam ironing or pressing are not part of the wash
              and fold process. But since LaundryMate has all these services as
              individual offerings, you will have no problem at all.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon7">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text11 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq1-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text14 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text15 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon3 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text17 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon5 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text21 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text22 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon7 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq1-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text21 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq1-text10 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text11 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq1-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text15 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq1-text16 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text17 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq1-text21 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text22 {
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

FAQ1.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ1

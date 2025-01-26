import React from 'react'

import PropTypes from 'prop-types'

const Accordion = (props) => {
  return (
    <>
      <div className={`accordion-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="accordion-element1 accordion-element"
        >
          <div className="accordion-details1">
            <span className="accordion-text1">{props.text}</span>
            <span data-role="accordion-content" className="accordion-text2">
              {props.text1}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon1"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element2 accordion-element"
        >
          <div className="accordion-details2">
            <span className="accordion-text3">{props.text2}</span>
            <span data-role="accordion-content" className="accordion-text4">
              {props.text3}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon3"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element3 accordion-element"
        >
          <div className="accordion-details3">
            <span className="accordion-text5">{props.text4}</span>
            <span data-role="accordion-content" className="accordion-text6">
              {props.text5}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon5"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element4 accordion-element"
        >
          <div className="accordion-details4">
            <span className="accordion-text7">{props.text41}</span>
            <span data-role="accordion-content" className="accordion-text8">
              {props.text51}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon7"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .accordion-accordion {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-element1 {
            width: 640px;
            user-select: none;
          }
          .accordion-details1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text2 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            text-align: justify;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .accordion-element2 {
            width: 640px;
            user-select: none;
          }
          .accordion-details2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text3 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text4 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            text-align: justify;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon3 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .accordion-element3 {
            width: 640px;
            user-select: none;
          }
          .accordion-details3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text5 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text6 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            text-align: justify;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon5 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .accordion-element4 {
            width: 640px;
            user-select: none;
          }
          .accordion-details4 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text7 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text8 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            text-align: justify;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon7 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .accordion-element1 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .accordion-element2 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text3 {
              font-size: 16px;
            }
            .accordion-element3 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text5 {
              font-size: 16px;
            }
            .accordion-element4 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text7 {
              font-size: 16px;
            }
          }
          @media (max-width: 479px) {
            .accordion-accordion {
              width: 100%;
            }
            .accordion-element1 {
              width: 100%;
              max-width: auto;
            }
            .accordion-text1 {
              color: var(--dl-color-gray-white);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 24px;
            }
            .accordion-text2 {
              color: var(--dl-color-gray-900);
              text-align: justify;
              font-family: Poppins;
              line-height: 24px;
            }
            .accordion-element2 {
              width: 100%;
              max-width: auto;
            }
            .accordion-text3 {
              color: var(--dl-color-gray-white);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 27px;
            }
            .accordion-text4 {
              color: var(--dl-color-gray-900);
              text-align: justify;
              font-family: Poppins;
              line-height: 24px;
            }
            .accordion-element3 {
              width: 100%;
              max-width: auto;
            }
            .accordion-text5 {
              color: var(--dl-color-gray-white);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 27px;
            }
            .accordion-text6 {
              color: var(--dl-color-gray-900);
              text-align: justify;
              font-family: Poppins;
              line-height: 24px;
            }
            .accordion-element4 {
              width: 100%;
              max-width: auto;
            }
            .accordion-text7 {
              color: var(--dl-color-gray-white);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 27px;
            }
            .accordion-text8 {
              color: var(--dl-color-gray-900);
              text-align: justify;
              font-family: Poppins;
              line-height: 24px;
            }
            .accordionroot-class-name {
              width: 100%;
            }
            .accordionroot-class-name1 {
              width: 100%;
            }
            .accordionroot-class-name2 {
              width: 100%;
            }
            .accordionroot-class-name3 {
              width: 100%;
            }
            .accordionroot-class-name4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Accordion.propTypes = {
  text41: PropTypes.string,
  text51: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Card1 = (props) => {
  return (
    <>
      <section className={`card1-card ${props.rootClassName} `}>
        <div className="card1-container1">
          <div className="card1-container2">
            <div className="card1-icon">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="card1-text2">1</span>
                  </Fragment>
                )}
              </span>
            </div>
            <h1 className="card1-header">{props.header}</h1>
          </div>
          <p className="card1-description">{props.description}</p>
        </div>
      </section>
      <style jsx>
        {`
          .card1-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card1-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card1-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .card1-icon {
            width: 50px;
            height: 50px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #301cc0;
          }
          .card1-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 36px;
          }
          .card1-description {
            color: rgb(194, 198, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .card1-text2 {
            display: inline-block;
            font-size: 24px;
          }
          .card1root-class-name {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card1root-class-name1 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card1root-class-name2 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card1root-class-name3 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card1root-class-name4 {
            margin-left: 0px;
            margin-right: 0px;
          }
          @media (max-width: 479px) {
            .card1-card {
              width: 100%;
              padding: 5px;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card1-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .card1-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: row;
            }
            .card1-description {
              color: rgb(255, 255, 255);
              width: auto;
              font-family: Poppins;
              line-height: 28px;
            }
            .card1root-class-name {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card1root-class-name1 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card1root-class-name2 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card1root-class-name3 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card1root-class-name4 {
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Card1.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.element,
  description: PropTypes.string,
}

export default Card1

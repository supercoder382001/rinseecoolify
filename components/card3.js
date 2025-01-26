import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Card3 = (props) => {
  return (
    <>
      <section className={`card3-card ${props.rootClassName} `}>
        <div className="card3-container1">
          <div className="card3-container2">
            <div className="card3-icon">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="card3-text2">
                      <span>3</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <h1 className="card3-header">{props.header}</h1>
          </div>
          <p className="card3-description">{props.description}</p>
        </div>
      </section>
      <style jsx>
        {`
          .card3-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card3-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card3-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .card3-icon {
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
          .card3-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 36px;
          }
          .card3-description {
            color: rgb(194, 198, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .card3-text2 {
            display: inline-block;
            font-size: 24px;
          }
          .card3root-class-name {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card3root-class-name1 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card3root-class-name2 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card3root-class-name3 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card3root-class-name4 {
            margin-left: 0px;
            margin-right: 0px;
          }
          @media (max-width: 767px) {
            .card3root-class-name {
              width: 100%;
            }
            .card3root-class-name1 {
              width: 100%;
            }
            .card3root-class-name2 {
              width: 100%;
            }
            .card3root-class-name3 {
              width: 100%;
            }
            .card3root-class-name4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .card3-card {
              width: 100%;
              height: 100%;
              padding: 5px;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card3-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              height: 100%;
            }
            .card3-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: row;
            }
            .card3-header {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 36px;
            }
            .card3-description {
              fill: #ffffff;
              color: rgb(255, 255, 255);
              width: auto;
              font-family: Poppins;
              line-height: 28px;
            }
            .card3root-class-name {
              margin-left: 1px;
              margin-right: 1px;
            }
            .card3root-class-name1 {
              margin-left: 1px;
              margin-right: 1px;
            }
            .card3root-class-name2 {
              margin-left: 1px;
              margin-right: 1px;
            }
            .card3root-class-name3 {
              margin-left: 1px;
              margin-right: 1px;
            }
            .card3root-class-name4 {
              margin-left: 1px;
              margin-right: 1px;
            }
          }
        `}
      </style>
    </>
  )
}

Card3.propTypes = {
  header: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default Card3

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Card7 = (props) => {
  return (
    <>
      <section className={`card7-card ${props.rootClassName} `}>
        <div className="card7-container1">
          <div className="card7-container2">
            <div className="card7-icon">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="card7-text2">
                      <span>3</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <h1 className="card7-header">{props.header}</h1>
          </div>
          <p className="card7-description">{props.description}</p>
        </div>
      </section>
      <style jsx>
        {`
          .card7-card {
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
          .card7-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card7-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .card7-icon {
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
          .card7-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 36px;
          }
          .card7-description {
            color: rgb(194, 198, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .card7-text2 {
            display: inline-block;
            font-size: 24px;
          }
          .card7root-class-name {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name1 {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name2 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name3 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name4 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name5 {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name6 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name7 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card7root-class-name8 {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
          }
          @media (max-width: 767px) {
            .card7root-class-name {
              width: 100%;
            }
            .card7root-class-name2 {
              width: 100%;
            }
            .card7root-class-name3 {
              width: 100%;
            }
            .card7root-class-name4 {
              width: 100%;
            }
            .card7root-class-name6 {
              width: 100%;
            }
            .card7root-class-name7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .card7-card {
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
            .card7-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              height: 100%;
            }
            .card7-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: row;
            }
            .card7-header {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 36px;
            }
            .card7-description {
              fill: #ffffff;
              color: rgb(255, 255, 255);
              width: auto;
              font-family: Poppins;
              line-height: 28px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

Card7.propTypes = {
  header: PropTypes.string,
  text: PropTypes.element,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card7

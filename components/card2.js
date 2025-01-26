import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Card2 = (props) => {
  return (
    <>
      <section className={`card2-card ${props.rootClassName} `}>
        <div className="card2-container1">
          <div className="card2-container2">
            <div className="card2-icon">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="card2-text2">
                      <span>2</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <h1 className="card2-header">{props.header}</h1>
          </div>
          <p className="card2-description">{props.description}</p>
        </div>
      </section>
      <style jsx>
        {`
          .card2-card {
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
          .card2-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .card2-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .card2-icon {
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
          .card2-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 36px;
          }
          .card2-description {
            color: rgb(194, 198, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .card2-text2 {
            display: inline-block;
            font-size: 24px;
          }
          .card2root-class-name {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card2root-class-name1 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card2root-class-name2 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card2root-class-name3 {
            margin-left: 0px;
            margin-right: 0px;
          }
          .card2root-class-name4 {
            margin-left: 0px;
            margin-right: 0px;
          }
          @media (max-width: 479px) {
            .card2-card {
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
            .card2-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              height: 100%;
            }
            .card2-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: row;
            }
            .card2-header {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 36px;
            }
            .card2-description {
              color: rgb(255, 255, 255);
              width: auto;
              font-family: Poppins;
              line-height: 28px;
            }
            .card2root-class-name {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card2root-class-name1 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card2root-class-name2 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card2root-class-name3 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .card2root-class-name4 {
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Card2.propTypes = {
  text: PropTypes.element,
  header: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card2

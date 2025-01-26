import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <section className={`card-card ${props.rootClassName} `}>
        <div className="card-icon1">
          <img alt={props.iconAlt} src={props.icon} className="card-icon2" />
        </div>
        <main className="card-content">
          <h1 className="card-header">{props.header}</h1>
          <p className="card-description">{props.description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card-icon1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #301cc0;
          }
          .card-icon2 {
            height: 30px;
            object-fit: cover;
          }
          .card-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .card-description {
            color: #c2c6cc;
            text-align: justify;
            font-family: Poppins;
            line-height: 28px;
          }
          .cardroot-class-name {
            flex: 1;
            height: 400px;
          }
          .cardroot-class-name1 {
            height: 100%;
          }
          .cardroot-class-name2 {
            height: 100%;
          }
          .cardroot-class-name3 {
            flex: 1;
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name4 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name5 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name6 {
            flex: 1;
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name7 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name8 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name9 {
            flex: 1;
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name10 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name11 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name12 {
            flex: 1;
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name13 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name14 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name15 {
            flex: 1;
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name16 {
            height: var(--dl-size-size-xxlarge);
          }
          .cardroot-class-name17 {
            height: var(--dl-size-size-xxlarge);
          }
          @media (max-width: 991px) {
            .cardroot-class-name {
              flex: 0 0 auto;
              width: 100%;
              height: 100%;
            }
            .cardroot-class-name1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name2 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name3 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name5 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name6 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name8 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name9 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name10 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name11 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name12 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name13 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name14 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name15 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name16 {
              flex: 0 0 auto;
              width: 100%;
            }
            .cardroot-class-name17 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .card-card {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .card-header {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 36px;
            }
            .card-description {
              color: rgb(194, 198, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .cardroot-class-name {
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  header: PropTypes.string,
}

export default Card

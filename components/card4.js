import React from 'react'

import PropTypes from 'prop-types'

const Card4 = (props) => {
  return (
    <>
      <section className={`card4-card ${props.rootClassName} `}>
        <main className="card4-content">
          <h1 className="card4-header">{props.header}</h1>
          <p className="card4-description">{props.description}</p>
        </main>
        <div className="card4-icon">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="card4-image"
          />
        </div>
      </section>
      <style jsx>
        {`
          .card4-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card4-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card4-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 36px;
          }
          .card4-description {
            color: rgb(194, 198, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .card4-icon {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            padding-bottom: 16px;
            justify-content: center;
          }
          .card4-image {
            width: 229px;
            height: 229px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-buttonradius);
          }
          .card4root-class-name {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name1 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name2 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name3 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name4 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name5 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name6 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name7 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name8 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name9 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name10 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name11 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name12 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name13 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name14 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name15 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name16 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name17 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name18 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name19 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name20 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name21 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name22 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name23 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name24 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name25 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name26 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name27 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name28 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name29 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name30 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name31 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name32 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name33 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name34 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name35 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name36 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name37 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name38 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name39 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name40 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name41 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name42 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name43 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name44 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name45 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name46 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name47 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name48 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name49 {
            flex: 1;
            width: 275px;
            height: 100%;
          }
          .card4root-class-name50 {
            width: 275px;
            height: 100%;
          }
          .card4root-class-name51 {
            width: 275px;
            height: 100%;
          }
          @media (max-width: 767px) {
            .card4-card {
              height: 100%;
            }
            .card4-description {
              text-align: center;
            }
            .card4root-class-name {
              width: 100%;
            }
            .card4root-class-name1 {
              width: 100%;
            }
            .card4root-class-name2 {
              width: 100%;
            }
            .card4root-class-name3 {
              width: 100%;
            }
            .card4root-class-name4 {
              width: 100%;
            }
            .card4root-class-name5 {
              width: 100%;
            }
            .card4root-class-name6 {
              width: 100%;
            }
            .card4root-class-name7 {
              width: 100%;
            }
            .card4root-class-name8 {
              width: 100%;
            }
            .card4root-class-name9 {
              width: 100%;
            }
            .card4root-class-name10 {
              width: 100%;
            }
            .card4root-class-name11 {
              width: 100%;
            }
            .card4root-class-name12 {
              width: 100%;
            }
            .card4root-class-name13 {
              width: 100%;
            }
            .card4root-class-name14 {
              width: 100%;
            }
            .card4root-class-name15 {
              width: 100%;
            }
            .card4root-class-name16 {
              width: 100%;
            }
            .card4root-class-name17 {
              width: 100%;
            }
            .card4root-class-name18 {
              width: 100%;
            }
            .card4root-class-name19 {
              width: 100%;
            }
            .card4root-class-name20 {
              width: 100%;
            }
            .card4root-class-name21 {
              width: 100%;
            }
            .card4root-class-name22 {
              width: 100%;
            }
            .card4root-class-name23 {
              width: 100%;
            }
            .card4root-class-name24 {
              width: 100%;
            }
            .card4root-class-name25 {
              width: 100%;
            }
            .card4root-class-name26 {
              width: 100%;
            }
            .card4root-class-name27 {
              width: 100%;
            }
            .card4root-class-name28 {
              width: 100%;
            }
            .card4root-class-name29 {
              width: 100%;
            }
            .card4root-class-name30 {
              width: 100%;
            }
            .card4root-class-name31 {
              width: 100%;
            }
            .card4root-class-name32 {
              width: 100%;
            }
            .card4root-class-name33 {
              width: 100%;
            }
            .card4root-class-name34 {
              width: 100%;
            }
            .card4root-class-name35 {
              width: 100%;
            }
            .card4root-class-name36 {
              width: 100%;
            }
            .card4root-class-name37 {
              width: 100%;
            }
            .card4root-class-name38 {
              width: 100%;
            }
            .card4root-class-name39 {
              width: 100%;
            }
            .card4root-class-name40 {
              width: 100%;
            }
            .card4root-class-name41 {
              width: 100%;
            }
            .card4root-class-name42 {
              width: 100%;
            }
            .card4root-class-name43 {
              width: 100%;
            }
            .card4root-class-name44 {
              width: 100%;
            }
            .card4root-class-name45 {
              width: 100%;
            }
            .card4root-class-name46 {
              width: 100%;
            }
            .card4root-class-name47 {
              width: 100%;
            }
            .card4root-class-name48 {
              width: 100%;
            }
            .card4root-class-name49 {
              width: 100%;
            }
            .card4root-class-name50 {
              width: 100%;
            }
            .card4root-class-name51 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .card4-card {
              align-items: center;
              background-color: #191919;
            }
            .card4-content {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .card4-description {
              text-align: center;
            }
            .card4-icon {
              width: auto;
              height: auto;
              background-color: transparent;
            }
            .card4-image {
              width: 100%;
              height: 100%;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-buttonradius);
            }
            .card4root-class-name {
              width: 100%;
            }
            .card4root-class-name1 {
              width: 100%;
            }
            .card4root-class-name2 {
              width: 100%;
            }
            .card4root-class-name3 {
              width: 100%;
            }
            .card4root-class-name4 {
              width: 100%;
            }
            .card4root-class-name5 {
              width: 100%;
            }
            .card4root-class-name6 {
              width: 100%;
            }
            .card4root-class-name7 {
              width: 100%;
            }
            .card4root-class-name8 {
              width: 100%;
            }
            .card4root-class-name9 {
              width: 100%;
            }
            .card4root-class-name10 {
              width: 100%;
            }
            .card4root-class-name11 {
              width: 100%;
            }
            .card4root-class-name12 {
              width: 100%;
            }
            .card4root-class-name13 {
              width: 100%;
            }
            .card4root-class-name14 {
              width: 100%;
            }
            .card4root-class-name15 {
              width: 100%;
            }
            .card4root-class-name16 {
              width: 100%;
            }
            .card4root-class-name17 {
              width: 100%;
            }
            .card4root-class-name18 {
              width: 100%;
            }
            .card4root-class-name19 {
              width: 100%;
            }
            .card4root-class-name20 {
              width: 100%;
            }
            .card4root-class-name21 {
              width: 100%;
            }
            .card4root-class-name22 {
              width: 100%;
            }
            .card4root-class-name23 {
              width: 100%;
            }
            .card4root-class-name24 {
              width: 100%;
            }
            .card4root-class-name25 {
              width: 100%;
            }
            .card4root-class-name26 {
              width: 100%;
            }
            .card4root-class-name27 {
              width: 100%;
            }
            .card4root-class-name28 {
              width: 100%;
            }
            .card4root-class-name29 {
              width: 100%;
            }
            .card4root-class-name30 {
              width: 100%;
            }
            .card4root-class-name31 {
              width: 100%;
            }
            .card4root-class-name32 {
              width: 100%;
            }
            .card4root-class-name33 {
              width: 100%;
            }
            .card4root-class-name34 {
              width: 100%;
            }
            .card4root-class-name35 {
              width: 100%;
            }
            .card4root-class-name36 {
              width: 100%;
            }
            .card4root-class-name37 {
              width: 100%;
            }
            .card4root-class-name38 {
              width: 100%;
            }
            .card4root-class-name39 {
              width: 100%;
            }
            .card4root-class-name40 {
              width: 100%;
            }
            .card4root-class-name41 {
              width: 100%;
            }
            .card4root-class-name42 {
              width: 100%;
            }
            .card4root-class-name43 {
              width: 100%;
            }
            .card4root-class-name44 {
              width: 100%;
            }
            .card4root-class-name45 {
              width: 100%;
            }
            .card4root-class-name46 {
              width: 100%;
            }
            .card4root-class-name47 {
              width: 100%;
            }
            .card4root-class-name48 {
              width: 100%;
            }
            .card4root-class-name49 {
              width: 100%;
            }
            .card4root-class-name50 {
              width: 100%;
            }
            .card4root-class-name51 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card4.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  header: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Card4

import React from 'react'

import PropTypes from 'prop-types'

const Card5 = (props) => {
  return (
    <>
      <section className="card5-card">
        <div className="card5-icon1">
          <img alt={props.iconAlt} src={props.icon} className="card5-icon2" />
        </div>
        <main className="card5-content">
          <h1 className="card5-header">{props.header}</h1>
          <p className="card5-description">{props.description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card5-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card5-icon1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .card5-icon2 {
            height: 30px;
            object-fit: cover;
          }
          .card5-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card5-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .card5-description {
            color: #c2c6cc;
            font-family: Poppins;
            line-height: 28px;
          }
        `}
      </style>
    </>
  )
}

Card5.propTypes = {
  description: PropTypes.string,
  iconAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  header: PropTypes.string,
}

export default Card5

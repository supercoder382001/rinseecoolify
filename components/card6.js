import React from 'react'

import PropTypes from 'prop-types'

const Card6 = (props) => {
  return (
    <>
      <section className={`card6-card ${props.rootClassName} `}>
        <main className="card6-content">
          <h1 className="card6-header">{props.header}</h1>
          <p className="card6-description">{props.description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card6-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: #292929;
          }
          .card6-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card6-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .card6-description {
            color: #c2c6cc;
            font-family: Poppins;
            line-height: 28px;
          }
          .card6root-class-name {
            flex: 1;
            width: auto;
            height: 350px;
          }
          .card6root-class-name1 {
            flex: 1;
            width: auto;
            height: 350px;
          }
          .card6root-class-name2 {
            width: auto;
            height: 350px;
          }
          .card6root-class-name3 {
            flex: 1;
            width: auto;
            height: 350px;
          }
          .card6root-class-name4 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name5 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name6 {
            width: auto;
            height: 250px;
          }
          .card6root-class-name7 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name8 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name9 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name10 {
            width: auto;
            height: 250px;
          }
          .card6root-class-name11 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name12 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name13 {
            flex: 1;
            width: auto;
            height: 250px;
          }
          .card6root-class-name14 {
            width: auto;
            height: 250px;
          }
          .card6root-class-name15 {
            flex: 1;
            width: auto;
            height: 250px;
          }
        `}
      </style>
    </>
  )
}

Card6.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card6

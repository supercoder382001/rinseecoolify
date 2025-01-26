import React from 'react'

import PropTypes from 'prop-types'

const Review = (props) => {
  return (
    <>
      <section className={`review-card ${props.rootClassName} `}>
        <div className="review-stars">
          <svg viewBox="0 0 1024 1024" className="review-icon10">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon12">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon14">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon16">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon18">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <main className="review-content">
          <p className="review-quote">{props.quote}</p>
          <div className="review-author1">
            <img
              alt={props.avatarAlt}
              src={props.avatarSrc}
              className="review-avatar"
            />
            <div className="review-details">
              <h1 className="review-author2">{props.author}</h1>
              <label className="review-position">{props.position}</label>
            </div>
          </div>
        </main>
      </section>
      <style jsx>
        {`
          .review-card {
            gap: var(--dl-space-space-threeunits);
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
          .review-stars {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .review-icon10 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon12 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon14 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon16 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon18 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-quote {
            color: #cccccc;
            font-size: 18px;
            font-family: Poppins;
            line-height: 25px;
          }
          .review-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .review-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
          }
          .review-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-author2 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .review-position {
            color: #cccccc;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }

          @media (max-width: 991px) {
            .review-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Review.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarSrc: PropTypes.string,
  position: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review

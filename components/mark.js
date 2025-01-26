import React from 'react'

import PropTypes from 'prop-types'

const Mark = (props) => {
  return (
    <>
      <div className={`mark-mark ${props.rootClassName} `}>
        <div className="mark-icon1">
          <svg viewBox="0 0 1024 1024" className="mark-icon2">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <p className="mark-label">{props.label}</p>
      </div>
      <style jsx>
        {`
          .mark-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mark-icon1 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .mark-icon2 {
            fill: #c6ff4b;
            width: 12px;
            height: 12px;
          }
          .mark-label {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 24px;
          }

          @media (max-width: 479px) {
            .mark-label {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 24px;
            }
            .markroot-class-name {
              align-self: center;
            }
            .markroot-class-name1 {
              align-self: center;
            }
            .markroot-class-name2 {
              align-self: center;
            }
            .markroot-class-name3 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Mark.propTypes = {
  rootClassName: PropTypes.string,
  label: PropTypes.string,
}

export default Mark

import React from 'react'

import PropTypes from 'prop-types'

const Includes = (props) => {
  return (
    <>
      <div className={`includes-mark ${props.rootClassName} `}>
        <div className="includes-icon1">
          <svg viewBox="0 0 1024 1024" className="includes-icon2">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <label className="includes-label">{props.label}</label>
      </div>
      <style jsx>
        {`
          .includes-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .includes-icon1 {
            display: flex;
            padding: 5px;
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #414141;
          }
          .includes-icon2 {
            fill: #c6ff4b;
            width: 12px;
            height: 12px;
          }
          .includes-label {
            color: rgb(194, 198, 204);
            font-size: 14px;
            font-family: 'Poppins';
            line-height: 25px;
          }

          @media (max-width: 479px) {
            .includes-label {
              color: rgb(194, 198, 204);
              font-size: 14px;
              font-family: Poppins;
              font-weight: 700;
              line-height: 25px;
            }
          }
        `}
      </style>
    </>
  )
}


Includes.propTypes = {
  rootClassName: PropTypes.string,
  label: PropTypes.string,
}

export default Includes

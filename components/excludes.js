import React from 'react'

import PropTypes from 'prop-types'

const Excludes = (props) => {
  return (
    <>
      <div className={`excludes-mark ${props.rootClassName} `}>
        <div className="excludes-icon1">
          <svg viewBox="0 0 1024 1024" className="excludes-icon2">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
        <label className="excludes-label">{props.label}</label>
      </div>
      <style jsx>
        {`
          .excludes-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .excludes-icon1 {
            display: flex;
            padding: 5px;
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #414141;
          }
          .excludes-icon2 {
            fill: #0f0f0f;
            width: 12px;
            height: 12px;
          }
          .excludes-label {
            color: #75797e;
            font-size: 14px;
            font-family: Poppins;
            line-height: 25px;
          }
        `}
      </style>
    </>
  )
}

Excludes.propTypes = {
  label: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Excludes

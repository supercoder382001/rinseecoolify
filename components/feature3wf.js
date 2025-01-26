import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Feature3wf = (props) => {
  return (
    <>
      <div className={`feature3wf-container1 ${props.rootClassName} `}>
        <div className="feature3wf-container2">
          <div className="feature3wf-container3">
            <Script
              html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Flippable Container</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flip-container">
        <div class="flipper">
            <div class="front">
                <p>Cleansing Techniques</p>
            </div>
            <div class="back">
                <h2>Neatly packed, nicely stacked</h2>
                <p>There’s a smart way to fold clothes so they can be deftly stored. To us, it’s almost like the origami of efficiency. Orderly and tidy.</p>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
<style>
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: inherit;
    margin: 5px;
    border-radius:24px;
}

.flip-container {
    perspective: 1000px;
}

.flipper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flip-container:hover .flipper {
    transform: rotateY(180deg);
}

.front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    border-radius:25px;
    background-color:#0074BC;
}

.front {
    font-size:60px;
}

.back {
    transform: rotateY(180deg);
    flex-direction: column; /* Align heading and content vertically */
    gap:10px;
    border-radius:24px;
}

.back h2 {
    margin: 0 0 10px 0; /* Space between heading and content */
    font-size: 2.5rem;
}

.back p {
    font-size: 1rem;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .feature3wf-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature3wf-container2 {
            width: 100%;
            height: 100%;
            border-radius: var(--dl-radius-radius-buttonradius);
          }
          .feature3wf-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

Feature3wf.propTypes = {
  rootClassName: PropTypes.string,
}

export default Feature3wf
